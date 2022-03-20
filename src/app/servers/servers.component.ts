import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  styleUrls: ['./servers.component.css'],
  templateUrl: './servers.component.html',
})
export class ServersComponent {
  allowNewServer = false;

  serverCreationStatus = 'No Server created';

  serverName = 'Testserver';

  serverCreated = false;

  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => (this.allowNewServer = true), 2000);
  }

  onCreatedServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
  }
}
