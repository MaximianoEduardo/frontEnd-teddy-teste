import { createReducer, on } from "@ngrx/store";
import { clientResponseBody } from "../../../interfaces/client";
import { getAllClients, getAllClientsSucess, getAllClientsFail } from "./clients.actions";

export const clientsFeatureKey = 'clients';

export interface initialState {
    clients: clientResponseBody[];
    currentPage: number,
    totalPages: number,
    error?: string
}
export const initialState: initialState = {
    clients: [],
    currentPage: 1,
    totalPages: 1
};

export const clientReducer = createReducer(
        initialState,
        on(getAllClients, (state, { page, limit }) => ({
            ...state,
            page: page,
            limit: limit
        })),
        on(getAllClientsSucess, (state, { response }) => ({
            
            ...state,
            response: {
                clients: response.clients,
                currentPage: response.currentPage,
                totalPages: response.totalPages
            }
        })),
        on(getAllClientsFail, (state, { error }) => ({
            ...state,
            error: error
        })
    )
  );