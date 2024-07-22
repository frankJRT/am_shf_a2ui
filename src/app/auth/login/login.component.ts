import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  SocialAuthService,
  GoogleSigninButtonModule,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';

import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { OauthService } from '../../service/oauth.service';
import { TokenDtoService } from '../../service/token-dto.service';
import { AuthService } from '../../service/auth.service';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, GoogleSigninButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  public newUser = false;
  loginForm!: UntypedFormGroup;
  public socialUser = new SocialUser();
  userData: any; // Save logged in user data
  isLoggedin!: boolean;
  private accessToken = '';
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  public errorMessage: any;

  constructor(
    private socialAuthService: SocialAuthService,
    private authService: AuthService,
    private tokenService: TokenDtoService
  ) {}

  ngOnInit(): void {
    this.isLoggedin = this.tokenService.getToken != null;
    this.socialAuthService.authState.subscribe((user: any) => {
      console.log(user);
      this.authService.SetUserData(user);
    });
  }
}
