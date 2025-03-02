import { createReducer, on } from "@ngrx/store";
import { clientResponseBody } from "../../../interfaces/client";
import { selectClient, showAllSelectedClients, removeSelectedClient } from "./select.client.actions";

export const selectedClientsFeatureKey = 'selectClients';

export interface initialState {
    payload: clientResponseBody[];
}
export const initialState: initialState = {
    payload: []
};

export const selectedClientReducer = createReducer(
    initialState,
    on(selectClient, (state, { payload }) => ({
        ...state,
        payload: [...state.payload, payload],
    })),
    on(showAllSelectedClients, (state) => ({
        ...state,
        
    })),
    on(removeSelectedClient, (state, { payload }) => ({
        ...state,
        payload: state.payload.filter(client => client.id !== payload.id)
    }))
);