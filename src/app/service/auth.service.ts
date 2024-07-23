import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

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
    private socialAuthService: SocialAuthService
  ) {}

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }

  SetUserData(userToken: SocialUser) {
    this.user = userToken;
    localStorage.setItem('user', JSON.stringify(userToken));
    //JSON.parse(localStorage.getItem('user')!);
    this.router.navigate(['/dashboard/default']);
  }

  SignOut() {
    localStorage.clear();
    localStorage.removeItem('user');
    this.showLoader = false;
    this.router.navigate(['/auth/login']);
    this.socialAuthService.signOut();
  }

  refreshToken(): void {
    this.socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  getAccessToken() {
    const userStore = JSON.parse(localStorage.getItem('user')!);
    return userStore;

    /*this.socialAuthService
      .getAccessToken(GoogleLoginProvider.PROVIDER_ID)
      .then((accessToken) => (this.accessToken = accessToken));
      */
  }

  getGoogleCalendarData(): void {
    if (!this.getAccessToken) return;
  }
  loginGoogle() {
    this.router.navigate(['/dashboard/default']);
  }
}
