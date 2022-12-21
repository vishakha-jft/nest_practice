import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { DataModule } from 'src/data/data.module';
import { LoginController } from './login.controller';
import { JwtModule } from '@nestjs/jwt/dist';
@Module({
  imports:[
    DataModule,
    JwtModule.register({
      secret:'secretKey',
      signOptions:{expiresIn:'60s'}
    })
  ],
  providers: [LoginService],
  controllers: [LoginController]
})
export class LoginModule {}
