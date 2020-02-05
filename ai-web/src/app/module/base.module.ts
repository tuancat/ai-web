import {NgModule} from '@angular/core';
import {NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {Routes} from '@angular/router';
import {HocPhiComponent} from './hoc-phi/hoc-phi/hoc-phi.component';

@NgModule({
imports: [
  NgbModule,
  NgbAlertModule,
  FormsModule
],
})
export class BaseModule {

}
