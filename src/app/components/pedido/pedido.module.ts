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
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToggleButtonModule } from 'primeng/togglebutton';






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
    HttpClientModule,
    TableModule,
    TagModule,
    ToggleButtonModule
    
  ],
exports: [
  PedidoListComponent
],
providers: [PedidoService]
})
export class PedidoModule { }
