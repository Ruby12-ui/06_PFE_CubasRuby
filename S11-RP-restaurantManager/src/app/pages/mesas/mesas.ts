
import { Component } from '@angular/core';

@Component({
  selector: 'app-mesas',
  standalone: true,
  imports: [],
  templateUrl: './mesas.html',
  styleUrl: './mesas.css'
})
export class Mesas {
  mesas = [
    { numero: 1, capacidad: 2, estado: 'Disponible', cliente: '' },
    { numero: 2, capacidad: 4, estado: 'Ocupada', cliente: 'María López' },
    { numero: 3, capacidad: 4, estado: 'Disponible', cliente: '' },
    { numero: 4, capacidad: 6, estado: 'Ocupada', cliente: 'Juan Pérez' },
    { numero: 5, capacidad: 2, estado: 'Reservada', cliente: 'Ana Torres' },
    { numero: 6, capacidad: 4, estado: 'Disponible', cliente: '' },
    { numero: 7, capacidad: 6, estado: 'Disponible', cliente: '' },
    { numero: 8, capacidad: 2, estado: 'Ocupada', cliente: 'Luis Díaz' },
    { numero: 9, capacidad: 4, estado: 'Disponible', cliente: '' },
    { numero: 10, capacidad: 4, estado: 'Reservada', cliente: 'Carlos Ruiz' },
    { numero: 11, capacidad: 6, estado: 'Disponible', cliente: '' },
    { numero: 12, capacidad: 2, estado: 'Disponible', cliente: '' }
  ];

  get disponibles() {
    return this.mesas.filter(m => m.estado === 'Disponible').length;
  }

  get ocupadas() {
    return this.mesas.filter(m => m.estado === 'Ocupada').length;
  }

  get reservadas() {
    return this.mesas.filter(m => m.estado === 'Reservada').length;
  }

  cambiarEstado(mesa: typeof this.mesas[number]) {
    if (mesa.estado === 'Disponible') {
      mesa.estado = 'Ocupada';
      mesa.cliente = 'Cliente de ejemplo';
    } else {
      mesa.estado = 'Disponible';
      mesa.cliente = '';
    }
  }
}
