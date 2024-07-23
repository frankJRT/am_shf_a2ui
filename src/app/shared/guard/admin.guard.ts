import { Injectable, Inject } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  private isLocalStorageAvailable = typeof sessionStorage !== 'undefined';

  constructor(public router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.isLocalStorageAvailable) {
      if (
        sessionStorage.getItem('user') === null ||
        sessionStorage.getItem('user') === undefined ||
        sessionStorage.getItem('user') == 'null'
      ) {
        //sessionStorage.clear();
        this.router.navigate(['/auth/login']);
        return true;
      } else {
        return true;
      }
    }
    return false;
  }
}
