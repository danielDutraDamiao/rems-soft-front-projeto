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


@NgModule({
  declarations: [
    ProdutoEditComponent
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
    
  ],
exports: [
  ProdutoEditComponent
],
providers: [ProdutoService],
bootstrap: [ProdutoEditComponent]
})
export class ProdutoModule { }
