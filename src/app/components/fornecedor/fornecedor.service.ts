import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpClient, HttpParams } from '@angular/common/http';
import { FornecedorDTO } from "src/app/models/forncedor.dto";



@Injectable()
export class FornecedorService {
 

    private urlService: string;

    constructor(private http: HttpClient) { 
        this.urlService = "http://localhost:8080/api/fornecedor";
    }

    buscarFornecedor(): Observable<FornecedorDTO[]> {
        console.log("fornecedor Service");
        const url = `${this.urlService}/listar`; // Adiciona o /listar ao endpoint
        return this.http.get<FornecedorDTO[]>(url);
    }

    buscarFornecedorPorId(id: number): Observable<FornecedorDTO> {
        const url = `${this.urlService}/buscar/${id}`;
        return this.http.get<FornecedorDTO>(url);
    
    }

    criarFornecedor(fornecedorData: any): Observable<FornecedorDTO> {
        const url = `${this.urlService}/inserir-fornecedor`;
        return this.http.post<FornecedorDTO>(url, fornecedorData);
    }

}