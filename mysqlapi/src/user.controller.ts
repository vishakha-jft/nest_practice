import { Get, HttpStatus, Response, Controller, Post, Put, Res } from "@nestjs/common";
import { Delete } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { Body, Param } from "@nestjs/common/decorators/http/route-params.decorator";
import { UserEntity, UserService } from "./user.service";


@Controller('user')
export class UserController{
    constructor(private userservice: UserService){}

    @Get()
    async fillall(): Promise<any>{
        console.log("in fill all");
        return await this.userservice.findAll();
    }

    @Get(":id")
    async findOne(@Param() id:number){
        return await this.userservice.findOne(id);
    }

    @Post()
    async create(@Body() createuserDto:UserEntity){
        console.log("in post request");    
        return await this.userservice.create(createuserDto);        
    }

    @Put(":id")
    async update(@Param() id: number, @Body() createuserDto:UserEntity){
        return await this.userservice.update(id, createuserDto);
       
    }

    @Delete(":id")
    async delete(@Param("id") id: number){
        return this.userservice.remove(id);
        
    }
}