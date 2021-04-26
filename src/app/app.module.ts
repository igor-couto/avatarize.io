import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AvatarService } from './services/avatar.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UserInputComponent } from './user-input/user-input.component';
import { FooterComponent } from './footer/footer.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    UserInputComponent,
    FooterComponent,
    SettingsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [AvatarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
