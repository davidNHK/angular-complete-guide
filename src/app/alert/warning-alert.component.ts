import { Component } from '@angular/core';

@Component({
  selector: 'app-alert[level="warning"]',
  styles: [
    `
      p {
        padding: 20px;
        background-color: mistyrose;
        border: 1px solid red;
      }
    `,
  ],
  templateUrl: './alert.component.html',
})
export class WarningAlertComponent {}
