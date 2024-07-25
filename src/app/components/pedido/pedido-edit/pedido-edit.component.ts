import { Component, OnInit } from "@angular/core";
import { Message } from "primeng/api";
import { PedidoService } from "../pedido.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ProdutoService } from "../../produto/produto.service";
import { CompradorService } from "../../comprador/comprador.service";
import { ProdutoDTO } from "src/app/models/produto.dto";
import { CompradorDTO } from "src/app/models/comprador.dto";
import { v4 as uuidv4 } from 'uuid';

@Component({
    templateUrl: "./pedido-edit.component.html",
    selector: "pedido-edit",
    styleUrls: ["./pedido.component.css"]
})
export class PedidoEditComponent implements OnInit {

    pedidoForm: FormGroup;
    messages: Message[] = [];
    produtos: ProdutoDTO[] = [];
    compradores: CompradorDTO[] = [];
    selectedProdutos: any[] = [];  // Para o p-multiSelect

    constructor(
        private pedidoService: PedidoService,
        private produtoService: ProdutoService,
        private compradorService: CompradorService
    ) {
        this.pedidoForm = new FormGroup({
            numeroPedido: new FormControl(this.gerarNumeroPedido(), Validators.required),
            produtoIds: new FormControl([], Validators.required),  // Array de IDs
            compradorId: new FormControl('', Validators.required)
        });
    }

    ngOnInit() {
        this.compradorService.buscarComprador().subscribe(compradores => {
            this.compradores = compradores;
        });

        this.produtoService.buscarProduto().subscribe(produtos => {
            this.produtos = produtos;
        });
    }

    gerarNumeroPedido(): string {
        return uuidv4();
    }

    enviarFormulario() {
        if (this.pedidoForm.valid) {
            const produtoIds = this.pedidoForm.get('produtoIds')?.value || [];
            const comprador = this.pedidoForm.get('compradorId')?.value;

            const pedidoData = {
                numeroPedido: this.pedidoForm.get('numeroPedido')?.value,
                produtoIds: produtoIds.map((produto: any) => produto.id),  // Extrai os IDs dos produtos selecionados
                compradorId: comprador ? comprador.id : ''  // Garante que apenas o ID seja enviado
            };

            this.pedidoService.criarPedido(pedidoData).subscribe(
                resposta => {
                    this.messages = [{ severity: 'success', summary: 'Sucesso', detail: 'Pedido Criado Com Sucesso' }];
                },
                error => {
                    this.messages = [{ severity: 'error', summary: 'Erro', detail: 'Erro ao criar pedido' }];
                }
            );
        } else {
            this.messages = [{ severity: 'error', summary: 'Erro', detail: 'Formulário inválido.' }];
        }
    }
}
