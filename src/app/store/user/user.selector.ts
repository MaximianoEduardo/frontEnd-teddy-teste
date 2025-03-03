import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userFeatureKey } from './user.reducer';

export interface FeatureState {
  user: string
}

export const selectLoggedUserState = createFeatureSelector<FeatureState>(userFeatureKey);

export const selectLoggedUser = createSelector(
  selectLoggedUserState,
  (state) => state.user
);

