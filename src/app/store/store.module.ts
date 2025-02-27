import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { clientReducer, clientsFeatureKey } from './clients/get/clients.reducers';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { ClientsEffects } from './clients/get/clients.effects';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ClientsService } from '../services/clients.service';
  
@NgModule({
  imports: [
    StoreModule.forFeature(clientsFeatureKey, clientReducer),
    EffectsModule.forFeature([ClientsEffects])
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    ClientsService,
  ]
})
export class CustomStoreModule {}