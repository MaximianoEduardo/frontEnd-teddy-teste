import { createFeatureSelector, createSelector } from '@ngrx/store';
import {  responseBody } from '../../../interfaces/client';
import { clientsFeatureKey } from './clients.reducers';

export interface FeatureState {
  
  isloading: boolean;
  response: responseBody;
}

export const selectDashboardState = createFeatureSelector<FeatureState>(clientsFeatureKey);


export const selectAllClientes = createSelector(
  selectDashboardState,
  (state) => state.response?.clients
);

export const selectClientById = (clientId: number) => createSelector(
  selectDashboardState,
  (state) => state.response?.clients.find(client => client.id === clientId)
);

export const selectStateUpdating = createSelector(
  selectDashboardState,
  (state) => state.isloading
);

