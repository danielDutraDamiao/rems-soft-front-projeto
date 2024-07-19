import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompradorListComponent } from './comprador-list/comprador-list.component';
import { CompradorEditComponent } from './comprador-edit/comprador-edit.component';


const routes: Routes = [
  { path: '', component: CompradorListComponent }, // Rota padrão para listagem de compradors
  { path: 'edit', component: CompradorEditComponent }, // Rota para edição de compradors
  { path: 'listar', component: CompradorListComponent } // Rota para listar compradors
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompradorRouting { }
