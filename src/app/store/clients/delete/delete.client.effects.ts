import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { ClientsService } from '../../../services/clients.service';
import { deleteClient, deleteClientSucess } from './delete.client.actions';

@Injectable()
export class DeleteClientsEffects {
  private actions$ = inject(Actions);
  private clientsService = inject(ClientsService);

    deleteClient$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteClient),
            exhaustMap(({id}) => this.clientsService.deleteClient(id)
            .pipe(
                tap(() => console.log('eee')),
                map(response => (deleteClientSucess({ response }))),
                tap((client) => console.log('Obj: ', client)),
                catchError((error) => EMPTY)
            ))
        );
        },{ functional: true }
    );
}