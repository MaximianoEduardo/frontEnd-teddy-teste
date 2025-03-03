import { HttpClient, HttpResponse } from "@angular/common/http";
import { clientResponseBody, clientBody, responseBody } from "../../interfaces/client";
import { catchError, map, Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environment.prod";

@Injectable({
  providedIn: 'root'
})
export default class CustomHttpClient {
    
    constructor(
        private http: HttpClient,
    ){}

    // Use a URL base do environment
    defaultConfig = {
        baseUrl: environment.apiUrl, // URL base da API
        contentType: 'application/json',
        accept: '*/*'
    }

    getAllClients(page: number, limit: number): Observable<responseBody>{
        const urlClients = `${this.defaultConfig.baseUrl}/users?page=${page}&limit=${limit}`;

        return this.http.get<responseBody>(urlClients, {
            headers: {
                'Content-Type': this.defaultConfig.contentType,
                'Accept': this.defaultConfig.accept
            },
            observe: 'response'
        }).pipe(
            map((response: HttpResponse<responseBody>) => {
                if (response.body) {
                    return response.body;
                } else {
                    throw new Error('Falha ao buscar dados');
                }
            }),
            catchError(error => {
                return throwError(error);
            })
        );
    }

    createClient(payload: clientBody): Observable<clientResponseBody>{
        const url = `${this.defaultConfig.baseUrl}/users`;
        return this.http.post<clientResponseBody>(url, payload, {
            observe: 'response'
        }).pipe(
            map((response: HttpResponse<clientResponseBody>) => {
                if(response.body){
                    return response.body;
                } else {
                    throw new Error('Falha ao criar cliente');
                }
            }),
            catchError(error => {
                return throwError(error);
            })
        );
    }

    editClient(id: number, payload: clientBody): Observable<clientResponseBody>{
        const url = `${this.defaultConfig.baseUrl}/users/${id}`;
        return this.http.patch<clientResponseBody>(url, payload, {
            observe: 'response'
        }).pipe(
            map((response: HttpResponse<clientResponseBody>) => {
                if(response.body){
                    return response.body;
                } else {
                    throw new Error('Falha ao editar cliente');
                }
            }),
            catchError(error => {
                return throwError(error);
            })
        );
    }

    deleteClient(id: number): Observable<string>{
        const url = `${this.defaultConfig.baseUrl}/users/${id}`;
        return this.http.delete(url, { observe: 'response' }).pipe(
            map((response: HttpResponse<any>) => {
                if(response.body){
                    return response.body;
                } else {
                    throw new Error('Falha ao deletar cliente');
                }
            }),
            catchError(error => {
                return throwError(error);
            })
        );
    }
}