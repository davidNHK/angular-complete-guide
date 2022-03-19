import { Component } from '@angular/core';

@Component({
  selector: 'app-alert[level="success"]',
  styles: [
    `
      p {
        padding: 20px;
        background-color: palegreen;
        border: 1px solid green;
      }
    `,
  ],
  templateUrl: './alert.component.html',
})
export class SuccessAlertComponent {}
