import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { clientdReducer, clientsFeatureKey } from './clients/clients.reducers';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { ClientsEffects } from './clients/clients.effects';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ClientsService } from '../services/clients.service';
  
@NgModule({
  imports: [
    StoreModule.forFeature(clientsFeatureKey, clientdReducer),
    EffectsModule.forFeature([ClientsEffects])
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideEffects(ClientsEffects),
    ClientsService,
  ]
})
export class CustomStoreModule {}