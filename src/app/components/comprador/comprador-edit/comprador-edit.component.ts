import { Component, OnInit } from "@angular/core";
import { Message } from "primeng/api";
import { CompradorService } from "../comprador.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    templateUrl: "./comprador-edit.component.html",
    selector: "comprador-edit",
    styleUrls: ["./comprador.component.css"]
    })
export class CompradorEditComponent implements OnInit {

    compradorForm: FormGroup;
    messages: Message[] = [];
    value: string | undefined;

    constructor(private compradorService: CompradorService) { 

        this.compradorForm = new FormGroup({
            nome: new FormControl('', Validators.required),
            cpf: new FormControl('', [Validators.required]),
            endereco: new FormControl('', Validators.required),
            telefone: new FormControl('', [Validators.required])
        });
    }

    ngOnInit() {
    
      
     }

     enviarFormulario() {
        if (this.compradorForm.valid) {
            const compradorData = {
                ...this.compradorForm.value
            };
    
            this.compradorService.criarComprador(compradorData).subscribe(
                resposta => {
                    this.messages = [{ severity: 'success', summary: 'Sucesso', detail: 'Comprador Criado Com Sucesso' }];
                }
            );
        } else {
            this.messages = [{ severity: 'error', summary: 'Erro', detail: 'Formulário inválido.' }];
        }
    }
}