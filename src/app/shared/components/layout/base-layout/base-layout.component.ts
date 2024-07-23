import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouterOutlet } from '@angular/router';
import { CustomSidenavComponent } from '../../custom-sidenav/custom-sidenav.component';

@Component({
  selector: 'app-base-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    RouterOutlet,
    CustomSidenavComponent,
  ],
  templateUrl: './base-layout.component.html',
  styleUrl: './base-layout.component.scss',
})
export class BaseLayoutComponent {
  isOpen: boolean = true;
}
