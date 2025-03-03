import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { createUser, createUserSucess, logoutUser } from './user.actions';
import { Store } from '@ngrx/store';
import { ClientDispatchService } from '../../services/events.service';

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);
  private store = inject(Store);
  public dispatchService = inject(ClientDispatchService);

    createUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(createUser),
            map(({ name }) => {
                return createUserSucess({ sucess: true, name });
            }),
            catchError((error) => EMPTY)
        );
        },{ functional: true }
    );

    // DeleteUser$ = createEffect(() => {
    //             return this.actions$.pipe(
    //                 ofType(logoutUser),
    //                 map((name) => this.dispatchService.dispatchLogoutUser(name.name))
    //             );
    //         }, { functional: true, dispatch: false });
}