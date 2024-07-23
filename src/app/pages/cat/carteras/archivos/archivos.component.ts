import { Component, Input } from '@angular/core';
import { Periodo } from '../../../../models/periodo';
import { MatTableDataSource } from '@angular/material/table';
import { ArchivoCorreo } from '../../../../models/archivoCorreo';
import { HttpClient } from '@angular/common/http';
import { CarteraService } from '../../../../service/cartera.service';
import { Router } from 'express';
import { MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-archivos',
  standalone: true,
  imports: [
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
  ],
  templateUrl: './archivos.component.html',
  styleUrl: './archivos.component.scss',
})
export class ArchivosComponent {
  /*
  @Input() idCartera = 0;
  selectedPeriod: number = 0;
  periodos!: Periodo[];

  displayedColumns: string[] = ['primario', 'subject', 'archivo'];

  archivos!: ArchivoCorreo[];
  dsArchivos = new MatTableDataSource(this.archivos);

  constructor(
    private http: HttpClient,
    private carteraService: CarteraService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.carteraService.periodos().subscribe((data) => {
      this.periodos = data;
    });
  }

  getFiles(event: Event) {
    if (this.selectedPeriod == 0) {
      alert('Seleccionar un Periodo');
      return;
    }
    //alert(this.idCartera);
    this.carteraService
      .listArchivosCorreo(this.idCartera, this.selectedPeriod)
      .subscribe((data) => {
        this.archivos = data;
        this.dsArchivos = new MatTableDataSource(this.archivos);
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dsArchivos.filter = filterValue.trim().toLowerCase();
  }
    */
}
