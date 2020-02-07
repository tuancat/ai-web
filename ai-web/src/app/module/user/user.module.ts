import {NgModule} from '@angular/core';
import {BaseModule} from '../base.module';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user.component';
const routes: Routes = [
  {
    path: '',
    children: [],
    component: UserComponent,
  },
];
@NgModule({
  declarations: [UserComponent],
  imports: [
    BaseModule,
    RouterModule.forChild(routes),
  ]
})
export class UserModule {

}
