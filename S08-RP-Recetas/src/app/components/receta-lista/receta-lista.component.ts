import { Component } from '@angular/core';
import { Receta } from '../../models/receta';
import { RECETAS } from '../../data/recetas-data';
import { RecetaFormularioComponent } from '../receta-formulario/receta-formulario.component';

@Component({
  selector: 'app-receta-lista',
  imports: [RecetaFormularioComponent],
  templateUrl: './receta-lista.component.html',
  styleUrl: './receta-lista.component.css'
})
export class RecetaListaComponent {

  recetas: Receta[] = [...RECETAS];

  recetasFiltradas: Receta[] = [...RECETAS];

  categoriaSeleccionada = 'Todas';

  mostrarFormulario = false;

  recetaEditando: Receta | null = null;

  filtrarPorCategoria(categoria: string): void {

    this.categoriaSeleccionada = categoria;

    if (categoria === 'Todas') {
      this.recetasFiltradas = [...this.recetas];
    } else {
      this.recetasFiltradas = this.recetas.filter(
        receta => receta.categoria === categoria
      );
    }

  }

  abrirFormulario(): void {
    this.recetaEditando = null;
    this.mostrarFormulario = true;
  }

  cerrarFormulario(): void {
    this.mostrarFormulario = false;
    this.recetaEditando = null;
  }

  agregarReceta(receta: Receta): void {

    this.recetas.push(receta);

    this.filtrarPorCategoria(
      this.categoriaSeleccionada
    );

    this.mostrarFormulario = false;
    this.recetaEditando = null;
  }

  editarReceta(receta: Receta): void {

    this.recetaEditando = {
      ...receta
    };

    this.mostrarFormulario = true;
  }

  actualizarReceta(recetaActualizada: Receta): void {

    const index = this.recetas.findIndex(
      receta => receta.id === recetaActualizada.id
    );

    if (index !== -1) {
      this.recetas[index] = recetaActualizada;
    }

    this.filtrarPorCategoria(
      this.categoriaSeleccionada
    );

    this.mostrarFormulario = false;
    this.recetaEditando = null;
  }

  eliminarReceta(receta: Receta): void {

    const confirmar = confirm(
      `¿Deseas eliminar la receta "${receta.name}"?`
    );

    if (!confirmar) {
      return;
    }

    this.recetas = this.recetas.filter(
      item => item.id !== receta.id
    );

    this.filtrarPorCategoria(
      this.categoriaSeleccionada
    );
  }

}