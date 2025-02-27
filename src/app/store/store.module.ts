import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { clientReducer, clientsFeatureKey } from './clients/get/clients.reducers';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { ClientsEffects } from './clients/get/clients.effects';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ClientsService } from '../services/clients.service';
import { createClientReducer, createClientsFeatureKey } from './clients/create/create.client.reducers';
import { CreateClientsEffects } from './clients/create/create.client.effects';
  
@NgModule({
  imports: [
    StoreModule.forFeature(clientsFeatureKey, clientReducer),
    StoreModule.forFeature(createClientsFeatureKey, createClientReducer),
    EffectsModule.forFeature([ClientsEffects, CreateClientsEffects])
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    ClientsService,
  ]
})
export class CustomStoreModule {}