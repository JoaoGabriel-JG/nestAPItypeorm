import { CreateUserDto } from "./DTO/create-user.dto";
import { UpdatePutUserDto } from "./DTO/update-put-user.dto";
import { UpdatePatchUserDto } from "./DTO/update-patch-user.dto";
import { UserEntity } from "./entity/user.entity";
import { Repository } from "typeorm";
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<UserEntity>);
    create(data: CreateUserDto): Promise<UserEntity>;
    list(): Promise<UserEntity[]>;
    show(id: number): Promise<UserEntity>;
    update(id: number, { email, name, password, birthAt, role }: UpdatePutUserDto): Promise<UserEntity>;
    updatePartial(id: number, { email, name, password, birthAt, role }: UpdatePatchUserDto): Promise<UserEntity>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    exist(id: number): Promise<void>;
}
