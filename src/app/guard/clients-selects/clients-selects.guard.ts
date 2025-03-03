import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { allSelectedClients } from '../../store/clients/seleted/select.client.selectos';

export const clientsSelectsGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);
  const router = inject(Router);
  
  return store.select(allSelectedClients).pipe(
    map(clients => {
      if (clients && clients.length > 0) {
        return true;
      } else {

        router.navigate(['/dashboard']);
        return false;
      }
    })
  );
};
