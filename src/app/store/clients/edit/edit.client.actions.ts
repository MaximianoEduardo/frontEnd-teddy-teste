import { createAction, props } from "@ngrx/store";
import {  clientResponseBody, clientBody } from "../../../interfaces/client";

export const editClient = createAction(
    '[Dashboard Formulario Edicao] Edit User',
    props<{ payload: clientBody }>()
);

export const editClientSucess = createAction(
    '[Dashboard Formulario Edicao] Edit User',
    props<{ payload: clientResponseBody }>()
);

export const editClientFail = createAction(
    '[Dashboard Formulario Edicao] Edit User',
    props<{ error: any }>()
)