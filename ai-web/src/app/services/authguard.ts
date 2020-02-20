import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

@Injectable()
export class Authguard implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const uid = localStorage.getItem('uid');
    if (uid === null || uid === '') {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
