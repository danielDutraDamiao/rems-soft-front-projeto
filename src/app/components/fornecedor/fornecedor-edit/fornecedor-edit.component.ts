import { Component, OnInit } from "@angular/core";
import { Message } from "primeng/api";
import { FornecedorService } from "../fornecedor.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    templateUrl: "./fornecedor-edit.component.html",
    selector: "fornecedor-edit",
    styleUrls: ["./fornecedor.component.css"]
    })
export class FornecedorEditComponent implements OnInit {

    fornecedorForm: FormGroup;
    messages: Message[] = [];
    value: string | undefined;

    constructor(private fornecedorService: FornecedorService) { 

        this.fornecedorForm = new FormGroup({
            nome: new FormControl('', Validators.required),
            cnpj: new FormControl('', [Validators.required]),
            endereco: new FormControl('', Validators.required),
            telefone: new FormControl('', [Validators.required])
        });
    }

    ngOnInit() {
    
      
     }

     enviarFormulario() {
        if (this.fornecedorForm.valid) {
            const fornecedorData = {
                ...this.fornecedorForm.value
            };
    
            this.fornecedorService.criarFornecedor(fornecedorData).subscribe(
                resposta => {
                    this.messages = [{ severity: 'success', summary: 'Sucesso', detail: 'Fornecedor Criado Com Sucesso' }];
                }
            );
        } else {
            this.messages = [{ severity: 'error', summary: 'Erro', detail: 'Formulário inválido.' }];
        }
    }
}