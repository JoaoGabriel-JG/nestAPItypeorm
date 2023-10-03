import { CreateUserDto } from "./DTO/create-user.dto";
import { PrismaService } from "../prisma/prisma.service";
import { UpdatePutUserDto } from "./DTO/update-put-user.dto";
import { UpdatePatchUserDto } from "./DTO/update-patch-user.dto";
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    list(): Promise<(import("@prisma/client/runtime/library").GetResult<{
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
    update(id: number, { email, name, password, birthAt, role }: UpdatePutUserDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        email: string;
        password: string;
        birthAt: Date;
        role: number;
        created_at: Date;
        updated_at: Date;
    }, unknown> & {}>;
    updatePartial(id: number, { email, name, password, birthAt, role }: UpdatePatchUserDto): Promise<import("@prisma/client/runtime/library").GetResult<{
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
    exist(id: number): Promise<void>;
}
