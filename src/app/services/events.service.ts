
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllClients } from '../store/clients/get/clients.actions';
import { removeSelectedClient, selectClient } from '../store/clients/seleted/select.client.actions';
import { clientResponseBody } from '../interfaces/client';
import { allSelectedClients } from '../store/clients/seleted/select.client.selectos';
import { Observable } from 'rxjs';
import { createUser, logoutUser } from '../store/user/user.actions';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientDispatchService {

  constructor(
    private store: Store,
    private router: Router
  ) { }

  dispatchLoginUser(name: string){
    return this.store.dispatch(createUser({name}));
  }

  dispatchLogoutUser(name: string){
    this.router.navigate(['/']);
    return this.store.dispatch(logoutUser({name}));
  }



  dispatchGetAllClients(page: number, limit: number, isloading: boolean){
    return this.store.dispatch(getAllClients({page, limit , isloading}));
  }

  dispatchSelectClient(payload: clientResponseBody){
    return this.store.dispatch(selectClient({ payload }))
  }

  dispatchRemoveSelectClient(client: clientResponseBody){
    return this.store.dispatch(removeSelectedClient({client}))
  }


  dispatchGetAllSelectsClients(): Observable<clientResponseBody[]>{
    return this.store.select(allSelectedClients);
  }
}
