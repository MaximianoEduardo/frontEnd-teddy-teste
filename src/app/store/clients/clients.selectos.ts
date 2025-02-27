import { createFeatureSelector, createSelector } from '@ngrx/store';
import {  responseBody } from '../../interfaces/client';
import { clientsFeatureKey } from './clients.reducers';

export interface FeatureState {
  response: responseBody
}

export const selectDashboardState = createFeatureSelector<FeatureState>(clientsFeatureKey);


export const selectAllClientes = createSelector(
  selectDashboardState,
  (state) => state.response?.clients
);

