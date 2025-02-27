import { createReducer, on } from "@ngrx/store";
import { clientResponseBody } from "../../interfaces/client";
import * as ClientesActions from "./clients.actions";

export const clientsFeatureKey = 'clients';

export interface initialState {
    clients: clientResponseBody[]
}
export const initialState: initialState = {
    clients: []
};

export const clientdReducer = createReducer(
        initialState,
        on(ClientesActions.getAllClients, state => ({
            ...state,
        })),
        on(ClientesActions.getAllClientsSucess, (state, { clients }) => ({
            ...state,
            clients: clients
        })),
        on(ClientesActions.getAllClientsFail, (state, { error }) => ({
            ...state,
            error: error
        })
    )
  );