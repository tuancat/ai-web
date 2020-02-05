import {NgModule} from '@angular/core';
import {BaseModule} from '../base.module';
import { HocPhiComponent } from './hoc-phi/hoc-phi.component';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [
  {
    path: '',
    children: [],
    component: HocPhiComponent,
  },
];
@NgModule({
  declarations: [HocPhiComponent],
  imports: [
    BaseModule,
    RouterModule.forChild(routes),
  ]
})
export class HpModule {

}
