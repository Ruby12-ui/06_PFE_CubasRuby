
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadComponent: () =>
      import('./pages/inicio/inicio').then(m => m.Inicio)
  },
  {
    path: 'platos',
    loadComponent: () =>
      import('./pages/platos/platos').then(m => m.Platos)
  },
  {
    path: 'categorias',
    loadComponent: () =>
      import('./pages/categorias/categorias').then(m => m.Categorias)
  },
  {
    path: 'mesas',
    loadComponent: () =>
      import('./pages/mesas/mesas').then(m => m.Mesas)
  },
  {
    path: 'pedidos',
    loadComponent: () =>
      import('./pages/pedidos/pedidos').then(m => m.Pedidos)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/no-encontrado/no-encontrado')
        .then(m => m.NoEncontrado)
  }
];
