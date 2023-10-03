"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const bcrypt = require("bcrypt");
const mailer_1 = require("@nestjs-modules/mailer");
let AuthService = exports.AuthService = class AuthService {
    constructor(jwtService, userService, mailer) {
        this.jwtService = jwtService;
        this.userService = userService;
        this.mailer = mailer;
        this.issuer = 'login';
        this.audience = 'users';
    }
    createToken(user) {
        return {
            accessToken: this.jwtService.sign({
                id: user.id,
                name: user.name,
                email: user.email
            }, {
                expiresIn: '7 days',
                subject: String(user.id),
                issuer: this.issuer,
                audience: this.audience
            })
        };
    }
    checkToken(token) {
        try {
            const data = this.jwtService.verify(token, {
                audience: this.audience,
                issuer: this.issuer
            });
            return data;
        }
        catch (e) {
            throw new common_1.BadRequestException(e);
        }
    }
    isValidToken(token) {
        try {
            this.checkToken(token);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    async login(email, password) {
        const user = await this.prisma.user.findFirst({
            where: {
                email
            }
        });
        if (!user) {
            throw new common_1.UnauthorizedException('Email e/ou senha incorretos.');
        }
        if (!await bcrypt.compare(password, user.password)) {
            throw new common_1.UnauthorizedException('Email e/ou senha incorretos.');
        }
        return this.createToken(user);
    }
    async forget(email) {
        const user = await this.prisma.user.findFirst({
            where: {
                email
            }
        });
        if (!user) {
            throw new common_1.UnauthorizedException('Email esta incorreto.');
        }
        const token = this.jwtService.sign({
            id: user.id
        }, {
            expiresIn: '30 minutes',
            subject: String(user.id),
            issuer: 'forget',
            audience: 'users'
        });
        await this.mailer.sendMail({
            subject: 'Recuperaćão de senha',
            to: 'joao@gmail.com.br',
            template: 'forget',
            context: {
                name: user.name,
                token
            }
        });
        return true;
    }
    async reset(password, token) {
        try {
            const data = this.jwtService.verify(token, {
                audience: 'users',
                issuer: 'forget'
            });
            if (isNaN(Number(data.id))) {
                throw new common_1.BadRequestException('Token é invalido');
            }
            const salt = await bcrypt.genSalt();
            data.password = await bcrypt.hash(password, salt);
            const user = await this.prisma.user.update({
                where: {
                    id: Number(data.id)
                },
                data: {
                    password
                }
            });
            return this.createToken(user);
        }
        catch (e) {
            throw new common_1.BadRequestException(e);
        }
    }
    async register(data) {
        const user = await this.userService.create(data);
        return this.createToken(user);
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        user_service_1.UserService,
        mailer_1.MailerService])
], AuthService);
//# sourceMappingURL=auth.service.js.map