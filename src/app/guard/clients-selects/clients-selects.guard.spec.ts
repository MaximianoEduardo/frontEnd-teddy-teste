import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { clientsSelectsGuard } from './clients-selects.guard';

describe('clientsSelectsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => clientsSelectsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
