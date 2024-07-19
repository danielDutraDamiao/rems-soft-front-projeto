import { CompradorDTO } from "./comprador.dto";
import { ProdutoDTO } from "./produto.dto";

export class PedidoDTO {
    numeroPedido: string;
    valorTotalPedido: number;
    produtoIds: ProdutoDTO[];
    compradorId: CompradorDTO;

    constructor(numeroPedido: string, valorTotalPedido: number, produtoIds: ProdutoDTO[], compradorId: CompradorDTO) {
        this.numeroPedido = numeroPedido;
        this.valorTotalPedido = valorTotalPedido;
        this.produtoIds = produtoIds;
        this.compradorId = compradorId;
    }
}
