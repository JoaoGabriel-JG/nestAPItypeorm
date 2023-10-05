import { JwtService } from "@nestjs/jwt";
import { AuthRegisterDto } from "./dto/auth-register.dto";
import { UserService } from "../user/user.service";
import { MailerService } from "@nestjs-modules/mailer";
import { UserEntity } from "../user/entity/user.entity";
import { Repository } from "typeorm";
export declare class AuthService {
    private readonly jwtService;
    private readonly userService;
    private readonly mailer;
    private usersRepository;
    private issuer;
    private audience;
    constructor(jwtService: JwtService, userService: UserService, mailer: MailerService, usersRepository: Repository<UserEntity>);
    createToken(user: UserEntity): {
        accessToken: string;
    };
    checkToken(token: string): any;
    isValidToken(token: string): boolean;
    login(email: string, password: string): Promise<{
        accessToken: string;
    }>;
    forget(email: string): Promise<boolean>;
    reset(password: string, token: string): Promise<{
        accessToken: string;
    }>;
    register(data: AuthRegisterDto): Promise<{
        accessToken: string;
    }>;
}
