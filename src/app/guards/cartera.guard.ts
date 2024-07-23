import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { TokenDtoService } from '../service/token-dto.service';

@Injectable({
  providedIn: 'root',
})
export class CarteraGuard {
  constructor(private tokenService: TokenDtoService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.tokenService.getToken()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
