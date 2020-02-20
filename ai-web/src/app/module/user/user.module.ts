import {NgModule} from '@angular/core';
import {BaseModule} from '../base.module';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user.component';
import {UserService} from '../../services/user.service';
const routes: Routes = [
  {
    path: '',
    children: [],
    component: UserComponent,
  },
];
@NgModule({
  declarations: [UserComponent],
  exports: [
    UserComponent
  ],
  providers: [UserService],
  imports: [
    BaseModule,
    RouterModule.forChild(routes),
  ]
})
export class UserModule {

}
