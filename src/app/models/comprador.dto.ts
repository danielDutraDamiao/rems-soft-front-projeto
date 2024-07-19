export class CompradorDTO {
    nome: string;
    cpf: string;
    endereco: string;
    telefone: string;

    constructor(nome: string, cpf: string, endereco: string, telefone: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.telefone = telefone;
    }
}
