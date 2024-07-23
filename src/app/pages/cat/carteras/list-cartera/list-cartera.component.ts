import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cartera } from '../../../../models/cartera';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { NavigationExtras, Router } from '@angular/router';
import { CarteraService } from '../../../../service/cartera.service';

@Component({
  selector: 'app-list-cartera',
  standalone: true,
  imports: [MatTableModule, MatFormFieldModule, MatInputModule],
  templateUrl: './list-cartera.component.html',
  styleUrl: './list-cartera.component.scss',
})
export class ListCarteraComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'd_Alta',
    'n_Clave_Cartera',
    'n_Nombre',
    'actions',
  ];

  carteras!: Cartera[];
  dataSource = new MatTableDataSource(this.carteras);

  constructor(private router: Router, private carteraService: CarteraService) {}

  ngOnInit(): void {
    console.log('ListCarteraComponent');
    this.carteraService.lista().subscribe((data) => {
      this.carteras = data;
      this.dataSource = new MatTableDataSource(this.carteras);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getCarteraDetalle(event: Event, car: Cartera): void {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        cartera: car.n_Nombre,
        clave: car.n_Clave_Cartera,
        idcartera: car.id,
      },
    };
    console.log(navigationExtras);
    this.router.navigate(['cartera/detalle-cartera'], navigationExtras);
  }
}
