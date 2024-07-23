import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { ArchivosComponent } from '../archivos/archivos.component';
import { ComportamientoComponent } from '../comportamiento/comportamiento.component';

@Component({
  selector: 'app-detail-cartera',
  standalone: true,
  imports: [
    MatCardModule,
    MatTabsModule,
    ArchivosComponent,
    ComportamientoComponent,
  ],
  templateUrl: './detail-cartera.component.html',
  styleUrl: './detail-cartera.component.scss',
})
export class DetailCarteraComponent implements OnInit {
  cartera: String = '';
  clave: String = '';
  idcartera: number = 0;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.cartera = params['cartera'];
      this.clave = params['clave'];
      this.idcartera = params['idcartera'];
    });
  }

  ngOnInit(): void {
    console.log('DetailCarteraComponent');
  }
}
