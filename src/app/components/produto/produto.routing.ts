import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoEditComponent } from './produto-edit/produto-edit.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';

const routes: Routes = [
  { path: '', component: ProdutoListComponent }, // Rota padrão para listagem de produtos
  { path: 'edit', component: ProdutoEditComponent }, // Rota para edição de produtos
  { path: 'listar', component: ProdutoListComponent } // Rota para listar produtos
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRouting { }
