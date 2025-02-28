import { createFeatureSelector, createSelector } from '@ngrx/store';
import {  clientResponseBody } from '../../../interfaces/client';
import { deleteClientsFeatureKey } from './delete.client.reducers';

export interface FeatureState {
  response: clientResponseBody
}

export const selectDashboardState = createFeatureSelector<FeatureState>(deleteClientsFeatureKey);


export const selectIdClient = createSelector(
  selectDashboardState,
  (state) => state.response.id
);

