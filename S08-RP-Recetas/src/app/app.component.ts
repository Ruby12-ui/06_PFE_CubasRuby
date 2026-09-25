import { Component } from '@angular/core';
import { RecetaListaComponent } from './components/receta-lista/receta-lista.component';
import { RecetaFormularioComponent } from './components/receta-formulario/receta-formulario.component';

@Component({
  selector: 'app-root',
  imports: [
    RecetaListaComponent,
    RecetaFormularioComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  mostrarFormulario = false;

  abrirFormulario(): void {
    this.mostrarFormulario = true;
  }

  cerrarFormulario(): void {
    this.mostrarFormulario = false;
  }
}