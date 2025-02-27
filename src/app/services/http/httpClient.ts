import { HttpClient, HttpEvent, HttpResponse } from "@angular/common/http";
import { clientResponseBody, createUserBody, responseBody } from "../../interfaces/client";
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
                    console.log('sucesso', response.body)
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

    createClient(payload: createUserBody): Observable<clientResponseBody>{
        return this.http.post<clientResponseBody>('users', payload, {
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

}