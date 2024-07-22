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
  private isLocalStorageAvailable = typeof localStorage !== 'undefined';

  constructor(public router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.isLocalStorageAvailable) {
      if (
        localStorage.getItem('user') === null ||
        localStorage.getItem('user') === undefined ||
        localStorage.getItem('user') == 'null'
      ) {
        localStorage.clear();
        this.router.navigate(['/auth/login']);
        return true;
      } else {
        return true;
      }
    }
    return false;
  }
}
