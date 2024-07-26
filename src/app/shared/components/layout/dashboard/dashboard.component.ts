import { Component } from '@angular/core';
import { BitacoraComportamientoComponent } from '../../../../pages/cat/carteras/comportamiento/bitacora-comportamiento/bitacora-comportamiento.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BitacoraComportamientoComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
