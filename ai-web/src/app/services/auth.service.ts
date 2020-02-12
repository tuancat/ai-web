import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  constructor(afAuth: AngularFireAuth) {
  }

  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password).then(res => {
        resolve(res);
      }, err => {
        reject(err);
      });
    });
  }

  doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password).then(res => {
        resolve(res);
      }, err => {
        reject(err);
      });
    });
  }
  public static getCurrUser(): firebase.User {
    return firebase.auth().currentUser;
  }
}
