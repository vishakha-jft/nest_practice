import { Injectable } from '@nestjs/common';

@Injectable()
export class DataService {
    readonly data = [
        {
            id:1,
            username: 'john',
            password: 'john',
            role: 'user'
        },
        {
            id:2,
            username: 'maria',
            password: 'maria',
            role: 'admin'
        },
    ]

    async findone(username: string){
        return this.data.find(user=>user.username === username)
    }
    async find(){
        return this.data
    }
}
