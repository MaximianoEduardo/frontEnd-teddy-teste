import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { ClientsService } from '../../../services/clients.service';
import { createClient, createClientSucess } from './create.client.actions';

@Injectable()
export class ClientsEffects {
  private actions$ = inject(Actions);
  private clientsService = inject(ClientsService);

    loadClients$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(createClient),
            exhaustMap(({payload}) => this.clientsService.createClient(payload)
            .pipe(
                tap(() => console.log('eee')),
                map(payload => (createClientSucess({ payload }))),
                tap((client) => console.log('Obj: ', client)),
                catchError((error) => EMPTY)
            ))
        );
        },{ functional: true }
    );
}