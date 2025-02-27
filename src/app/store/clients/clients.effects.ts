import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { ClientsService } from '../../services/clients.service';
import * as ClientActions from './clients.actions';

@Injectable()
export class ClientsEffects {
  private actions$ = inject(Actions);
  private clientsService = inject(ClientsService);

    loadClients$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ClientActions.getAllClients),
            exhaustMap(({page, limit}) => this.clientsService.getAll(page, limit)
            .pipe(
                map(clients => (ClientActions.getAllClientsSucess({ clients }))),
                catchError(() => EMPTY)
            ))
        );
        },{ functional: true }
    );
}