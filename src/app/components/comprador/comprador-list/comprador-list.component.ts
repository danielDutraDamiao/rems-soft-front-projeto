import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { CompradorService } from '../comprador.service';
import { CompradorDTO } from 'src/app/models/comprador.dto';


@Component({
  selector: 'app-comprador-list',
  templateUrl: './comprador-list.component.html',
})
export class CompradorListComponent implements OnInit {

  files!: TreeNode<any>[];
  compradores!: CompradorDTO[];

  constructor(private compradorService: CompradorService) { }

  ngOnInit() {
    this.compradorService.buscarComprador().subscribe((data) => {
      this.compradores = data;
      console.log('Compradors recebidos:', this.compradores); // Adicionando o console.log aqui
    });
  }

}
