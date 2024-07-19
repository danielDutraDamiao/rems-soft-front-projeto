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
import { FornecedorEditComponent } from './fornecedor-edit/fornecedor-edit.component';
import { FornecedorRouting } from './fornecedor.routing';
import { FornecedorService } from './fornecedor.service';
import { MessagesModule } from 'primeng/messages';
import { InputTextModule } from 'primeng/inputtext';
import { DataViewModule } from 'primeng/dataview';
import { ToastModule } from 'primeng/toast';
import { FornecedorListComponent } from './fornecedor-list/fornecedor-list.component';



@NgModule({
  declarations: [
    FornecedorEditComponent,
    FornecedorListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FornecedorRouting,
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
  FornecedorEditComponent,
  FornecedorListComponent
],
providers: [FornecedorService],
bootstrap: [FornecedorEditComponent, FornecedorListComponent]
})
export class FornecedorModule { }
