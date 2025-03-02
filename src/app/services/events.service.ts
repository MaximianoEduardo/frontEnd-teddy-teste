
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllClients } from '../store/clients/get/clients.actions';
import { selectClient } from '../store/clients/seleted/select.client.actions';
import { clientResponseBody } from '../interfaces/client';
import { allSelectedClients } from '../store/clients/seleted/select.client.selectos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientDispatchService {

  constructor(
    private store: Store
  ) { }

  dispatchGetAllClients(page: number, limit: number, isloading: boolean){
    return this.store.dispatch(getAllClients({page, limit , isloading}));
  }

  dispatchSelectClient(payload: clientResponseBody){
    return this.store.dispatch(selectClient({ payload }))
  }

  dispatchGetAllSelectsClients(): Observable<clientResponseBody[]>{
    return this.store.select(allSelectedClients);
  }
}
