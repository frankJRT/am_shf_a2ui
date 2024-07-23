import { Component } from '@angular/core';
import { SidebarComponent } from '../../../shared/components/sidebar/sidebar.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ListCarteraComponent } from './list-cartera/list-cartera.component';

@Component({
  selector: 'app-carteras',
  standalone: true,
  imports: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    MatCardModule,
    ListCarteraComponent,
  ],
  templateUrl: './carteras.component.html',
  styleUrl: './carteras.component.scss',
})
export class CarterasComponent {}
