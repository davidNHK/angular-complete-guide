import { Component } from '@angular/core';

@Component({
  selector: 'app-alert[level="success"]',
  styles: [
    `
      h1 {
        color: greenyellow;
      }
    `,
  ],
  templateUrl: './alert.component.html',
})
export class SuccessAlertComponent {
  level = 'Success';
}
