
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';

interface Prestamo {
  titulo: string;
  usuario: string;
  isbn: string;
  dias: number;
  carnet: string;
}

function sinSoloEspacios(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valor = String(control.value ?? '');
    return valor.trim().length > 0 ? null : { soloEspacios: true };
  };
}

function enteroPositivo(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valor = control.value;

    if (valor === null || valor === '') {
      return null;
    }

    return Number.isInteger(Number(valor))
      ? null
      : { noEsEntero: true };
  };
}

@Component({
  selector: 'app-prestamo-libros',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './prestamo-libros.component.html',
  styleUrl: './prestamo-libros.component.css'
})
export class PrestamoLibrosComponent {
  formulario: FormGroup;
  prestamos: Prestamo[] = [];

  indiceEditando: number | null = null;
  mensaje = '';
  tipoMensaje: 'exito' | 'error' = 'exito';

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      titulo: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
          Validators.pattern(/^[\p{L}\p{M}\s.,:;!?'"()\-]+$/u),
          sinSoloEspacios()
        ]
      ],
      usuario: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(60),
          Validators.pattern(/^[\p{L}\p{M}\s'-]+$/u),
          sinSoloEspacios()
        ]
      ],
      // ISBN: exactamente 13 dígitos, sin letras ni guiones.
      isbn: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]{13}$/)
        ]
      ],
      // Días de préstamo: número entero entre 1 y 15.
      dias: [
        1,
        [
          Validators.required,
          Validators.min(1),
          Validators.max(15),
          enteroPositivo()
        ]
      ],
      // Carnet: LIB- seguido de cuatro dígitos.
      carnet: [
        '',
        [
          Validators.required,
          Validators.pattern(/^LIB-[0-9]{4}$/)
        ]
      ]
    });
  }

  guardarPrestamo(): void {
    this.mensaje = '';

    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      this.mostrarMensaje(
        'Revisa los campos marcados. Hay datos incorrectos.',
        'error'
      );
      return;
    }

    const datos = this.formulario.getRawValue() as Prestamo;

    if (this.indiceEditando !== null) {
      this.prestamos[this.indiceEditando] = { ...datos };
      this.prestamos = [...this.prestamos];

      this.cancelarEdicion(false);
      this.mostrarMensaje(
        '¡Préstamo actualizado correctamente!',
        'exito'
      );
    } else {
      this.prestamos = [...this.prestamos, { ...datos }];
      this.formulario.reset({
        titulo: '',
        usuario: '',
        isbn: '',
        dias: 1,
        carnet: ''
      });

      this.mostrarMensaje(
        '¡Préstamo registrado correctamente!',
        'exito'
      );
    }
  }

  editarPrestamo(indice: number): void {
    const prestamo = this.prestamos[indice];

    this.indiceEditando = indice;
    this.formulario.reset({ ...prestamo });
    this.mensaje = '';

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  cancelarEdicion(mostrarAviso = true): void {
    this.indiceEditando = null;

    this.formulario.reset({
      titulo: '',
      usuario: '',
      isbn: '',
      dias: 1,
      carnet: ''
    });

    if (mostrarAviso) {
      this.mostrarMensaje('Se limpió el formulario.', 'exito');
    }
  }

  eliminarPrestamo(indice: number): void {
    const confirmar = window.confirm(
      '¿Estás segura de que deseas eliminar este préstamo?'
    );

    if (!confirmar) {
      return;
    }

    this.prestamos = this.prestamos.filter(
      (_, posicion) => posicion !== indice
    );

    if (this.indiceEditando === indice) {
      this.cancelarEdicion(false);
    } else if (
      this.indiceEditando !== null &&
      this.indiceEditando > indice
    ) {
      this.indiceEditando--;
    }

    this.mostrarMensaje('Préstamo eliminado correctamente.', 'exito');
  }

  mostrarMensaje(
    texto: string,
    tipo: 'exito' | 'error'
  ): void {
    this.mensaje = texto;
    this.tipoMensaje = tipo;
  }

  tieneError(campo: string, error: string): boolean {
    const control = this.formulario.get(campo);

    return !!(
      control &&
      control.touched &&
      control.hasError(error)
    );
  }

  campoInvalido(campo: string): boolean {
    const control = this.formulario.get(campo);

    return !!(control && control.invalid && control.touched);
  }
}
