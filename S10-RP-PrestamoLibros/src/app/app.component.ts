
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrestamoLibrosComponent } from './pages/prestamo-libros/prestamo-libros.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrestamoLibrosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'S10-RP-PrestamoLibros';
}
