import { createSelector } from '@ngrx/store';
import { clientResponseBody } from '../../interfaces/client';

export interface FeatureState {
  clients: clientResponseBody[]
}

export interface ClientsState {
  feature: FeatureState;
}

export const selectFeature = (state: ClientsState) => state.feature;

export const selectClientsAll = createSelector(
  selectFeature,
  (state: FeatureState) => state.clients
);