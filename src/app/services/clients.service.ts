import { Injectable } from '@angular/core';
import CustomHttpClient from './http/httpClient';
import { Observable } from 'rxjs/internal/Observable';
import { clientResponseBody, clientBody, responseBody } from '../interfaces/client';
import { Store } from '@ngrx/store';
import { allSelectedClients } from '../store/clients/seleted/select.client.selectos';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(
    private customHttp: CustomHttpClient,
    private store: Store
  ) { }


  getAll(page: number, limit: number): Observable<responseBody>{
    return this.customHttp.getAllClients(page, limit);
  }

  createClient(payload: clientBody): Observable<clientResponseBody>{
    return this.customHttp.createClient(payload);
  }

  editClient(id: number, payload: clientBody): Observable<clientResponseBody>{
    return this.customHttp.editClient(id ,payload);
  }

  deleteClient(id: number): Observable<string>{
    console.log(id, 'service')
    return this.customHttp.deleteClient(id);
  }

   selectClient(client: clientResponseBody): Observable<clientResponseBody[]>{
    console.log('chegou no service', client);


    console.log(this.store.select(allSelectedClients).pipe(
      map((i) => console.log(i))
    ))

    const listOfClients = this.store.select(allSelectedClients).pipe(
      map((clientStore) => {
       return clientStore;
      })
    )

    return listOfClients;
  }

}
