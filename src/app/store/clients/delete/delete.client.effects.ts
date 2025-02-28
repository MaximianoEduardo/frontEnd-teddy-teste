import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { ClientsService } from '../../../services/clients.service';
import { deleteClient, deleteClientSucess } from './delete.client.actions';
import { Store } from '@ngrx/store';
import { getAllClients } from '../get/clients.actions';

@Injectable()
export class DeleteClientsEffects {
  private actions$ = inject(Actions);
  private store = inject(Store);
  private clientsService = inject(ClientsService);

    deleteClient$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteClient),
            exhaustMap(({id}) => this.clientsService.deleteClient(id)
            .pipe(
                map(response => (deleteClientSucess({ response }))),
                tap((client) => console.log('Obj: ', client)),
                catchError((error) => EMPTY)
            ))
        );
        },{ functional: true }
    );

    updateClientsListAfterDelete$ = createEffect(() => {
            return this.actions$.pipe(
                ofType(deleteClientSucess),
                map(() => this.store.dispatch(getAllClients({ page: 1, limit: 16, isloading: true })))
            );
        }, { functional: true, dispatch: false });
}