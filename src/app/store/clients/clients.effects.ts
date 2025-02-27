import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { ClientsService } from '../../services/clients.service';
import { getAllClients, getAllClientsSucess } from './clients.actions';

@Injectable()
export class ClientsEffects {
  private actions$ = inject(Actions);
  private clientsService = inject(ClientsService);

    loadClients$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getAllClients),
            exhaustMap(({page, limit}) => this.clientsService.getAll(page, limit)
            .pipe(
                tap(() => console.log('eee')),
                map(response => (getAllClientsSucess({ response }))),
                tap((clients) => console.log('Obj: ', clients)),
                catchError((error) => EMPTY)
            ))
        );
        },{ functional: true }
    );
}