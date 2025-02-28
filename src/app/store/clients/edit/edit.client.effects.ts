import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { ClientsService } from '../../../services/clients.service';
import { editClient, editClientSucess } from './edit.client.actions';

@Injectable()
export class EditClientsEffects {
  private actions$ = inject(Actions);
  private clientsService = inject(ClientsService);

    editClients$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(editClient),
            exhaustMap(({payload}) => this.clientsService.editClient(payload)
            .pipe(
                map(payload => (editClientSucess({ payload }))),
                tap((client) => console.log('Obj: ', client)),
                catchError((error) => EMPTY)
            ))
        );
        },{ functional: true }
    );
}