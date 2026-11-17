
import { Component } from '@angular/core';

@Component({
  selector: 'app-platos',
  standalone: true,
  imports: [],
  templateUrl: './platos.html',
  styleUrl: './platos.css'
})
export class Platos {
  busqueda = '';
  categoriaSeleccionada = 'Todos';

  platos = [
    {
      nombre: 'Lomo saltado',
      categoria: 'Platos principales',
      precio: 28,
      imagen: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=700',
      descripcion: 'Carne salteada con cebolla, tomate y papas.',
      disponible: true
    },
    {
      nombre: 'Ceviche peruano',
      categoria: 'Entradas',
      precio: 32,
      imagen: 'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?w=700',
      descripcion: 'Pescado fresco con limón y cebolla.',
      disponible: true
    },
    {
      nombre: 'Arroz con pollo',
      categoria: 'Platos principales',
      precio: 22,
      imagen: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=700',
      descripcion: 'Arroz verde acompañado de pollo.',
      disponible: true
    },
    {
      nombre: 'Hamburguesa especial',
      categoria: 'Platos principales',
      precio: 25,
      imagen: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700',
      descripcion: 'Hamburguesa artesanal con papas.',
      disponible: true
    },
    {
      nombre: 'Ensalada fresca',
      categoria: 'Entradas',
      precio: 16,
      imagen: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700',
      descripcion: 'Vegetales frescos de temporada.',
      disponible: false
    },
    {
      nombre: 'Cheesecake',
      categoria: 'Postres',
      precio: 14,
      imagen: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=700',
      descripcion: 'Pastel cremoso con frutos rojos.',
      disponible: true
    },
    {
      nombre: 'Pizza especial',
      categoria: 'Platos principales',
      precio: 30,
      imagen: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700',
      descripcion: 'Pizza artesanal con queso y vegetales.',
      disponible: true
    },
    {
      nombre: 'Postre de chocolate',
      categoria: 'Postres',
      precio: 12,
      imagen: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=700',
      descripcion: 'Delicioso pastel de chocolate.',
      disponible: true
    }
  ];

  get platosFiltrados() {
    return this.platos.filter(plato => {
      const coincideNombre = plato.nombre.toLowerCase()
        .includes(this.busqueda.toLowerCase());

      const coincideCategoria =
        this.categoriaSeleccionada === 'Todos' ||
        plato.categoria === this.categoriaSeleccionada;

      return coincideNombre && coincideCategoria;
    });
  }

  cambiarDisponibilidad(plato: typeof this.platos[number]) {
    plato.disponible = !plato.disponible;
  }
}
