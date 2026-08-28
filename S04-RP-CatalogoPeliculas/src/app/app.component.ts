import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PeliculaFormularioComponent } from './components/pelicula-formulario/pelicula-formulario.component';
import { PeliculasListaComponent } from './components/peliculas-lista/peliculas-lista.component';

export interface Pelicula {
  id: number;
  titulo: string;
  genero: string;
  anio: number;
  calificacion: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    PeliculaFormularioComponent,
    PeliculasListaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  peliculas: Pelicula[] = [
    {
      id: 1,
      titulo: 'Interestelar',
      genero: 'Ciencia ficción',
      anio: 2014,
      calificacion: 9
    },
    {
      id: 2,
      titulo: 'El origen',
      genero: 'Acción',
      anio: 2010,
      calificacion: 8
    },
    {
      id: 3,
      titulo: 'Son como niños',
      genero: 'Comedia',
      anio: 2010,
      calificacion: 7
    }
  ];

  agregarPelicula(pelicula: Pelicula): void {
    this.peliculas = [
      ...this.peliculas,
      {
        ...pelicula,
        id: Date.now()
      }
    ];
  }
}