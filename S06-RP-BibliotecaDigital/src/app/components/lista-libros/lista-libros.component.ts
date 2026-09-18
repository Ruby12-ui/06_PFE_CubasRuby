import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Libro } from '../../models/libro';
import { LibroService } from '../../services/libro.service';

@Component({
selector: 'app-lista-libros',
imports: [CommonModule],
templateUrl: './lista-libros.component.html',
styleUrl: './lista-libros.component.css'
})
export class ListaLibrosComponent implements OnInit {

private libroService = inject(LibroService);

libros: Libro[] = [];

ngOnInit(): void {
this.cargarLibros();
}

cargarLibros(): void {
this.libroService.listarLibros().subscribe({
next: (datos) => {
this.libros = datos;
},
error: (error) => {
console.error('Error al cargar los libros:', error);
}
});
}
}
