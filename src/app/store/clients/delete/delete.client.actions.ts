import { createAction, props } from "@ngrx/store";

export const deleteClient = createAction(
    '[Dashboard Formulario Delete] Create User',
    props<{ id: number }>()
);

export const deleteClientSucess = createAction(
    '[Dashboard Formulario Delete Sucesso] Delete User Sucesso',
    props<{ response: string }>()
);

export const deleteClientFail = createAction(
    '[Dashboard Formulario Delete Fail] Delete User Fail',
    props<{ error: any }>()
)