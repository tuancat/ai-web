import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './module/register/register.component';
import {LoginComponent} from './module/login/login.component';
import {Authguard} from './services/authguard';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent, canActivate: [Authguard]
  },
  {
    path: 'register', component: RegisterComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'hoc-phi',
    loadChildren: './module/hoc-phi/hp.module#HpModule',
    canActivate: [Authguard]
  },
  {
    path: 'user',
    loadChildren: './module/user/user.module#UserModule',
    canActivate: [Authguard]
  },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
