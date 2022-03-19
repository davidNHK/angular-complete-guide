import { Component } from '@angular/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function hasEventTarget<T extends HTMLElement>(
  event: Event,
): event is Event & { target: T } {
  return event.target !== null;
}

@Component({
  selector: 'app-servers',
  styleUrls: ['./servers.component.css'],
  templateUrl: './servers.component.html',
})
export class ServersComponent {
  allowNewServer = false;

  serverCreationStatus = 'No Server created';

  serverName = 'Testserver';

  constructor() {
    setTimeout(() => (this.allowNewServer = true), 2000);
  }

  onCreatedServer() {
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
  }
}
