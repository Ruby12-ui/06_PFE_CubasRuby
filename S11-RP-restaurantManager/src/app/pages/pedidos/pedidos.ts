
import { Component } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [],
  templateUrl: './pedidos.html',
  styleUrl: './pedidos.css'
})
export class Pedidos {
  filtro = 'Todos';

  pedidos = [
    {
      id: 'PED-001',
      cliente: 'María López',
      mesa: 'Mesa 04',
      hora: '12:15',
      total: 65,
      estado: 'Pendiente',
      platos: 'Lomo saltado, limonada',
      imagen: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=500'
    },
    {
      id: 'PED-002',
      cliente: 'Juan Pérez',
      mesa: 'Mesa 02',
      hora: '12:30',
      total: 42,
      estado: 'En preparación',
      platos: 'Arroz con pollo, refresco',
      imagen: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500'
    },
    {
      id: 'PED-003',
      cliente: 'Lucía Torres',
      mesa: 'Mesa 07',
      hora: '12:45',
      total: 80,
      estado: 'Entregado',
      platos: 'Pizza especial, postre',
      imagen: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500'
    },
    {
      id: 'PED-004',
      cliente: 'Carlos Ruiz',
      mesa: 'Mesa 05',
      hora: '13:00',
      total: 55,
      estado: 'Pendiente',
      platos: 'Hamburguesa, papas fritas',
      imagen: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'
    },
    {
      id: 'PED-005',
      cliente: 'Ana Torres',
      mesa: 'Mesa 09',
      hora: '13:10',
      total: 38,
      estado: 'En preparación',
      platos: 'Ceviche, bebida',
      imagen: 'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?w=500'
    },
    {
      id: 'PED-006',
      cliente: 'Pedro Díaz',
      mesa: 'Mesa 01',
      hora: '13:25',
      total: 29,
      estado: 'Entregado',
      platos: 'Ensalada y jugo natural',
      imagen: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500'
    }
  ];

  get pedidosFiltrados() {
    if (this.filtro === 'Todos') {
      return this.pedidos;
    }

    return this.pedidos.filter(p => p.estado === this.filtro);
  }

  get pendientes() {
    return this.pedidos.filter(p => p.estado === 'Pendiente').length;
  }

  get enPreparacion() {
    return this.pedidos.filter(p => p.estado === 'En preparación').length;
  }

  get entregados() {
    return this.pedidos.filter(p => p.estado === 'Entregado').length;
  }

  get totalVentas() {
    return this.pedidos.reduce((total, pedido) => total + pedido.total, 0);
  }

  cambiarEstado(pedido: typeof this.pedidos[number]) {
    if (pedido.estado === 'Pendiente') {
      pedido.estado = 'En preparación';
    } else if (pedido.estado === 'En preparación') {
      pedido.estado = 'Entregado';
    } else {
      pedido.estado = 'Pendiente';
    }
  }
}
