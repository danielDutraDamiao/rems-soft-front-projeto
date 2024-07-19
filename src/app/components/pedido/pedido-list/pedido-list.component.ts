import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { PedidoService } from '../pedido.service';
import { PedidoDTO } from 'src/app/models/pedido.dto';
import { ProdutoDTO } from 'src/app/models/produto.dto';

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
})
export class PedidoListComponent implements OnInit {

  files!: TreeNode<any>[];
  pedidos: PedidoDTO[] = [];

  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {
    this.pedidoService.buscarPedido().subscribe((data) => {
      this.pedidos = data;
    });
  }
  

  
}

