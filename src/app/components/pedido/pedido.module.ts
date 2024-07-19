import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoListComponent } from './pedido-list/pedido-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PedidoRouting } from './pedido.routing';
import { ButtonModule } from 'primeng/button';
import { TreeTableModule } from 'primeng/treetable';
import { PedidoService } from './pedido.service';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    PedidoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PedidoRouting,
    ButtonModule,
    TreeTableModule,
    HttpClientModule
  ],
exports: [
  PedidoListComponent
],
providers: [PedidoService]
})
export class PedidoModule { }
