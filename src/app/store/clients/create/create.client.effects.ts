import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { ClientsService } from '../../../services/clients.service';
import { createClient, createClientSucess } from './create.client.actions';
import { Store } from '@ngrx/store';
import { getAllClients } from '../get/clients.actions';
import { ClientDispatchService } from '../../../services/events.service';

@Injectable()
export class CreateClientsEffects {
  private actions$ = inject(Actions);
  private store = inject(Store);
  public dispatchService = inject(ClientDispatchService);
  private clientsService = inject(ClientsService);

    createClients$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(createClient),
            exhaustMap(({payload}) => this.clientsService.createClient(payload)
            .pipe(
                map(payload => (createClientSucess({ payload }))),
                catchError((error) => EMPTY)
            ))
        );
        },{ functional: true }
    );

    updateClientsListAfterCreate$ = createEffect(() => {
                return this.actions$.pipe(
                    ofType(createClientSucess),
                    map(() => this.dispatchService.dispatchGetAllClients( 1, 16, true ))
                );
            }, { functional: true, dispatch: false });
}