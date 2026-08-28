import { Component, Input } from '@angular/core';
import { Pelicula } from '../../app.component';
import { PeliculaCardComponent } from '../pelicula-card/pelicula-card.component';

@Component({
  selector: 'app-peliculas-lista',
  standalone: true,
  imports: [PeliculaCardComponent],
  templateUrl: './peliculas-lista.component.html',
  styleUrl: './peliculas-lista.component.css'
})
export class PeliculasListaComponent {

  @Input() peliculas: Pelicula[] = [];

}