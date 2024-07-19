import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { FornecedorService } from '../fornecedor.service';
import { FornecedorDTO } from 'src/app/models/forncedor.dto';


@Component({
  selector: 'app-fornecedor-list',
  templateUrl: './fornecedor-list.component.html',
})
export class FornecedorListComponent implements OnInit {

  files!: TreeNode<any>[];
  fornecedores!: FornecedorDTO[];

  constructor(private fornecedorService: FornecedorService) { }

  ngOnInit() {
    this.fornecedorService.buscarFornecedor().subscribe((data) => {
      this.fornecedores = data;
      console.log('Fornecedors recebidos:', this.fornecedores); // Adicionando o console.log aqui
    });
  }

}
