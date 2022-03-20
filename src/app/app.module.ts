import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { SuccessAlertComponent } from './alert/success-alert.component';
import { WarningAlertComponent } from './alert/warning-alert.component';
import { AppComponent } from './app.component';
import { SecretGardenComponent } from './secret-garden/secret-garden.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './user/user.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    UserComponent,
    SecretGardenComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
})
export class AppModule {}
