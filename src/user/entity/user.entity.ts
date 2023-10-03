import {Entity} from 'typeorm'
import {Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm/browser";

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn({
        unsigned: true
    })
    id: number

    @Column({
        length: 63
    })
    name: string

    @Column({
        length: 127,
        unique: true
    })
    email: string

    @Column({
        length: 127
    })
    password: string

    @Column({
        type: "date",
        nullable: true
    })
    birthAt: string

    @CreateDateColumn()
    created_at: string

    @UpdateDateColumn()
    updated_at: string

    @Column({
        enum: [1, 2]
    })
    role: number
}