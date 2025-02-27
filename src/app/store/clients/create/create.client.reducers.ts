import { createReducer, on } from "@ngrx/store";
import { createUserBody } from "../../../interfaces/client";
import { createClient, createClientFail, createClientSucess } from "./create.client.actions";

export const createClientsFeatureKey = 'createClients';

export interface initialState {
    payload: createUserBody
}
export const initialState: initialState = {
    payload: {
        name: "",
        salary: 0,
        companyValuation: 0
    }
};

export const createClientReducer = createReducer(
        initialState,
        on(createClient, (state, { payload }) => ({
            ...state,
            payload
        })),
        on(createClientSucess, (state, { payload }) => ({
            
            ...state,
            payload: payload
        })),
        on(createClientFail, (state, { error }) => ({
            ...state,
            error: error
        })
    )
  );