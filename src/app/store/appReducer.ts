import { ActionReducerMap } from '@ngrx/store';
import { clientReducer, clientsFeatureKey } from './clients/get/clients.reducers';
import { createClientReducer, createClientsFeatureKey } from './clients/create/create.client.reducers';
import { editClientReducer, editClientsFeatureKey } from './clients/edit/edit.client.reducers';
import { deleteClientReducer, deleteClientsFeatureKey } from './clients/delete/delete.client.reducers';
import { selectedClientReducer, selectedClientsFeatureKey } from './clients/seleted/select.client.reducers';

export interface AppState {
  [clientsFeatureKey]: ReturnType<typeof clientReducer>;
  [createClientsFeatureKey]: ReturnType<typeof createClientReducer>;
  [editClientsFeatureKey]: ReturnType<typeof editClientReducer>;
  [deleteClientsFeatureKey]: ReturnType<typeof deleteClientReducer>;
  [selectedClientsFeatureKey]: ReturnType<typeof selectedClientReducer>;
}

export const appReducer: ActionReducerMap<AppState> = {
  [clientsFeatureKey]: clientReducer,
  [createClientsFeatureKey]: createClientReducer,
  [editClientsFeatureKey]: editClientReducer,
  [deleteClientsFeatureKey]: deleteClientReducer,
  [selectedClientsFeatureKey]: selectedClientReducer,
};