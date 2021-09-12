import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpBackend, HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MqApiServiceService {

  constructor(public http: HttpClient,
              private handler: HttpBackend) {
    this.http = new HttpClient(this.handler);
  }

 public upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${environment.baseUrl}/import`, formData, {
      reportProgress: true,
      responseType: 'json',
    });
    return this.http.request(req);
  }

  public getEmployee(): Observable<HttpEvent<any>> {
    const req = new HttpRequest('GET', `${environment.baseUrl}/employees`, {
      reportProgress: true,
      responseType: 'json',
    });
    return this.http.request(req);
  }

  public getMatches(): Observable<HttpEvent<any>> {
    const req = new HttpRequest('GET', `${environment.baseUrl}/matchResult`, {
      reportProgress: true,
      responseType: 'json',
    });
    return this.http.request(req);
  }

}
