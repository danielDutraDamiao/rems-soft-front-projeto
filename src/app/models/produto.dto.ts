import { FornecedorDTO } from "./forncedor.dto";

export class ProdutoDTO {
    nomeProduto: string;
    valorProduto: number;
    quantidade: number;
    fornecedorId:FornecedorDTO;

    constructor(nomeProduto: string, valorProduto: number, quantidade: number, fornecedorId: FornecedorDTO) {
        this.nomeProduto = nomeProduto;
        this.valorProduto = valorProduto;
        this.quantidade = quantidade;
        this.fornecedorId = fornecedorId;
    }
}
