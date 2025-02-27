import { createAction, props } from "@ngrx/store";
import { clientResponseBody } from "../../interfaces/client";

export const getAllClients = createAction(
    '[Dashboard] Get All Users',
    props<{ page: number; limit: number }>()
);

export const getAllClientsSucess = createAction(
   '[Dashboard] Get All Users Sucess',
    props<{ clients: clientResponseBody[] }>()
);

export const getAllClientsFail = createAction(
    '[Dashboard] Get All Users Fail',
     props<{ error: string }>()
 );