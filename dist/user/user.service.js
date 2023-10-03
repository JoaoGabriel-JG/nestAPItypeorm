"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
let UserService = exports.UserService = class UserService {
    async create(data) {
        const salt = await bcrypt.genSalt();
        data.password = await bcrypt.hash(data.password, salt);
        return this.prisma.user.create({
            data,
        });
    }
    async list() {
        return this.prisma.user.findMany();
    }
    async show(id) {
        await this.exist(id);
        return this.prisma.user.findUnique({
            where: {
                id
            }
        });
    }
    async update(id, { email, name, password, birthAt, role }) {
        await this.exist(id);
        const salt = await bcrypt.genSalt();
        password = await bcrypt.hash(password, salt);
        return this.prisma.user.update({
            data: { email, name, password, birthAt: birthAt ? new Date(birthAt) : null, role },
            where: {
                id
            }
        });
    }
    async updatePartial(id, { email, name, password, birthAt, role }) {
        const data = {};
        await this.exist(id);
        if (data.birthAt) {
            data.birthAt = new Date(birthAt);
        }
        if (email) {
            data.email = email;
        }
        if (name) {
            data.name = name;
        }
        if (password) {
            const salt = await bcrypt.genSalt();
            data.password = await bcrypt.hash(password, salt);
        }
        if (role) {
            data.role = role;
        }
        return this.prisma.user.update({
            data,
            where: {
                id
            }
        });
    }
    async delete(id) {
        await this.exist(id);
        return this.prisma.user.delete({
            where: {
                id
            }
        });
    }
    async exist(id) {
        if (!(await this.prisma.user.count({
            where: {
                id
            }
        }))) {
            throw new common_1.NotFoundException(`O usuário com o id ${id} não existe`);
        }
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=user.service.js.map