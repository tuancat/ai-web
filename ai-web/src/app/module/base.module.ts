import {NgModule} from '@angular/core';
import {NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HocPhiComponent} from './hoc-phi/hoc-phi/hoc-phi.component';
import { UserComponent } from './user/user.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../../environments/environment';
import { LoginComponent } from './login/login.component';
import { LeftSidemenuComponent } from './left-sidemenu/left-sidemenu.component';

@NgModule({
  imports: [
    NgbModule,
    NgbAlertModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
    RouterModule,
  ],
    declarations: [LeftSidemenuComponent],
    exports: [
      LeftSidemenuComponent
    ]
})
export class BaseModule {

}
