import { createAction, props } from "@ngrx/store";
import { clientResponseBody } from "../../../interfaces/client";

export const selectClient = createAction(
    '[Dashboard Selecionar Cliente] Selecionando Cliente',
    props<{ payload: clientResponseBody }>()
);

export const showAllSelectedClients = createAction(
    '[Dashboard Mostrar Todos Clientes Selecionados] Mostrando Todos Clientes Selecionados'
);

export const removeSelectedClient = createAction(
    '[Dashboard Remover Cliente Selecionado] Removendo Cliente Selecionado',
    props<{ payload: clientResponseBody }>()
);