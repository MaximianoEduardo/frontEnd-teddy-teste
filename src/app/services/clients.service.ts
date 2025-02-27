import { Injectable } from '@angular/core';
import CustomHttpClient from './http/httpClient';
import { Observable } from 'rxjs/internal/Observable';
import { clientResponseBody, createUserBody, responseBody } from '../interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(
    private customHttp: CustomHttpClient
  ) { }


  getAll(page: number, limit: number): Observable<responseBody>{
    return this.customHttp.getAllClients(page, limit);
  }

  createClient(payload: createUserBody): Observable<clientResponseBody>{
    return this.customHttp.createClient(payload);
  }
}
