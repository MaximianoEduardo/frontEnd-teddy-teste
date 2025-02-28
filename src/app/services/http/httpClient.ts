import { HttpClient, HttpResponse } from "@angular/common/http";
import { clientResponseBody, clientBody, responseBody } from "../../interfaces/client";
import { catchError, map, Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export default class CustomHttpClient {
    
    constructor(
        private http: HttpClient,
    ){}


    defaultConfig = {
        baseUrl: 'https://boasorte.teddybackoffice.com.br/',
        contentType: 'application/json',
        accept: '*/*'
    }


    getAllClients(page: number, limit: number): Observable<responseBody>{

        const urlClients = `/api/` + `users?page=${page}&limit=${limit}`;

        return this.http.get<responseBody>(urlClients, {
            headers: {
                'Content-Type': this.defaultConfig.contentType,
                'Aaccept': this.defaultConfig.accept
            },
            observe: 'response'
        }).pipe(
            map((response: HttpResponse<responseBody>) => {
                if (response.body) {
                    return response.body;
                } else {
                    throw new Error('Falha a buscar dados');
                }
            }),
            catchError(error => {
                return throwError(error);
            })
        );
    }

    createClient(payload: clientBody): Observable<clientResponseBody>{
        return this.http.post<clientResponseBody>('/api/users', payload, {
            observe: 'response'
        }).pipe(
            map((response: HttpResponse<clientResponseBody>) => {
                if(response.body){
                    return response.body
                } else {
                    throw new Error('Falha a buscar dados');
                }
            }),
            catchError(error => {
                return throwError(error);
            })
        )
    }


    editClient(id: number ,payload: clientBody): Observable<clientResponseBody>{
        return this.http.patch<clientResponseBody>(`/api/users/${id}`, payload, {
            observe: 'response'
        }).pipe(
            map((response: HttpResponse<clientResponseBody>) => {
                if(response.body){
                    return response.body
                } else {
                    throw new Error('Falha ao alterar dados');
                }
            }),
            catchError(error => {
                return throwError(error);
            })
        )
    }


    deleteClient(id: number): Observable<string>{
        console.log('chegou no delete', id)
        return this.http.delete(`/api/users/${id}`, { observe: 'response' }).pipe(
            map((response: HttpResponse<any>) => {
                if(response.body){
                    return response.body;
                } else {
                    throw new Error('Falha a buscar dados');
                }
            }),
            catchError(error => {
                return throwError(error);
            })
        )
    }

}