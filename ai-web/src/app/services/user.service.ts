import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable()
export class UserService {
  constructor(public db: AngularFirestore) {
  }
  public getUsers() {
    return this.db.collection('users').snapshotChanges();
  }
}
