import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PedidoDTO } from "src/app/models/pedido.dto";
import { HttpClient, HttpParams } from '@angular/common/http';



@Injectable()
export class PedidoService {
  

    private urlService: string;

    constructor(private http: HttpClient) { 
        this.urlService = "http://localhost:8080/api/pedido";
    }

    buscarPedido(): Observable<PedidoDTO[]> {
        console.log("Pedido Service");
        const url = `${this.urlService}/listar`; // Adiciona o /listar ao endpoint
        return this.http.get<PedidoDTO[]>(url);
    }

    criarPedido(pedidoData: any): Observable<PedidoDTO> {
        const url = `${this.urlService}/inserir-pedido`;
        return this.http.post<PedidoDTO>(url, pedidoData);
    }

}