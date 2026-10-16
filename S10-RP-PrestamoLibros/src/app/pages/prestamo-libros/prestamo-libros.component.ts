
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';

interface Prestamo {
  titulo: string;
  usuario: string;
  isbn: string;
  dias: number;
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
  indiceEdicion: number | null = null;
  mensaje = '';
  tipoMensaje = '';

  // Permite letras, tildes, espacios y signos habituales de títulos.
  private readonly tituloValidator: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const valor = String(control.value ?? '').trim();

    if (!valor) {
      return null;
    }

    return /^[\p{L}\p{M}\s.,:;'"()!?¿¡\-]+$/u.test(valor)
      ? null
      : { tituloInvalido: true };
  };

  // Solo letras, tildes, ñ, espacios, apóstrofes y guiones.
  private readonly usuarioValidator: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const valor = String(control.value ?? '').trim();

    if (!valor) {
      return null;
    }

    return /^[\p{L}\p{M}\s'-]+$/u.test(valor)
      ? null
      : { usuarioInvalido: true };
  };

  // El ISBN admite guiones, pero debe tener 10 o 13 dígitos.
  private readonly isbnValidator: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const valor = String(control.value ?? '').trim();

    if (!valor) {
      return null;
    }

    if (!/^[0-9-]+$/.test(valor)) {
      return { isbnCaracteres: true };
    }

    const digitos = valor.replace(/-/g, '');

    return digitos.length === 10 || digitos.length === 13
      ? null
      : { isbnLongitud: true };
  };

  // Solo permite números enteros del 1 al 15.
  private readonly diasValidator: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const valor = control.value;

    if (valor === null || valor === '') {
      return null;
    }

    const numero = Number(valor);

    if (!Number.isInteger(numero)) {
      return { enteroInvalido: true };
    }

    if (numero < 1 || numero > 15) {
      return { diasFueraDeRango: true };
    }

    return null;
  };

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      titulo: [
        '',
        [
          Validators.required,
          Validators.maxLength(150),
          this.tituloValidator
        ]
      ],
      usuario: [
        '',
        [
          Validators.required,
          Validators.maxLength(100),
          this.usuarioValidator
        ]
      ],
      isbn: [
        '',
        [
          Validators.required,
          this.isbnValidator
        ]
      ],
      dias: [
        7,
        [
          Validators.required,
          this.diasValidator
        ]
      ]
    });
  }

  guardarPrestamo(): void {
    this.mensaje = '';

    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      this.mostrarMensaje(
        'Revisa los campos marcados antes de continuar.',
        'error'
      );
      return;
    }

    const datos = this.formulario.getRawValue() as Prestamo;

    // Evita espacios innecesarios en los textos.
    datos.titulo = datos.titulo.trim();
    datos.usuario = datos.usuario.trim();
    datos.isbn = datos.isbn.trim();
    datos.dias = Number(datos.dias);

    if (this.indiceEdicion !== null) {
      this.prestamos[this.indiceEdicion] = { ...datos };

      this.mostrarMensaje(
        '¡Préstamo actualizado correctamente!',
        'exito'
      );
    } else {
      this.prestamos.push({ ...datos });

      this.mostrarMensaje(
        '¡Préstamo registrado correctamente!',
        'exito'
      );
    }

    this.cancelarEdicion(false);
  }

  editarPrestamo(indice: number): void {
    this.indiceEdicion = indice;
    this.formulario.reset(this.prestamos[indice]);
    this.mensaje = '';

    this.formulario.markAsPristine();
    this.formulario.markAsUntouched();
  }

  cancelarEdicion(mostrarMensaje = true): void {
    this.indiceEdicion = null;

    this.formulario.reset({
      titulo: '',
      usuario: '',
      isbn: '',
      dias: 7
    });

    if (mostrarMensaje) {
      this.mostrarMensaje('Edición cancelada.', 'info');
    }
  }

  eliminarPrestamo(indice: number): void {
    const confirmar = window.confirm(
      `¿Deseas eliminar el préstamo de "${this.prestamos[indice].titulo}"?`
    );

    if (!confirmar) {
      return;
    }

    this.prestamos.splice(indice, 1);

    if (this.indiceEdicion === indice) {
      this.cancelarEdicion(false);
    } else if (
      this.indiceEdicion !== null &&
      this.indiceEdicion > indice
    ) {
      this.indiceEdicion--;
    }

    this.mostrarMensaje(
      'El préstamo fue eliminado correctamente.',
      'exito'
    );
  }

  private mostrarMensaje(mensaje: string, tipo: string): void {
    this.mensaje = mensaje;
    this.tipoMensaje = tipo;
  }
}
