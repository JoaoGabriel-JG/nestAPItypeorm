import {Injectable, NotFoundException} from "@nestjs/common";
import {CreateUserDto} from "./DTO/create-user.dto";
import {UpdatePutUserDto} from "./DTO/update-put-user.dto";
import {UpdatePatchUserDto} from "./DTO/update-patch-user.dto";
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {

    async create(data: CreateUserDto) {
        const salt = await bcrypt.genSalt()
        data.password = await bcrypt.hash(data.password, salt)

        return this.prisma.user.create({
            data,
        });
    }

    async list() {
        return this.prisma.user.findMany();
    }

    async show(id: number) {
        await this.exist(id)

        return this.prisma.user.findUnique({
            where: {
                id
            }
        })
    }

    async update(id: number, {email, name, password, birthAt, role}: UpdatePutUserDto) {
        await this.exist(id)

        const salt = await bcrypt.genSalt()
        password = await bcrypt.hash(password, salt)

        return this.prisma.user.update({
            data: {email, name, password, birthAt: birthAt ? new Date(birthAt) : null, role},
            where: {
                id
            }
        })
    }
    async updatePartial(id: number, {email, name, password, birthAt, role}: UpdatePatchUserDto) {
        const data: any = {}

        await this.exist(id)

        if(data.birthAt) {
            data.birthAt = new Date(birthAt)
        }
        if(email) {
            data.email = email
        }
        if(name) {
            data.name = name
        }
        if(password) {
            const salt = await bcrypt.genSalt()
            data.password = await bcrypt.hash(password, salt)
        }
        if(role) {
            data.role = role
        }
        return this.prisma.user.update({
            data,
            where: {
                id
            }
        })
    }

    async delete(id: number) {
        await this.exist(id)

        return this.prisma.user.delete({
            where: {
                id
            }
        })
    }
    async exist(id: number){
        if(!(await this.prisma.user.count({
            where: {
                id
            }
        }))) {
            throw new NotFoundException(`O usuário com o id ${id} não existe`)
        }
    }

}

