import { createFeatureSelector, createSelector } from '@ngrx/store';
import {  clientResponseBody } from '../../../interfaces/client';
import { editClientsFeatureKey } from './edit.client.reducers';

export interface FeatureState {
  response: clientResponseBody
}

export const selectDashboardState = createFeatureSelector<FeatureState>(editClientsFeatureKey);


export const selectClient = createSelector(
  selectDashboardState,
  (state) => state.response
);

