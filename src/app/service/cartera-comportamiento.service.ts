import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Cartera } from '../models/cartera';
const cabecera = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class CarteraComportamientoService {
  carteraUrl = environment.carteraUrl;
  constructor(private httpCliente: HttpClient) {}

  public lista(): Observable<Cartera[]> {
    return this.httpCliente.get<Cartera[]>(
      this.carteraUrl + 'carteras',
      cabecera
    );
  }
}
