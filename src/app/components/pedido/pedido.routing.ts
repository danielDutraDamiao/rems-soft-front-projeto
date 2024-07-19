import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidoListComponent } from './pedido-list/pedido-list.component';

const routes: Routes = [
    { path: 'pedido', component: PedidoListComponent}
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class PedidoRouting { }