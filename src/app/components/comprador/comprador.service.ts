import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpClient, HttpParams } from '@angular/common/http';
import { CompradorDTO } from "src/app/models/comprador.dto";



@Injectable()
export class CompradorService {
 

    private urlService: string;

    constructor(private http: HttpClient) { 
        this.urlService = "http://localhost:8080/api/comprador";
    }

    buscarComprador(): Observable<CompradorDTO[]> {
        console.log("comprador Service");
        const url = `${this.urlService}/listar`; // Adiciona o /listar ao endpoint
        return this.http.get<CompradorDTO[]>(url);
    }

    buscarCompradorPorId(id: number): Observable<CompradorDTO> {
        const url = `${this.urlService}/buscar/${id}`;
        return this.http.get<CompradorDTO>(url);
    
    }

    criarComprador(compradorData: any): Observable<CompradorDTO> {
        const url = `${this.urlService}/inserir-comprador`;
        return this.http.post<CompradorDTO>(url, compradorData);
    }

}