import { Injectable } from '@angular/core';
import CustomHttpClient from './http/httpClient';
import { Observable } from 'rxjs/internal/Observable';
import { clientResponseBody, clientBody, responseBody } from '../interfaces/client';

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

  createClient(payload: clientBody): Observable<clientResponseBody>{
    return this.customHttp.createClient(payload);
  }

  editClient(payload: clientBody): Observable<clientResponseBody>{
    return this.customHttp.editClient(payload);
  }

  deleteClient(id: number): Observable<string>{
    console.log(id, 'service')
    return this.customHttp.deleteClient(id);
  }
}
