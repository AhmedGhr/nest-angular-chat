import { Injectable } from '@nestjs/common';
import * as Pusher from 'pusher';

@Injectable()
export class PusherService {
    pusher:Pusher;
constructor(){
    this.pusher = new Pusher({
        appId: "1218449",
        key: "d1bcbac14e9eb6cb5bc4",
        secret: "55f2dbd8abf0028e9332",
        cluster: "eu",
        useTLS: true
      });
}

async trigger(channel:string ,event:string ,data:any){
    await this.pusher.trigger(channel,event,data);
}

}
