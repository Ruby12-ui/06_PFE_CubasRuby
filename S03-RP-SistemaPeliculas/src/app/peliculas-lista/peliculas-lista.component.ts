import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  Pelicula,
  PeliculaCardComponent
} from '../pelicula-card/pelicula-card.component';

@Component({
  selector: 'app-peliculas-lista',
  standalone: true,
  imports: [
    RouterLink,
    PeliculaCardComponent
  ],
  templateUrl: './peliculas-lista.component.html',
  styleUrl: './peliculas-lista.component.css'
})
export class PeliculasListaComponent {

  peliculas: Pelicula[] = [
    {
      id: 1,
      titulo: 'Avengers: Endgame',
      genero: 'Acción',
      director: 'Anthony Russo y Joe Russo',
      anio: 2019,
      duracion: 181,
      descripcion: 'Los Vengadores se enfrentan a Thanos en una batalla para salvar el universo.',
      imagen: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg'
    },
    {
      id: 2,
      titulo: 'Spider-Man: No Way Home',
      genero: 'Acción',
      director: 'Jon Watts',
      anio: 2021,
      duracion: 148,
      descripcion: 'Spider-Man debe enfrentarse a villanos de diferentes universos.',
      imagen: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg'
    },
    {
      id: 3,
      titulo: 'The Batman',
      genero: 'Drama',
      director: 'Matt Reeves',
      anio: 2022,
      duracion: 176,
      descripcion: 'Batman investiga una serie de crímenes que amenazan Gotham City.',
      imagen: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg'
    },
    {
      id: 4,
      titulo: 'Interstellar',
      genero: 'Ciencia ficción',
      director: 'Christopher Nolan',
      anio: 2014,
      duracion: 169,
      descripcion: 'Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar.',
      imagen: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg'
    }
  ];

  eliminarPelicula(id: number): void {
    this.peliculas = this.peliculas.filter(
      pelicula => pelicula.id !== id
    );
  }
}