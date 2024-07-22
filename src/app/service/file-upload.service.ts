import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'; 
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

    comportamientoUrl = environment.comportamientoUrl;
  
  constructor(private http: HttpClient) { 

  }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.comportamientoUrl}/exportServerDocument`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  getFiles(): Observable<any> {
    return this.http.get(`${this.comportamientoUrl}/files`);
  }
}
