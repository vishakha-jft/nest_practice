import { Injectable } from '@nestjs/common';
import { DataService } from 'src/data/data.service'; 
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class LoginService {
    constructor(
        private dataService:DataService,
        private jwtservice:JwtService
        ){}
    async validateuser(username: string,pass: string){
        console.log("validate user");
        
        const user = await this.dataService.findone(username);
        if (user && user.password === pass){
            return user
        }
        return null;
    }
    async login(user:any){
        console.log("login jwt")
        const payload = {username: user.username, sub:user.id}
        return {
            token: this.jwtservice.sign(payload,{expiresIn:'1h'})
        }
    }
}