import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { provideStore, StoreModule } from '@ngrx/store';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { CustomStoreModule } from './store/store.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { NgxCurrencyInputMode, provideEnvironmentNgxCurrency } from 'ngx-currency';
import { ClientDispatchService } from './services/events.service';
import { appReducer } from './store/appReducer';
import { CreateClientsEffects } from './store/clients/create/create.client.effects';
import { createClientsFeatureKey, createClientReducer } from './store/clients/create/create.client.reducers';
import { DeleteClientsEffects } from './store/clients/delete/delete.client.effects';
import { deleteClientsFeatureKey, deleteClientReducer } from './store/clients/delete/delete.client.reducers';
import { EditClientsEffects } from './store/clients/edit/edit.client.effects';
import { editClientsFeatureKey, editClientReducer } from './store/clients/edit/edit.client.reducers';
import { ClientsEffects } from './store/clients/get/clients.effects';
import { clientsFeatureKey, clientReducer } from './store/clients/get/clients.reducers';
import { SelectClientsEffects } from './store/clients/seleted/select.client.effects';
import { selectedClientsFeatureKey, selectedClientReducer } from './store/clients/seleted/select.client.reducers';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    
    provideEnvironmentNgxCurrency({
      align: "left",
      decimal: ",",
      precision: 2,
      prefix: "R$ ",
      thousands: ".",
      min: null,
      max: null,
      inputMode: NgxCurrencyInputMode.Financial,
    }), 
    importProvidersFrom(
      RouterModule.forRoot(routes),
      StoreModule.forRoot({}),
      EffectsModule.forRoot([]),
      StoreModule.forFeature(clientsFeatureKey, clientReducer),
      StoreModule.forFeature(createClientsFeatureKey, createClientReducer),
      StoreModule.forFeature(deleteClientsFeatureKey, deleteClientReducer),
      StoreModule.forFeature(editClientsFeatureKey, editClientReducer),
      StoreModule.forFeature(selectedClientsFeatureKey, selectedClientReducer),
      EffectsModule.forFeature([ClientsEffects, CreateClientsEffects, EditClientsEffects, DeleteClientsEffects, SelectClientsEffects]),
      CustomStoreModule,
      ClientDispatchService
    ),
    provideStoreDevtools({
      maxAge: 25, 
      logOnly: !isDevMode(), 
    }),
  ]
};
