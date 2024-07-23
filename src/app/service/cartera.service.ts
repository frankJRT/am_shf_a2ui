import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cartera } from '../models/cartera';
import { Periodo } from '../models/periodo';
import { ArchivoCorreo } from '../models/archivoCorreo';
import { CatUdi } from '../models/CatUdi';
import { CatUma } from '../models/CatUma';
import { CatDolar } from '../models/CatDolar';
const cabecera = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class CarteraService {
  carteraUrl = environment.carteraUrl;

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Cartera[]> {
    return this.httpClient.get<Cartera[]>(
      this.carteraUrl + 'carteras',
      cabecera
    );
  }

  public periodos(): Observable<Periodo[]> {
    return this.httpClient.get<Periodo[]>(
      this.carteraUrl + 'periodos',
      cabecera
    );
  }

  public listArchivosCorreo(
    cartera: number,
    periodo: number
  ): Observable<ArchivoCorreo[]> {
    let params = new HttpParams()
      .set('cartera', cartera)
      .set('periodo', periodo);

    return this.httpClient.get<ArchivoCorreo[]>(this.carteraUrl + 'archivos', {
      params: params,
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  public listaUdi(): Observable<CatUdi[]> {
    return this.httpClient.get<CatUdi[]>(this.carteraUrl + 'udis', cabecera);
  }

  public listaUma(): Observable<CatUma[]> {
    return this.httpClient.get<CatUma[]>(this.carteraUrl + 'umas', cabecera);
  }

  public listaDolar(): Observable<CatDolar[]> {
    return this.httpClient.get<CatDolar[]>(
      this.carteraUrl + 'dolares',
      cabecera
    );
  }

  public saveUid(dia: number, mes: number, anio: number, valor: number) {
    let params = new HttpParams()
      .set('dia', dia)
      .set('mes', mes)
      .set('anio', anio)
      .set('valor', valor);
    return this.httpClient.get(this.carteraUrl + 'udis/addUdi', {
      params: params,
      responseType: 'text',
    });
  }

  public saveUma(dia: number, mes: number, anio: number, valor: number) {
    let params = new HttpParams()
      .set('dia', dia)
      .set('mes', mes)
      .set('anio', anio)
      .set('valor', valor);
    return this.httpClient.get(this.carteraUrl + 'umas/addUmas', {
      params: params,
      responseType: 'text',
    });
  }

  public saveDolar(dia: number, mes: number, anio: number, valor: number) {
    let params = new HttpParams()
      .set('dia', dia)
      .set('mes', mes)
      .set('anio', anio)
      .set('valor', valor);
    return this.httpClient.get(this.carteraUrl + 'dolares/addDolar', {
      params: params,
      responseType: 'text',
    });
  }

  public deleteUdi(id: number) {
    return this.httpClient.delete(this.carteraUrl + 'udis/' + id, {
      responseType: 'text',
    });
  }
  public deleteUma(id: number) {
    return this.httpClient.delete(this.carteraUrl + 'umas/' + id, {
      responseType: 'text',
    });
  }
  public deleteDolar(id: number) {
    return this.httpClient.delete(this.carteraUrl + 'dolares/' + id, {
      responseType: 'text',
    });
  }
}
