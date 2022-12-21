import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm"
import {Entity,Column, PrimaryGeneratedColumn,Repository } from "typeorm";
@Entity()
export class UserEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @Column()
    job:string;

    @Column()
    salary:number;
}
@Injectable()
export class UserService{
    constructor(
        @InjectRepository(UserEntity)
        private userRepositry:Repository<UserEntity>,
    ) {}
    findAll():Promise<UserEntity[]>{
        return this.userRepositry.find()
    }
    findOne(id: number):Promise<UserEntity>{
        return this.userRepositry.findOneBy({id});
    }
    create(user:UserEntity){
        return this.userRepositry.save(user)
    }
    async update(id: number, user:UserEntity){
        await this.userRepositry.update(id,user)
    }
    async remove(id:number){
        await this.userRepositry.delete(id);
    }
}
