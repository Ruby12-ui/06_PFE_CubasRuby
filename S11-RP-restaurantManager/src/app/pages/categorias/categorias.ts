
import { Component } from '@angular/core';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [],
  templateUrl: './categorias.html',
  styleUrl: './categorias.css'
})
export class Categorias {
  categorias = [
    {
      nombre: 'Entradas',
      descripcion: 'Para comenzar una deliciosa experiencia.',
      cantidad: 8,
      icono: '🥗',
      imagen: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=700',
      color: 'green'
    },
    {
      nombre: 'Platos principales',
      descripcion: 'Los platos favoritos de nuestros clientes.',
      cantidad: 12,
      icono: '🍛',
      imagen: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=700',
      color: 'orange'
    },
    {
      nombre: 'Postres',
      descripcion: 'Un toque dulce para terminar.',
      cantidad: 4,
      icono: '🍰',
      imagen: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=700',
      color: 'pink'
    },
    {
      nombre: 'Bebidas',
      descripcion: 'Refrescantes bebidas para acompañar.',
      cantidad: 6,
      icono: '🥤',
      imagen: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=700',
      color: 'blue'
    }
  ];
}
