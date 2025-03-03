import { ActionReducerMap } from '@ngrx/store';
import { clientReducer, clientsFeatureKey } from './clients/get/clients.reducers';
import { createClientReducer, createClientsFeatureKey } from './clients/create/create.client.reducers';
import { editClientReducer, editClientsFeatureKey } from './clients/edit/edit.client.reducers';
import { deleteClientReducer, deleteClientsFeatureKey } from './clients/delete/delete.client.reducers';
import { selectedClientReducer, selectedClientsFeatureKey } from './clients/seleted/select.client.reducers';
import { userFeatureKey, userReducer } from './user/user.reducer';

export const appReducer: ActionReducerMap<any> = {
  [clientsFeatureKey]: clientReducer,
  [userFeatureKey]: userReducer,
};