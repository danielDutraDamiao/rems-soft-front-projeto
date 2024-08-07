import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TreeTableModule } from 'primeng/treetable';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ProdutoEditComponent } from './produto-edit/produto-edit.component';
import { ProdutoRouting } from './produto.routing';
import { ProdutoService } from './produto.service';
import { MessagesModule } from 'primeng/messages';
import { InputTextModule } from 'primeng/inputtext';
import { DataViewModule } from 'primeng/dataview';
import { ToastModule } from 'primeng/toast';
import { ProdutoListComponent } from './produto-list/produto-list.component';



@NgModule({
  declarations: [
    ProdutoEditComponent,
    ProdutoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ProdutoRouting,
    ButtonModule,
    TreeTableModule,
    HttpClientModule,
    TableModule,
    TagModule,
    ToggleButtonModule,
    MessagesModule,
    ReactiveFormsModule,
    InputTextModule,
    DataViewModule,
    ToastModule
    
  ],
exports: [
  ProdutoEditComponent,
  ProdutoListComponent
],
providers: [ProdutoService],
bootstrap: [ProdutoEditComponent, ProdutoListComponent]
})
export class ProdutoModule { }
