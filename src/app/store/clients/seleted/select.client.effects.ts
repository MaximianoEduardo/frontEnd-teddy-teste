import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { ClientsService } from '../../../services/clients.service';
import { createClientSucess } from '../create/create.client.actions';
import { Store } from '@ngrx/store';
import { selectClient, showAllSelectedClients } from './select.client.actions';
import { Router } from '@angular/router';

@Injectable()
export class SelectClientsEffects {
    private actions$ = inject(Actions);
    private router = inject(Router);
    private clientsService = inject(ClientsService);

    

    loadClientsSelecteds$ = createEffect(() => {
        const isloading = false;
        return this.actions$.pipe(
            ofType(selectClient),
            exhaustMap(({ payload }) => this.clientsService.selectClient(payload).pipe(
                map((payload) => {
                   //this.router.navigate(['/dashboard/selected-clients']) 
                }),
                catchError((error) => EMPTY)
            ))
        );
    }, { functional: true, dispatch: false });
}