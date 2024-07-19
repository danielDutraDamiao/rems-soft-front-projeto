import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { ProdutoService } from '../produto.service';
import { ProdutoDTO } from 'src/app/models/produto.dto';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
})
export class ProdutoListComponent implements OnInit {

  files!: TreeNode<any>[];
  produtos: ProdutoDTO[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtoService.buscarProduto().subscribe((data) => {
      this.produtos = data;
      console.log('Produtos recebidos:', this.produtos); // Adicionando o console.log aqui
    });
  }

}
