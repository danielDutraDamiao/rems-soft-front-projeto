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
import { CompradorEditComponent } from './comprador-edit/comprador-edit.component';
import { CompradorRouting } from './comprador.routing';
import { CompradorService } from './comprador.service';
import { MessagesModule } from 'primeng/messages';
import { InputTextModule } from 'primeng/inputtext';
import { DataViewModule } from 'primeng/dataview';
import { ToastModule } from 'primeng/toast';
import { CompradorListComponent } from './comprador-list/comprador-list.component';



@NgModule({
  declarations: [
    CompradorEditComponent,
    CompradorListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CompradorRouting,
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
  CompradorEditComponent,
  CompradorListComponent
],
providers: [CompradorService],
bootstrap: [CompradorEditComponent, CompradorListComponent]
})
export class CompradorModule { }
