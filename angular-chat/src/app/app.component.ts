import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-Nest';
  username ='username';
  message='';
  messages=[];
  constructor(private http:HttpClient){}
ngOnInit():void{
  Pusher.logToConsole = true;

    var pusher = new Pusher('d1bcbac14e9eb6cb5bc4', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('gharmoul-chat');
    channel.bind('message', data => {
     this.messages.push(data)
    });
}
  submit():void{

    this.http.post('http://localhost:8000/api/messages',{username:this.username,message:this.message}).subscribe(()=> this.message='')


  }
}
