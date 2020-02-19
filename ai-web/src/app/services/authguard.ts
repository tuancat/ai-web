import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

@Injectable()
export class Authguard implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {
  }

  canActivate(): boolean {

    let request = this.authService.getCurrentUser().then(user => {
      return true;
    }, error => {

    });
    this.router.navigate(['/login']);
    return false;

    // return new Promise<boolean>(resolve => {
    //   this.authService.getCurrentUser().then(user => {
    //     resolve(true);
    //     // this.router.navigate(['/home']);
    //   }, error => {
    //
    //     // resolve(false);
    //     // this.router.navigate(['/login']);
    //   });
    // });
  }
}
