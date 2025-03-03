import { createReducer, on } from "@ngrx/store";
import { createUser, createUserFail, createUserSucess, logoutUser, logoutUserFail, logoutUserSucess } from "./user.actions";

export const userFeatureKey = 'user';

export interface initialState {
    user: string
}
export const initialState: initialState = {
    user:  ""
};

export const userReducer = createReducer(
        initialState,
        on(createUser, (state, { name }) => ({
            user: name
        })),
        on(createUserSucess, (state, { name, sucess }) => ({
            ...state,
            sucess,
            name
        })),
        on(createUserFail, (state, { error }) => ({
            ...state,
            error: error
        })),
        on(logoutUser, (state,) => ({
            ...state,
            user: ''
        })),
        on(logoutUserSucess, (state, { sucess }) => ({
            ...state,
            sucess,
        })),
        on(logoutUserFail, (state) => ({
            ...state,
        }),
        
    )
  );