/// <reference types="multer" />
/// <reference types="express-serve-static-core" />
import { AuthLoginDto } from "./dto/auth-login.dto";
import { AuthRegisterDto } from "./dto/auth-register.dto";
import { AuthForgetDto } from "./dto/auth-forget.dto";
import { AuthResetDto } from "./dto/auth-reset.dto";
import { UserService } from "../user/user.service";
import { AuthService } from "./auth.service";
import { FileService } from "../file/file.service";
export declare class AuthController {
    private readonly userService;
    private readonly authService;
    private readonly fileService;
    constructor(userService: UserService, authService: AuthService, fileService: FileService);
    login({ email, password }: AuthLoginDto): Promise<{
        accessToken: string;
    }>;
    register(body: AuthRegisterDto): Promise<{
        accessToken: string;
    }>;
    forget({ email }: AuthForgetDto): Promise<boolean>;
    reset({ password, token }: AuthResetDto): Promise<{
        accessToken: string;
    }>;
    me(user: any): Promise<{
        user: any;
    }>;
    uploadPhoto(user: any, photo: Express.Multer.File): Promise<{
        sucess: boolean;
    }>;
    uploadFiles(user: any, files: Express.Multer.File[]): Promise<Express.Multer.File[]>;
    uploadFilesFields(user: any, files: {
        photo: Express.Multer.File;
        documents: Express.Multer.File[];
    }): Promise<{
        photo: Express.Multer.File;
        documents: Express.Multer.File[];
    }>;
}
