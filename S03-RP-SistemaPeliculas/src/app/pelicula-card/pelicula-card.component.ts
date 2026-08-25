import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface Pelicula {
  id: number;
  titulo: string;
  genero: string;
  director: string;
  anio: number;
  duracion: number;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: 'app-pelicula-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pelicula-card.component.html',
  styleUrl: './pelicula-card.component.css'
})
export class PeliculaCardComponent {

  @Input() pelicula!: Pelicula;

  @Output() eliminar = new EventEmitter<number>();

  eliminarPelicula(): void {
    if (confirm(`¿Deseas eliminar la película "${this.pelicula.titulo}"?`)) {
      this.eliminar.emit(this.pelicula.id);
    }
  }
}