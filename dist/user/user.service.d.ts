import { CreateUserDto } from "./DTO/create-user.dto";
import { UpdatePutUserDto } from "./DTO/update-put-user.dto";
import { UpdatePatchUserDto } from "./DTO/update-patch-user.dto";
export declare class UserService {
    create(data: CreateUserDto): Promise<any>;
    list(): Promise<any>;
    show(id: number): Promise<any>;
    update(id: number, { email, name, password, birthAt, role }: UpdatePutUserDto): Promise<any>;
    updatePartial(id: number, { email, name, password, birthAt, role }: UpdatePatchUserDto): Promise<any>;
    delete(id: number): Promise<any>;
    exist(id: number): Promise<void>;
}
