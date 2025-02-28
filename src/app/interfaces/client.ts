import { formEnum } from "../enum/form.enum";

export interface clientResponseBody {
    id: number;
    name: string
    salary: number;
    companyValuation: number;
    createdAt: Date
    updatedAt: Date
}

export interface responseBody {
    clients: clientResponseBody[];
    currentPage: number,
    totalPages: number,
}

export interface stateUpdate{
    isloading: boolean;
    typeOfUpdate: formEnum;
}

export interface clientBody{
    name: string
    salary: number;
    companyValuation: number;
}