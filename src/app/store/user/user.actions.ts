import { createAction, props } from "@ngrx/store";

export const createUser = createAction(
    '[Login Formulario] Create User',
    props<{ name: string }>()
);

export const createUserSucess = createAction(
    '[Login Formulario Sucesso] Create User Sucess',
    props<{ sucess: boolean, name: string }>()
);

export const createUserFail = createAction(
    '[Login Formulario Falha] Create User Falha',
    props<{ error: any }>()
);

export const logoutUser = createAction(
    '[Login Formulario] Logout User',
    props<{ name: string }>()
);

export const logoutUserSucess = createAction(
    '[Dashborrd Sair Sucesso] Logout User Sucess',
    props<{ sucess: boolean }>()
);

export const logoutUserFail = createAction(
    '[Dashborrd Sair Falha] Logout User Falha',
    props<{ error: any }>()
)