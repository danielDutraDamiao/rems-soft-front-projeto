import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'pedido', loadChildren: () => import('./components/pedido/pedido.module').then(m => m.PedidoModule) },
  { path: 'produtos', loadChildren: () => import('./components/produto/produto.module').then(m => m.ProdutoModule) },
  { path: 'listar', loadChildren: () => import('./components/produto/produto.module').then(m => m.ProdutoModule) },
  { path: 'fornecedores', loadChildren: () => import('./components/fornecedor/fornecedor.module').then(m => m.FornecedorModule) },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
