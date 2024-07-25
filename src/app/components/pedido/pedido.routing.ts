// pedido.routing.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoListComponent } from './pedido-list/pedido-list.component';
import { PedidoEditComponent } from './pedido-edit/pedido-edit.component';

const routes: Routes = [
  { path: '', component: PedidoListComponent }, // Rota padrão para listagem de compradors
  { path: 'edit', component: PedidoEditComponent }, // Rota para edição de compradors
  { path: 'listar', component: PedidoListComponent } // Rota para listar compradors
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRouting { }
