import { Body, Controller ,Get,Post} from '@nestjs/common';
import { LoginService } from './login.service';
@Controller('login')
export class LoginController {
    constructor(private readonly loginService:LoginService){}
    @Post()
    login(@Body() body){
        console.log("login cintroller");
        
        return this.loginService.validateuser(body.username,body.pass)
    }
}
