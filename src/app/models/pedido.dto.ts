import { CompradorDTO } from "./comprador.dto";
import { ProdutoDTO } from "./produto.dto";

export class PedidoDTO {
    numeroPedido: string;
    valorTotalPedido: number;
    produtos: ProdutoDTO[];
    comprador: CompradorDTO;
    nomeFornecedor = "";
    totalProdutosComprados = 0;

    constructor(numeroPedido: string, valorTotalPedido: number, produtos: ProdutoDTO[], comprador: CompradorDTO, nomeFornecedor: string, totalProdutosComprados: number) {
        this.numeroPedido = numeroPedido;
        this.valorTotalPedido = valorTotalPedido;
        this.produtos = produtos;
        this.comprador = comprador;
        this.nomeFornecedor = nomeFornecedor;
        this.totalProdutosComprados = totalProdutosComprados;
    }
}
