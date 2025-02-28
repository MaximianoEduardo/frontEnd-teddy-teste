import { createReducer, on } from "@ngrx/store";
import { clientBody } from "../../../interfaces/client";
import { editClient, editClientFail, editClientSucess } from "./edit.client.actions";

export const editClientsFeatureKey = 'editClients';

export interface initialState {
    payload: clientBody
}
export const initialState: initialState = {
    payload: {
        name: "",
        salary: 0,
        companyValuation: 0
    }
};

export const editClientReducer = createReducer(
        initialState,
        on(editClient, (state, { payload }) => ({
            ...state,
            payload
        })),
        on(editClientSucess, (state, { payload }) => ({
            
            ...state,
            payload: payload
        })),
        on(editClientFail, (state, { error }) => ({
            ...state,
            error: error
        })
    )
  );