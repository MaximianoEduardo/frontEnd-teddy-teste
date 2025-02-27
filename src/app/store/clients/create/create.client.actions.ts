import { createAction, props } from "@ngrx/store";
import {  clientResponseBody, createUserBody } from "../../../interfaces/client";

export const createClient = createAction(
    '[Dashboard Formulario Criação] Create User',
    props<{ payload: createUserBody }>()
);

export const createClientSucess = createAction(
    '[Dashboard Formulario Criação] Create User',
    props<{ payload: clientResponseBody }>()
);

export const createClientFail = createAction(
    '[Dashboard Formulario Criação] Create User',
    props<{ error: any }>()
)