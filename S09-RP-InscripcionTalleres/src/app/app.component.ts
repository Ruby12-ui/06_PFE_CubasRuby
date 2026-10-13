import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Inscripcion {
  numero: number;
  nombre: string;
  correo: string;
  especialidad: string;
  turno: string;
  modalidad: string;
  experiencia: string;
}

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  siguienteNumero = 1;
  numeroEditando: number | null = null;

  nuevaInscripcion = {
    nombre: '',
    correo: '',
    especialidad: '',
    turno: 'Mañana',
    modalidad: '',
    experiencia: ''
  };

  inscripciones: Inscripcion[] = [];

  registrarInscripcion(formulario: NgForm): void {
    if (formulario.invalid) {
      return;
    }

    if (this.numeroEditando !== null) {
      this.inscripciones = this.inscripciones.map(persona =>
        persona.numero === this.numeroEditando
          ? { numero: persona.numero, ...this.nuevaInscripcion }
          : persona
      );

      this.cancelarEdicion(formulario);
      return;
    }

    const participante: Inscripcion = {
      numero: this.siguienteNumero++,
      ...this.nuevaInscripcion
    };

    this.inscripciones.push(participante);
    formulario.resetForm(this.formularioVacio());
  }

  editarInscripcion(persona: Inscripcion): void {
    this.numeroEditando = persona.numero;

    this.nuevaInscripcion = {
      nombre: persona.nombre,
      correo: persona.correo,
      especialidad: persona.especialidad,
      turno: persona.turno,
      modalidad: persona.modalidad,
      experiencia: persona.experiencia
    };
  }

  cancelarEdicion(formulario?: NgForm): void {
    this.numeroEditando = null;
    this.nuevaInscripcion = this.formularioVacio();

    if (formulario) {
      formulario.resetForm(this.nuevaInscripcion);
    }
  }

  eliminarInscripcion(numero: number): void {
    this.inscripciones = this.inscripciones.filter(
      persona => persona.numero !== numero
    );

    if (this.numeroEditando === numero) {
      this.cancelarEdicion();
    }
  }

  formularioVacio() {
    return {
      nombre: '',
      correo: '',
      especialidad: '',
      turno: 'Mañana',
      modalidad: '',
      experiencia: ''
    };
  }

  get totalInscritos(): number {
    return this.inscripciones.length;
  }

  get totalManana(): number {
    return this.inscripciones.filter(
      persona => persona.turno === 'Mañana'
    ).length;
  }

  get totalNoche(): number {
    return this.inscripciones.filter(
      persona => persona.turno === 'Noche'
    ).length;
  }
}

