import { Component } from '@angular/core';

@Component({
  selector: 'app-alert[level="warning"]',
  styles: [
    `
      h1 {
        color: yellow;
      }
    `,
  ],
  templateUrl: './alert.component.html',
})
export class WarningAlertComponent {
  level = 'Warning';
}
