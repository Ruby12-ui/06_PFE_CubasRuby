import { Component, inject } from '@angular/core';
import { PeliculaService } from '../pelicula.service';

@Component({
  selector: 'app-pelicula-lista',
  standalone: true,
  imports: [],
  templateUrl: './pelicula-lista.component.html',
  styleUrl: './pelicula-lista.component.css'
})
export class PeliculaListaComponent {

  private peliculaService = inject(PeliculaService);

  peliculas = this.peliculaService.obtenerPeliculas();

}