import { createReducer, on } from "@ngrx/store";
import { deleteClient, deleteClientFail, deleteClientSucess } from "./delete.client.actions";

export const deleteClientsFeatureKey = 'deleteClients';

export interface initialState {
    id: number
}
export const initialState: initialState = {
    id: 0
};

export const deleteClientReducer = createReducer(
        initialState,
        on(deleteClient, (state, { id }) => ({
            ...state,
            id
        })),
        on(deleteClientSucess, (state, { response }) => ({
            ...state,
            response
        })),
        on(deleteClientFail, (state, { error }) => ({
            ...state,
            error: error
        })
    )
  );