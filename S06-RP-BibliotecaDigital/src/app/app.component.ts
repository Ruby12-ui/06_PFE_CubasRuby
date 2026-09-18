import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Libro } from './models/libro';
import { LibroService } from './services/libro.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  private libroService = inject(LibroService);

  libros: Libro[] = [];
  librosFiltrados: Libro[] = [];

  busqueda = '';

  mostrarFormulario = false;
  modoEdicion = false;

  vistaActual = 'dashboard';

  libroSeleccionado: Libro = this.nuevoLibro();

  mensaje = '';

  ngOnInit(): void {
    this.cargarLibros();
  }

  cargarLibros(): void {
    this.libroService.listar().subscribe({
      next: (datos) => {
        this.libros = datos;
        this.librosFiltrados = datos;
      },
      error: (error) => {
        console.error('Error al cargar libros:', error);
        this.mensaje = 'No se pudieron cargar los libros.';
      }
    });
  }

  cambiarVista(vista: string): void {
    this.vistaActual = vista;
    this.mostrarFormulario = false;

    if (vista === 'libros') {
      this.cargarLibros();
    }
  }

  buscar(): void {
    const texto = this.busqueda.toLowerCase().trim();

    if (!texto) {
      this.librosFiltrados = this.libros;
      return;
    }

    this.librosFiltrados = this.libros.filter(libro =>
      libro.titulo.toLowerCase().includes(texto) ||
      libro.autor.toLowerCase().includes(texto) ||
      libro.categoria.toLowerCase().includes(texto)
    );
  }

  nuevo(): void {
    this.modoEdicion = false;
    this.libroSeleccionado = this.nuevoLibro();
    this.mostrarFormulario = true;
  }

  editar(libro: Libro): void {
    this.modoEdicion = true;

    this.libroSeleccionado = {
      ...libro
    };

    this.mostrarFormulario = true;
  }

  guardar(): void {

    if (
      !this.libroSeleccionado.titulo ||
      !this.libroSeleccionado.autor ||
      !this.libroSeleccionado.categoria
    ) {
      alert('Complete todos los campos obligatorios.');
      return;
    }

    if (this.modoEdicion && this.libroSeleccionado.id) {

      this.libroService
        .actualizar(
          this.libroSeleccionado.id,
          this.libroSeleccionado
        )
        .subscribe({
          next: () => {
            this.mostrarFormulario = false;
            this.cargarLibros();

            this.mostrarMensaje(
              'Libro actualizado correctamente.'
            );
          },

          error: (error) => {
            console.error(error);
            alert('No se pudo actualizar el libro.');
          }
        });

    } else {

      this.libroService
        .crear(this.libroSeleccionado)
        .subscribe({
          next: () => {
            this.mostrarFormulario = false;
            this.cargarLibros();

            this.mostrarMensaje(
              'Libro registrado correctamente.'
            );
          },

          error: (error) => {
            console.error(error);
            alert('No se pudo registrar el libro.');
          }
        });

    }
  }

  eliminar(libro: Libro): void {

    if (!libro.id) {
      return;
    }

    const confirmar = confirm(
      `¿Está seguro de eliminar "${libro.titulo}"?`
    );

    if (!confirmar) {
      return;
    }

    this.libroService
      .eliminar(libro.id)
      .subscribe({
        next: () => {
          this.cargarLibros();

          this.mostrarMensaje(
            'Libro eliminado correctamente.'
          );
        },

        error: (error) => {
          console.error(error);
          alert('No se pudo eliminar el libro.');
        }
      });
  }

  cancelar(): void {
    this.mostrarFormulario = false;
  }

  private nuevoLibro(): Libro {
    return {
      titulo: '',
      autor: '',
      categoria: '',
      anio: new Date().getFullYear(),
      disponible: true,
      descripcion: ''
    };
  }

  private mostrarMensaje(texto: string): void {
    this.mensaje = texto;

    setTimeout(() => {
      this.mensaje = '';
    }, 3000);
  }

  get totalLibros(): number {
    return this.libros.length;
  }

  get librosDisponibles(): number {
    return this.libros.filter(
      libro => libro.disponible
    ).length;
  }

  get librosNoDisponibles(): number {
    return this.libros.filter(
      libro => !libro.disponible
    ).length;
  }

  get totalCategorias(): number {
    return new Set(
      this.libros.map(libro => libro.categoria)
    ).size;
  }

}