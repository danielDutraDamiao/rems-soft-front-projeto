import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private route: Router) { }

  items: MenuItem[] | undefined;
  
  ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/' },
      { label: 'Pedidos', icon: 'pi pi-fw pi-calendar', routerLink: '/pedido' },
      { label: 'Produtos', icon: 'pi pi-fw pi-pencil', routerLink: '/produtos/edit' },
      { label: 'Listar Produtos', icon: 'pi pi-fw pi-list', routerLink: '/produtos/listar' },
      { label: 'Compradores', icon: 'pi pi-fw pi-file', routerLink: '/compradores' },
      { label: 'Fornecedores', icon: 'pi pi-fw pi-cog', routerLink: '/fornecedores/edit' },
      { label: 'Listar Fornecedores', icon: 'pi pi-fw pi-list', routerLink: '/fornecedores/listar' }
    ];
  }
}
