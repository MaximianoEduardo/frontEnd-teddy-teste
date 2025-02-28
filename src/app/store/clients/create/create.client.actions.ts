import { createAction, props } from "@ngrx/store";
import {  clientResponseBody, clientBody } from "../../../interfaces/client";

export const createClient = createAction(
    '[Dashboard Formulario Criação] Create User',
    props<{ payload: clientBody }>()
);

export const createClientSucess = createAction(
    '[Dashboard Formulario Criação Sucesso] Create User Sucesso',
    props<{ payload: clientResponseBody }>()
);

export const createClientFail = createAction(
    '[Dashboard Formulario Criação Falha] Create User Falha',
    props<{ error: any }>()
)