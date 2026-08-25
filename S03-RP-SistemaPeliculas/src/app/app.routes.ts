import { Routes } from '@angular/router';
import { PeliculasListaComponent } from './peliculas-lista/peliculas-lista.component';
import { PeliculaFormularioComponent } from './pelicula-formulario/pelicula-formulario.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'peliculas',
    pathMatch: 'full'
  },
  {
    path: 'peliculas',
    component: PeliculasListaComponent
  },
  {
    path: 'peliculas/nueva',
    component: PeliculaFormularioComponent
  },
  {
    path: 'peliculas/editar/:id',
    component: PeliculaFormularioComponent
  },
  {
    path: '**',
    redirectTo: 'peliculas'
  }
];