import { Body, Controller, Get, Post } from '@nestjs/common';
import { userInfo } from 'os';
import { PusherService } from './pusher.service';

@Controller('api')
export class AppController {
constructor(private pusherService: PusherService){}
  @Post('messages')
  async messages(
    @Body('username') username:string,
    @Body('message') message:string
  ){
    await this.pusherService.trigger("gharmoul-chat","message",{username,message});
    return [];
  }
 
}
