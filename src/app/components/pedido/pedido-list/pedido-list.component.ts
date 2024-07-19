import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TreeNode } from "primeng/api";
import { PedidoService } from "../pedido.service";
import { PedidoDTO } from "src/app/models/pedido.dto";


@Component({
    selector: 'app-pedido-list',
    templateUrl: './pedido-list.component.html',
})

export class PedidoListComponent implements OnInit {

    files!: TreeNode[];
    pedidos: PedidoDTO[] = [];

    
    constructor(private route: Router, private pedidoService: PedidoService) { }

    ngOnInit() {
        this.pedidoService.buscarPedido().subscribe((result: PedidoDTO[]) => {
            this.pedidos = result;
        });
        console.log("Pedido" + this.pedidos);
    }
}