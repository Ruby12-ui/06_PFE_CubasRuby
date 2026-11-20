
import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login').then(m => m.Login)
  },
  {
  path: 'bienvenida',
  canActivate: [authGuard],
  loadComponent: () =>
    import('./pages/bienvenida/bienvenida').then(m => m.Bienvenida)
},
  {
    path: 'inicio',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/inicio/inicio').then(m => m.Inicio)
  },
  {
    path: 'platos',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/platos/platos').then(m => m.Platos)
  },
  {
    path: 'categorias',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/categorias/categorias').then(m => m.Categorias)
  },
  {
    path: 'mesas',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/mesas/mesas').then(m => m.Mesas)
  },
  {
    path: 'pedidos',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/pedidos/pedidos').then(m => m.Pedidos)
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];
