import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { TokenDto } from '../models/token-dto';
import { OauthService } from './oauth.service';
import { TokenDtoService } from './token-dto.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user!: SocialUser;
  public showLoader: boolean = false;
  userData: any; // Save logged in user data
  accessToken!: string;

  constructor(
    public router: Router,
    public ngZone: NgZone,
    private socialAuthService: SocialAuthService,
    private authService: OauthService,
    private tokenService: TokenDtoService
  ) {}

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(sessionStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }

  SetUserData(userToken: SocialUser) {
    sessionStorage.setItem('user', JSON.stringify(userToken));
    const tokenGoogle = new TokenDto(userToken.idToken);
    this.authService.google(tokenGoogle).subscribe((data) => {
      this.tokenService.setToken(
        data.value,
        userToken.email,
        userToken.name,
        userToken.photoUrl
      );
    });
    this.router.navigate(['/dashboard/default']);
  }

  SignOut() {
    sessionStorage.clear();
    sessionStorage.removeItem('user');
    this.showLoader = false;
    this.socialAuthService.signOut();
    this.router.navigate(['/auth/login']);
  }

  refreshToken(): void {
    this.socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  getAccessToken() {
    const userStore = JSON.parse(sessionStorage.getItem('user')!);
    /*
    this.socialAuthService
      .getAccessToken(GoogleLoginProvider.PROVIDER_ID)
      .then((accessToken) => (this.accessToken = accessToken));*/
    return userStore;
  }

  getGoogleCalendarData(): void {
    if (!this.getAccessToken) return;
  }
  loginGoogle() {
    this.router.navigate(['/dashboard/default']);
  }
}
