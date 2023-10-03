import { CreateUserDto } from "./DTO/create-user.dto";
import { UpdatePutUserDto } from "./DTO/update-put-user.dto";
import { UpdatePatchUserDto } from "./DTO/update-patch-user.dto";
import { UserService } from "./user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(data: CreateUserDto): Promise<any>;
    read(): Promise<any>;
    show(id: number): Promise<any>;
    update(data: UpdatePutUserDto, id: number): Promise<any>;
    updatePartial(data: UpdatePatchUserDto, id: number): Promise<any>;
    delete(id: number): Promise<any>;
}
