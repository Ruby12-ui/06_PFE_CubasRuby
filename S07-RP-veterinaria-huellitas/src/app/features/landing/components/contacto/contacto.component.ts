import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  mostrarModal = false;

  cita = {
    nombre: '',
    mascota: '',
    telefono: '',
    servicio: '',
    fecha: '',
    hora: '',
    motivo: ''
  };


  abrirFormulario(): void {
    this.mostrarModal = true;
  }


  cerrarFormulario(): void {
    this.mostrarModal = false;
  }


  enviarFormulario(): void {

    if (
      !this.cita.nombre ||
      !this.cita.mascota ||
      !this.cita.telefono ||
      !this.cita.servicio ||
      !this.cita.fecha ||
      !this.cita.hora
    ) {

      alert('Por favor completa todos los campos obligatorios.');

      return;
    }


    alert(
      '🐾 ¡CITA REGISTRADA CORRECTAMENTE!\n\n' +
      'Dueño: ' + this.cita.nombre + '\n' +
      'Mascota: ' + this.cita.mascota + '\n' +
      'Servicio: ' + this.cita.servicio + '\n' +
      'Fecha: ' + this.cita.fecha + '\n' +
      'Hora: ' + this.cita.hora
    );


    this.cita = {
      nombre: '',
      mascota: '',
      telefono: '',
      servicio: '',
      fecha: '',
      hora: '',
      motivo: ''
    };

    this.cerrarFormulario();

  }

}