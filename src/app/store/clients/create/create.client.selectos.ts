import { createFeatureSelector, createSelector } from '@ngrx/store';
import {  clientResponseBody } from '../../../interfaces/client';
import { createClientsFeatureKey } from './create.client.reducers';

export interface FeatureState {
  response: clientResponseBody
}

export const selectDashboardState = createFeatureSelector<FeatureState>(createClientsFeatureKey);


export const selectAllClientes = createSelector(
  selectDashboardState,
  (state) => state.response
);

