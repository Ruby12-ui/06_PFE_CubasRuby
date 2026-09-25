import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

  servicios = [
    {
      icono: '🩺',
      nombre: 'Consulta veterinaria',
      descripcion: 'Atención médica profesional para cuidar la salud de tu mascota.'
    },
    {
      icono: '💉',
      nombre: 'Vacunación',
      descripcion: 'Protege a tu mascota mediante un programa de vacunación.'
    },
    {
      icono: '✂️',
      nombre: 'Baño y grooming',
      descripcion: 'Servicios de higiene y cuidado para mantenerlos felices.'
    },
    {
      icono: '🚑',
      nombre: 'Emergencias',
      descripcion: 'Atención rápida para situaciones que necesitan cuidado inmediato.'
    }
  ];

}