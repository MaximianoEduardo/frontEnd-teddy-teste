import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { selectLoggedUser } from '../../store/user/user.selector';

export const dashboardGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);
  const router = inject(Router);

  return store.select(selectLoggedUser).pipe(
    map(user => {
      if (!!user) {
        return true;
      } else {
        
        router.navigate(['/']);
        return false;
      }
    })
  );
};
