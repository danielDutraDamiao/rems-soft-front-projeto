import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FornecedorListComponent } from './fornecedor-list/fornecedor-list.component';
import { FornecedorEditComponent } from './fornecedor-edit/fornecedor-edit.component';


const routes: Routes = [
  { path: '', component: FornecedorListComponent }, // Rota padrão para listagem de fornecedors
  { path: 'edit', component: FornecedorEditComponent }, // Rota para edição de fornecedors
  { path: 'listar', component: FornecedorListComponent } // Rota para listar fornecedors
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FornecedorRouting { }
