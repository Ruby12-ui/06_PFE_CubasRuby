import { Injectable } from '@angular/core';
import { Pelicula } from './models/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private peliculas: Pelicula[] = [
    {
      id: 1,
      titulo: 'Interestelar',
      genero: 'Ciencia ficción',
      director: 'Christopher Nolan',
      anio: 2014,
      calificacion: 8.7
    },
    {
      id: 2,
      titulo: 'El Padrino',
      genero: 'Drama',
      director: 'Francis Ford Coppola',
      anio: 1972,
      calificacion: 9.2
    },
    {
      id: 3,
      titulo: 'Toy Story',
      genero: 'Animación',
      director: 'John Lasseter',
      anio: 1995,
      calificacion: 8.3
    },
    {
      id: 4,
      titulo: 'Avengers: Endgame',
      genero: 'Acción',
      director: 'Anthony Russo y Joe Russo',
      anio: 2019,
      calificacion: 8.4
    },
    {
      id: 5,
      titulo: 'Titanic',
      genero: 'Romance',
      director: 'James Cameron',
      anio: 1997,
      calificacion: 7.9
    }
  ];

  obtenerPeliculas(): Pelicula[] {
    return this.peliculas;
  }
}