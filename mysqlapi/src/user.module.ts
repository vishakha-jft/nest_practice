import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "./user.controller";
import { UserEntity, UserService } from "./user.service";


@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [UserController],
    providers: [UserService]
})

export class UserModel{}