import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { Router } from '@angular/router';
import { PeriodoProceso } from '../../../../../models/periodo-proceso';
import { ComportamientoService } from '../../../../../service/comportamiento.service';
import { DelayService } from '../../../../../service/delay.service';
import { CarteraComportamientoBitacora } from '../../../../../models/cartera-comportamiento-bitacora';

@Component({
  selector: 'app-bitacora-comportamiento',
  standalone: true,
  imports: [MatTableModule, MatFormFieldModule, MatInputModule],
  templateUrl: './bitacora-comportamiento.component.html',
  styleUrl: './bitacora-comportamiento.component.scss',
})
export class BitacoraComportamientoComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'fecha',
    'usuario',
    'modulo',
    'action',
    'values',
    'status',
  ];

  carterasBitacora!: CarteraComportamientoBitacora[];
  dataSource = new MatTableDataSource(this.carterasBitacora);

  constructor(
    private router: Router,
    private comportamientoService: ComportamientoService,
    private delayService: DelayService
  ) {}
  message: string = 'Starting...';

  async ngOnInit() {
    await this.delayService.delay(3000); // 2 segundos de retraso
    this.comportamientoService
      .listBitacoraComportamiento()
      .subscribe((data) => {
        this.carterasBitacora = data;
        this.dataSource = new MatTableDataSource(this.carterasBitacora);
      });
  }

  applyFilter(event: Event) {
    /*
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
    */
  }
}
