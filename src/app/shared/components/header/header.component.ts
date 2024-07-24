import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgFor } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    NgFor,
    MatExpansionModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  userName: string = 'Frank';

  @Output() toggleMenu = new EventEmitter<void>();

  constructor(public router: Router, private authService: AuthService) {}
  ngOnInit(): void {
    const tok = this.authService.getAccessToken();
    this.userName = tok.name;
  }

  login() {
    this.router.navigate(['/auth/login']);
  }
  logout() {
    this.authService.SignOut();
  }
}
