import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './module/register/register.component';
import {LoginComponent} from './module/login/login.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
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
  },
  {
    path: 'user',
    loadChildren: './module/user/user.module#UserModule',
  },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
