import { createReducer, on } from "@ngrx/store";
import { clientResponseBody } from "../../../interfaces/client";
import { getAllClients, getAllClientsSucess, getAllClientsFail } from "./clients.actions";

export const clientsFeatureKey = 'clients';

export interface initialState {
    response: {

        clients: clientResponseBody[];
        currentPage: number,
        totalPages: number,
    };
    isloading: boolean;
    error?: string
}
export const initialState: initialState = {
    response: {
        clients: [],
        currentPage: 1,
        totalPages: 1
    },
    isloading: false,
};

export const clientReducer = createReducer(
        initialState,
        on(getAllClients, (state, { page, limit, isloading }) => ({
            ...state,
            page: page,
            limit: limit,
            isloading: isloading,
        })),
        on(getAllClientsSucess, (state, { response, isloading }) => ({
            ...state,
            isloading: isloading,
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