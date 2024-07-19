export class FornecedorDTO {
    nome: string;
    cnpj: string;
    endereco: string;
    telefone: string;

    constructor(nome: string, cnpj: string, endereco: string, telefone: string) {
        this.nome = nome;
        this.cnpj = cnpj;
        this.endereco = endereco;
        this.telefone = telefone;
    }
}
