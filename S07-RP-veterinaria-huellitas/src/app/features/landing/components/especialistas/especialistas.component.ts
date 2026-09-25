import { Component } from '@angular/core';

@Component({
  selector: 'app-especialistas',
  standalone: true,
  imports: [],
  templateUrl: './especialistas.component.html',
  styleUrl: './especialistas.component.css'
})
export class EspecialistasComponent {

  especialistas = [
    {
      nombre: 'Dra. Valeria Torres',
      especialidad: 'Medicina general',
      icono: '👩‍⚕️'
    },
    {
      nombre: 'Dr. Carlos Mendoza',
      especialidad: 'Cirugía veterinaria',
      icono: '👨‍⚕️'
    },
    {
      nombre: 'Dra. Andrea Flores',
      especialidad: 'Dermatología',
      icono: '👩‍⚕️'
    }
  ];

}