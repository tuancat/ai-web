import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  constructor(afAuth: AngularFireAuth, public router: Router) {
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

  getCurrentUser(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      var user = firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          resolve(user);
        } else {
          reject('No user logged in');
        }
      });
    });
  }

  // public static getCurrUser(): firebase.User {
  //   return firebase.auth().
  // }

  canActive(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.getCurrentUser().then(user => {
          resolve
      }, err => {

      });
    });
  }
}
