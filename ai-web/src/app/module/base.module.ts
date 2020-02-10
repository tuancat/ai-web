import {NgModule} from '@angular/core';
import {NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {Routes} from '@angular/router';
import {HocPhiComponent} from './hoc-phi/hoc-phi/hoc-phi.component';
import { UserComponent } from './user/user.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../../environments/environment';
import { LoginComponent } from './login/login.component';

@NgModule({
imports: [
  NgbModule,
  NgbAlertModule,
  FormsModule,
  AngularFireModule.initializeApp(environment.firebase),
  AngularFirestoreModule, // imports firebase/firestore, only needed for database features
  AngularFireAuthModule, // imports firebase/auth, only needed for auth features
],
declarations: [],
})
export class BaseModule {

}
