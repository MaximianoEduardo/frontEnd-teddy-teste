import { createFeatureSelector as selectedFeatureSelector, createSelector } from '@ngrx/store';
import {  clientResponseBody } from '../../../interfaces/client';
import { selectedClientsFeatureKey } from './select.client.reducers';

export interface FeatureState {
  payload: clientResponseBody[]
}

export const selectDashboardState = selectedFeatureSelector<FeatureState>(selectedClientsFeatureKey);


export const allSelectedClients = createSelector(
  selectDashboardState,
  (state) => state.payload  
);

