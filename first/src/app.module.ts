import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';
import { DataModule } from './data/data.module';
import { AdminModule } from './admin/admin.module';
import { LoginService } from './login/login.service';
import { JwtModule } from '@nestjs/jwt/dist';

@Module({
  imports: [LoginModule, UserModule, DataModule, AdminModule,JwtModule],
  controllers: [AppController],
  providers: [AppService,LoginService],
})
export class AppModule {}
