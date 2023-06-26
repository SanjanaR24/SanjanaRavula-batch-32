import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './Login/Login.component';
import { SignupComponent } from './Signup/Signup.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccountsInfoComponent } from './accounts-info/accounts-info.component';
import { LogoutComponent } from './Logout/Logout.component';

@NgModule({
  declarations: [													
  AppComponent,
  HeaderComponent,
  LoginComponent,
  SignupComponent,
  ProfileComponent,
  AccountsInfoComponent,
      LogoutComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }