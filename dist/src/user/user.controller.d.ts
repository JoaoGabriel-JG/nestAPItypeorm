import { CreateUserDto } from "./DTO/create-user.dto";
import { UpdatePutUserDto } from "./DTO/update-put-user.dto";
import { UpdatePatchUserDto } from "./DTO/update-patch-user.dto";
import { UserService } from "./user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(data: CreateUserDto): Promise<import("./entity/user.entity").UserEntity>;
    read(): Promise<import("./entity/user.entity").UserEntity[]>;
    show(id: number): Promise<import("./entity/user.entity").UserEntity>;
    update(data: UpdatePutUserDto, id: number): Promise<import("./entity/user.entity").UserEntity>;
    updatePartial(data: UpdatePatchUserDto, id: number): Promise<import("./entity/user.entity").UserEntity>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
