import { Component } from '@angular/core';

@Component({
  selector: 'app-secret-garden',
  styleUrls: ['./secret-garden.component.css'],
  templateUrl: './secret-garden.component.html',
})
export class SecretGardenComponent {
  doorAccessLogs: { message: string; time: Date }[] = [];

  openDoor() {
    this.doorAccessLogs.push({ message: 'doorOpen', time: new Date() });
  }
}
