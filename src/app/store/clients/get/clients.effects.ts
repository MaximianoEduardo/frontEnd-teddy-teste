import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { ClientsService } from '../../../services/clients.service';
import { getAllClients, getAllClientsSucess } from './clients.actions';
import { createClientSucess } from '../create/create.client.actions';
import { Store } from '@ngrx/store';

@Injectable()
export class ClientsEffects {
    private actions$ = inject(Actions);
    private store = inject(Store);
    private clientsService = inject(ClientsService);

    

    loadClients$ = createEffect(() => {
        const isloading = false;
        return this.actions$.pipe(
            ofType(getAllClients),
            exhaustMap(({ page, limit }) => this.clientsService.getAll(page, limit).pipe(
                map(response => getAllClientsSucess({ response, isloading })),
                tap((response) => console.log(response)),
                catchError((error) => EMPTY)
            ))
        );
    }, { functional: true });

    updateClientsList$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(createClientSucess),
            map(() => this.store.dispatch(getAllClients({ page: 1, limit: 16, isloading: true })))
        );
    }, { functional: true, dispatch: false });
}