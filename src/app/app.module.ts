import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { SuccessAlertComponent } from './alert/success-alert.component';
import { WarningAlertComponent } from './alert/warning-alert.component';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
})
export class AppModule {}
