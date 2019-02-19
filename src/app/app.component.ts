import { Component } from '@angular/core';

import {Server, ServerService} from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = this.serverService.getAppName();
  servers: Server[] = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  constructor(private serverService: ServerService) {}
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  onSave() {
    this.serverService.storeServers(this.servers)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
  onGet() {
    this.serverService.getServers()
      .subscribe(
        (data: Server[]) => {
          for (const server of data) {
            server.name = 'FETCHED_' + server.name;
          }
          this.servers = data;
        },
        (error) => console.log('Something went wrong')
      );
      // .subscribe(
      //   (servers: any[]) => this.servers = servers,
      //   (error) => console.log(error)
      // );
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
