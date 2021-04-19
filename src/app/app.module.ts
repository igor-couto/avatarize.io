import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UserInputComponent } from './user-input/user-input.component';
import { FooterComponent } from './footer/footer.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsButtonComponent } from './settings-button/settings-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    UserInputComponent,
    FooterComponent,
    SettingsComponent,
    SettingsButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
