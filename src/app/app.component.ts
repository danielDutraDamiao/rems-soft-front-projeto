import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  items: MenuItem[] | undefined;
  
  ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Pedidos', icon: 'pi pi-fw pi-calendar' },
      { label: 'Produtos', icon: 'pi pi-fw pi-pencil' },
      { label: 'Compradores', icon: 'pi pi-fw pi-file' },
      { label: 'Fornecedores', icon: 'pi pi-fw pi-cog' }
  ];
  }
}
