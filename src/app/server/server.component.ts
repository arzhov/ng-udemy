import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverID = 10;
  isOnline;

  constructor() {
    this.isOnline = Math.random() > 0.5;
  }

  ngOnInit() {
  }

  getStatus() {
    return this.isOnline ? 'online' : 'offline';
  }

  getColor() {
    return this.isOnline ? 'green' : 'red';
  }
}
