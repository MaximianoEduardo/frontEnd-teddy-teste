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