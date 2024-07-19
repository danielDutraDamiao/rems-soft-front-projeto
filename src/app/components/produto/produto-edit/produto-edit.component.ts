import { Component, OnInit } from "@angular/core";
import { Message } from "primeng/api";
import { ProdutoService } from "../produto.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    templateUrl: "./produto-edit.component.html",
    selector: "produto-edit",
    styleUrls: ["./produto.component.css"]
    })
export class ProdutoEditComponent implements OnInit {

    produtoForm: FormGroup;
    messages: Message[] = [];
    value: string | undefined;

    constructor(private produtoService: ProdutoService) { 

        this.produtoForm = new FormGroup({
            nomeProduto: new FormControl('', Validators.required),
            valorProduto: new FormControl('', [Validators.required, Validators.min(0)]),
            quantidade: new FormControl('', [Validators.required, Validators.min(0)]),
            fornecedorId: new FormControl('', Validators.required)
        });
    }

    ngOnInit() {
    
      
     }

     enviarFormulario() {
        if (this.produtoForm.valid) {
            const produtoData = {
                ...this.produtoForm.value
            };
    
            this.produtoService.criarProduto(produtoData).subscribe(
                resposta => {
                    this.messages = [{ severity: 'success', summary: 'Sucesso', detail: 'Produto Criado Com Sucesso' }];
                }
            );
        } else {
            this.messages = [{ severity: 'error', summary: 'Erro', detail: 'Formulário inválido.' }];
        }
    }
}