// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Definição das rotas principais
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // Redireciona para '/pedido' se não houver outras rotas
  { path: 'pedido', loadChildren: () => import('./components/pedido/pedido.module').then(m => m.PedidoModule) },
  { path: 'produtos', loadChildren: () => import('./components/produto/produto.module').then(m => m.ProdutoModule) },
  // Define uma rota curinga para páginas não encontradas
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
