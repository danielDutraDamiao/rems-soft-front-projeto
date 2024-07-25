import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoListComponent } from './pedido-list/pedido-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PedidoRouting } from './pedido.routing';
import { ButtonModule } from 'primeng/button';
import { TreeTableModule } from 'primeng/treetable';
import { PedidoService } from './pedido.service';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MessagesModule } from 'primeng/messages';
import { DropdownModule } from 'primeng/dropdown';
import { PedidoEditComponent } from './pedido-edit/pedido-edit.component';
import { ProdutoService } from '../produto/produto.service';
import { CompradorService } from '../comprador/comprador.service';
import { MultiSelectModule } from 'primeng/multiselect';






@NgModule({
  declarations: [
    PedidoListComponent,
    PedidoEditComponent
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
    ToggleButtonModule,
    MessagesModule,
    ReactiveFormsModule,
    DropdownModule,
    MultiSelectModule
    
  ],
exports: [
  PedidoListComponent,
  PedidoEditComponent
],
providers: [PedidoService, ProdutoService, CompradorService]
})
export class PedidoModule { }
