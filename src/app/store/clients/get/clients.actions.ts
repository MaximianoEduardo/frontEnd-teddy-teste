import { createAction, props } from "@ngrx/store";
import {  responseBody } from "../../../interfaces/client";

export const getAllClients = createAction(
    '[Dashboard] Get All Users',
    props<{ page: number; limit: number }>()
);

export const getAllClientsSucess = createAction(
   '[Dashboard] Get All Users Sucess',
    props<{ response: responseBody }>()
);

export const getAllClientsFail = createAction(
    '[Dashboard] Get All Users Fail',
     props<{ error: string }>()
 );
 