import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore, StoreModule } from '@ngrx/store';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { CustomStoreModule } from './store/store.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { NgxCurrencyInputMode, provideEnvironmentNgxCurrency } from 'ngx-currency';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(),
    provideEffects(),
    provideHttpClient(withInterceptorsFromDi()),
    provideStoreDevtools({
      maxAge: 25, 
      logOnly: !isDevMode(), 
    }),
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
      StoreModule.forRoot({}),
      EffectsModule.forRoot([]),
      CustomStoreModule,
    ),
  ]
};
