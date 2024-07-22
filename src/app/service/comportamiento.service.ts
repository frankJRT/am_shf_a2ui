import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment'; 
import { Observable } from 'rxjs';
import { PeriodoProceso } from '../models/periodo-proceso';
import { ControlEnvio } from '../models/control-envio';
import { ControlEnvioStatic } from '../models/control-envio-static';

const  cabecera = {headers: new HttpHeaders({'Content-Type':'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class ComportamientoService {
  
  comportamientoUrl = environment.comportamientoUrl;
  comportamientoV9Url = environment.comportamientoV9Url;

  constructor(private httpClient: HttpClient) { }
  
  public listbyCartera(cartera:number ):Observable<PeriodoProceso[]>{

    let params = new HttpParams().set('id', cartera);
    return this.httpClient.get<PeriodoProceso[]>(this.comportamientoUrl+'listPeriodoProcesos',
      {params:params,
        headers:new HttpHeaders({'Content-Type':'application/json'})});
  }

  public listFilesbyCartera(periodoProceso:number ):Observable<ControlEnvio[]>{

    let params = new HttpParams().set('id', periodoProceso);
    return this.httpClient.get<ControlEnvio[]>(this.comportamientoUrl+'listFiles',
      {params:params,
        headers:new HttpHeaders({'Content-Type':'application/json'})});
  }

  public staticsFile(fileid:number):Observable<ControlEnvioStatic[]>{
    let params = new HttpParams().set('id',fileid);
    return this.httpClient.get<ControlEnvioStatic[]>(this.comportamientoUrl+'staticsFile',
      {params:params, headers:new HttpHeaders({'Content-Type':'application/json'})}
    );
  }

  public deleteFile(id:number){
    return this.httpClient.delete(this.comportamientoUrl+'deleteFile/'+id, {responseType: 'text'});
  }

  public uploadProdData(id:number){
    return this.httpClient.get(this.comportamientoUrl+'spInsertDataPeriodoProceso/'+id, {responseType: 'text'});
  }

  public generaV9(idCartera:number,idPeriodo:string){
    let params = new HttpParams().set('id',idCartera).set('idPeriodo',idPeriodo);
    return this.httpClient.get(this.comportamientoV9Url+'generaComportamientoV9',
      {params:params, headers:new HttpHeaders({'Content-Type':'application/json'}), responseType: 'blob'}
    );
  }


  public generaProcessPython(proc:number,idCartera:number,idPeriodo:string){
    let params = new HttpParams().set('proc',proc).set('id',idCartera).set('idPeriodo',idPeriodo);
    return this.httpClient.get(this.comportamientoUrl+'procesoPython',
      {params:params, headers:new HttpHeaders({'Content-Type':'application/json'}), responseType: 'blob'}
    );
  }

}