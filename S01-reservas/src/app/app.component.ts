import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  especialidades = [
    'Medicina General',
    'Pediatría',
    'Cardiología',
    'Dermatología',
    'Odontología'
  ];

  medicos = [
    'Dr. Carlos Mendoza',
    'Dra. Ana Torres',
    'Dr. Luis Ramírez',
    'Dra. María López'
  ];

  reserva = {
    nombre: '',
    dni: '',
    especialidad: '',
    medico: '',
    fecha: '',
    hora: ''
  };

  citaRegistrada = false;

  reservarCita() {

    if (
      !this.reserva.nombre ||
      !this.reserva.dni ||
      !this.reserva.especialidad ||
      !this.reserva.medico ||
      !this.reserva.fecha ||
      !this.reserva.hora
    ) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    this.citaRegistrada = true;

    alert('¡Cita reservada correctamente!');
  }

  nuevaReserva() {
    this.reserva = {
      nombre: '',
      dni: '',
      especialidad: '',
      medico: '',
      fecha: '',
      hora: ''
    };

    this.citaRegistrada = false;
  }
}