import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BaseModule} from './module/base.module';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material';
import { RegisterComponent } from './module/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';
import {LoginComponent} from './module/login/login.component';
import {Authguard} from './services/authguard';
import {UserModule} from './module/user/user.module';
import {LeftSidemenuComponent} from './module/left-sidemenu/left-sidemenu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BaseModule,
    AppRoutingModule,
    RouterModule,
    MatSliderModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule
  ],
  providers: [AuthService, Authguard, LeftSidemenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
