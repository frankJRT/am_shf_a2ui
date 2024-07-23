import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  SocialAuthService,
  GoogleSigninButtonModule,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UntypedFormGroup } from '@angular/forms';
import { TokenDtoService } from '../../service/token-dto.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    GoogleSigninButtonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
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
