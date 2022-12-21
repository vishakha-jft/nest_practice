import { Controller, Get,Request, Post ,Body} from '@nestjs/common';
import { AppService } from './app.service';
import { LoginService } from './login/login.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private loginservice:LoginService
    ) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @Post('/login')
  async login(@Body() body) {
    console.log("app login");
    let user=this.loginservice.validateuser(body.username,body.pass)
    return this.loginservice.login(user);
  }
}
