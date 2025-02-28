import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { ClientsService } from '../../../services/clients.service';
import { createClient, createClientSucess } from './create.client.actions';
import { Store } from '@ngrx/store';
import { getAllClients } from '../get/clients.actions';

@Injectable()
export class CreateClientsEffects {
  private actions$ = inject(Actions);
  private store = inject(Store);
  private clientsService = inject(ClientsService);

    createClients$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(createClient),
            exhaustMap(({payload}) => this.clientsService.createClient(payload)
            .pipe(
                map(payload => (createClientSucess({ payload }))),
                tap((client) => console.log('Obj: ', client)),
                catchError((error) => EMPTY)
            ))
        );
        },{ functional: true }
    );

    updateClientsListAfterCreate$ = createEffect(() => {
                return this.actions$.pipe(
                    ofType(createClientSucess),
                    map(() => this.store.dispatch(getAllClients({ page: 1, limit: 16, isloading: true })))
                );
            }, { functional: true, dispatch: false });
}