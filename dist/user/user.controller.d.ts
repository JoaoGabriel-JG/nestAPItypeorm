import { CreateUserDto } from "./DTO/create-user.dto";
import { UpdatePutUserDto } from "./DTO/update-put-user.dto";
import { UpdatePatchUserDto } from "./DTO/update-patch-user.dto";
import { UserService } from "./user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(data: CreateUserDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        email: string;
        password: string;
        birthAt: Date;
        role: number;
        created_at: Date;
        updated_at: Date;
    }, unknown> & {}>;
    read(): Promise<(import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        email: string;
        password: string;
        birthAt: Date;
        role: number;
        created_at: Date;
        updated_at: Date;
    }, unknown> & {})[]>;
    show(id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        email: string;
        password: string;
        birthAt: Date;
        role: number;
        created_at: Date;
        updated_at: Date;
    }, unknown> & {}>;
    update(data: UpdatePutUserDto, id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        email: string;
        password: string;
        birthAt: Date;
        role: number;
        created_at: Date;
        updated_at: Date;
    }, unknown> & {}>;
    updatePartial(data: UpdatePatchUserDto, id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        email: string;
        password: string;
        birthAt: Date;
        role: number;
        created_at: Date;
        updated_at: Date;
    }, unknown> & {}>;
    delete(id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        email: string;
        password: string;
        birthAt: Date;
        role: number;
        created_at: Date;
        updated_at: Date;
    }, unknown> & {}>;
}
