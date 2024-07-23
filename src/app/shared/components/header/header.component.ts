import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  userName: string = 'Frank';

  @Output() toggleMenu = new EventEmitter<void>();

  constructor(public router: Router, private authService: AuthService) {}

  login() {
    this.router.navigate(['/auth/login']);
  }
}
