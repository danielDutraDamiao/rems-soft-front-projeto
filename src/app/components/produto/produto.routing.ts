// pedido.routing.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoEditComponent } from './produto-edit/produto-edit.component';

const routes: Routes = [
  { path: '', component: ProdutoEditComponent}  // Rotas internas do módulo Pedido
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRouting { }
