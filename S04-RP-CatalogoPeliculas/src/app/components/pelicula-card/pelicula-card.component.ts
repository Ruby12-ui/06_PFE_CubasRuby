import { Component, Input } from '@angular/core';
import { Pelicula } from '../../app.component';

@Component({
  selector: 'app-pelicula-card',
  standalone: true,
  imports: [],
  templateUrl: './pelicula-card.component.html',
  styleUrl: './pelicula-card.component.css'
})
export class PeliculaCardComponent {

  @Input() pelicula!: Pelicula;

}