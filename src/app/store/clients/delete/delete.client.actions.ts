import { createAction, props } from "@ngrx/store";

export const deleteClient = createAction(
    '[Dashboard Formulario Delete] Create User',
    props<{ id: number }>()
);

export const deleteClientSucess = createAction(
    '[Dashboard Formulario Delete] Create User',
    props<{ response: string }>()
);

export const deleteClientFail = createAction(
    '[Dashboard Formulario Delete] Create User',
    props<{ error: any }>()
)