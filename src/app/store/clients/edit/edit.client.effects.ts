import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { ClientsService } from '../../../services/clients.service';
import { editClient, editClientSucess } from './edit.client.actions';
import { Store } from '@ngrx/store';
import { getAllClients } from '../get/clients.actions';
import { ClientDispatchService } from '../../../services/events.service';

@Injectable()
export class EditClientsEffects {
  private actions$ = inject(Actions);
  private store = inject(Store);
  public dispatchService = inject(ClientDispatchService);
  private clientsService = inject(ClientsService);

    editClients$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(editClient),
            exhaustMap(({id, payload}) => this.clientsService.editClient(id, payload)
            .pipe(
                map(payload => (editClientSucess({ payload }))),
                catchError((error) => EMPTY)
            ))
        );
        },{ functional: true }
    );

    updateClientsListAfterEdit$ = createEffect(() => {
            return this.actions$.pipe(
                ofType(editClientSucess),
                map(() => 
                    this.store.dispatch(getAllClients({ page: 1, limit: 16, isloading: true })))
            );
        }, { functional: true, dispatch: false });
}