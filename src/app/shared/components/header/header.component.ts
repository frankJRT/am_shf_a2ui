import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  userName: string = 'Frank';

  @Output() toggleMenu = new EventEmitter<void>();

  constructor(public router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    console.log('entra');
    console.log(this.authService);
  }

  login() {
    console.log('entra');
    this.router.navigate(['/auth/login']);
  }
}
