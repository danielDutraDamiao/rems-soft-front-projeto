import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProdutoDTO } from "src/app/models/produto.dto";
import { HttpClient, HttpParams } from '@angular/common/http';



@Injectable()
export class ProdutoService {
 

    private urlService: string;

    constructor(private http: HttpClient) { 
        this.urlService = "http://localhost:8080/api/produto";
    }

    buscarProduto(): Observable<ProdutoDTO[]> {
        console.log("produto Service");
        const url = `${this.urlService}/listar`; // Adiciona o /listar ao endpoint
        return this.http.get<ProdutoDTO[]>(url);
    }

    criarProduto(produtoData: any): Observable<ProdutoDTO> {
        const url = `${this.urlService}/inserir-produto`;
        return this.http.post<ProdutoDTO>(url, produtoData);
    }

}