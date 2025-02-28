import { createAction, props } from "@ngrx/store";
import {  clientResponseBody, clientBody } from "../../../interfaces/client";

export const editClient = createAction(
    '[Dashboard Formulario Edicao] Edit User',
    props<{ id:number, payload: clientBody }>()
);

export const editClientSucess = createAction(
    '[Dashboard Formulario Edicao Sucesso] Edit User Sucesso',
    props<{ payload: clientResponseBody }>()
);

export const editClientFail = createAction(
    '[Dashboard Formulario Edicao Fail] Edit User Fail',
    props<{ error: any }>()
)