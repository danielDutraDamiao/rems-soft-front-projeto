import { FornecedorDTO } from "./forncedor.dto";

export class ProdutoDTO {
    id: string = "";
    nomeProduto: string;
    valorProduto: number;
    quantidade: number;
    fornecedor:FornecedorDTO;

    constructor(nomeProduto: string, valorProduto: number, quantidade: number, fornecedor: FornecedorDTO) {
        this.nomeProduto = nomeProduto;
        this.valorProduto = valorProduto;
        this.quantidade = quantidade;
        this.fornecedor = fornecedor;
    }
}
