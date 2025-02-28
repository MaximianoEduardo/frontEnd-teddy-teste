import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { clientReducer, clientsFeatureKey } from './clients/get/clients.reducers';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { ClientsEffects } from './clients/get/clients.effects';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ClientsService } from '../services/clients.service';
import { createClientReducer, createClientsFeatureKey } from './clients/create/create.client.reducers';
import { CreateClientsEffects } from './clients/create/create.client.effects';
import { editClientReducer, editClientsFeatureKey } from './clients/edit/edit.client.reducers';
import { EditClientsEffects } from './clients/edit/edit.client.effects';
import { deleteClientReducer, deleteClientsFeatureKey } from './clients/delete/delete.client.reducers';
import { DeleteClientsEffects } from './clients/delete/delete.client.effects';
  
@NgModule({
  imports: [
    StoreModule.forFeature(clientsFeatureKey, clientReducer),
    StoreModule.forFeature(createClientsFeatureKey, createClientReducer),
    StoreModule.forFeature(deleteClientsFeatureKey, deleteClientReducer),
    StoreModule.forFeature(editClientsFeatureKey, editClientReducer),
    EffectsModule.forFeature([ClientsEffects, CreateClientsEffects, EditClientsEffects, DeleteClientsEffects])
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    ClientsService,
  ]
})
export class CustomStoreModule {}