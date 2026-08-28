import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pelicula } from '../../app.component';

@Component({
  selector: 'app-pelicula-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pelicula-formulario.component.html',
  styleUrl: './pelicula-formulario.component.css'
})
export class PeliculaFormularioComponent {

  @Output() peliculaAgregada = new EventEmitter<Pelicula>();

  titulo: string = '';
  genero: string = '';
  anio: number | null = null;
  calificacion: number | null = null;

  agregar(): void {

    if (!this.formularioValido()) {
      return;
    }

    const nuevaPelicula: Pelicula = {
      id: Date.now(),
      titulo: this.titulo.trim(),
      genero: this.genero,
      anio: this.anio!,
      calificacion: this.calificacion!
    };

    this.peliculaAgregada.emit(nuevaPelicula);

    this.titulo = '';
    this.genero = '';
    this.anio = null;
    this.calificacion = null;
  }

  formularioValido(): boolean {
    return (
      this.titulo.trim() !== '' &&
      this.genero !== '' &&
      this.anio !== null &&
      this.anio > 0 &&
      this.calificacion !== null &&
      this.calificacion >= 1 &&
      this.calificacion <= 10
    );
  }
}