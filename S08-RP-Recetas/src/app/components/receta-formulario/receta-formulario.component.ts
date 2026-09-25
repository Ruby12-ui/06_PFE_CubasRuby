import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  inject
} from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Receta } from '../../models/receta';

import { RecetaService } from '../../services/receta.service';

@Component({
  selector: 'app-receta-formulario',
  imports: [FormsModule],
  templateUrl: './receta-formulario.component.html',
  styleUrl: './receta-formulario.component.css'
})
export class RecetaFormularioComponent implements OnChanges {

  private recetaService = inject(RecetaService);

  @Input() recetaEditar: Receta | null = null;

  @Output() recetaCreada = new EventEmitter<Receta>();

  @Output() recetaActualizada = new EventEmitter<Receta>();


  receta: Receta = {
    name: '',
    ingredients: [],
    instructions: [],
    prepTimeMinutes: 0,
    cookTimeMinutes: 0,
    difficulty: 'Fácil',
    cuisine: 'Internacional',
    image: '',
    categoria: 'Entrantes'
  };


  ingredientesTexto = '';

  instruccionesTexto = '';


  ngOnChanges(changes: SimpleChanges): void {

    if (
      changes['recetaEditar'] &&
      this.recetaEditar
    ) {

      this.receta = {
        ...this.recetaEditar,
        ingredients: [
          ...this.recetaEditar.ingredients
        ],
        instructions: [
          ...this.recetaEditar.instructions
        ]
      };

      this.ingredientesTexto =
        this.recetaEditar.ingredients.join(', ');

      this.instruccionesTexto =
        this.recetaEditar.instructions.join(', ');

    }

  }


  guardarReceta(): void {

    this.receta.ingredients =
      this.ingredientesTexto
        .split(',')
        .map(item => item.trim())
        .filter(item => item !== '');


    this.receta.instructions =
      this.instruccionesTexto
        .split(',')
        .map(item => item.trim())
        .filter(item => item !== '');


    // =====================================
    // ACTUALIZAR RECETA
    // =====================================

    if (
      this.recetaEditar &&
      this.recetaEditar.id
    ) {

      const id = this.recetaEditar.id;

      this.recetaService
        .actualizarReceta(
          id,
          this.receta
        )
        .subscribe({

          next: (respuesta) => {

            console.log(
              'PUT correcto:',
              respuesta
            );

            const recetaActualizada: Receta = {
              ...this.receta,
              id: id
            };

            this.recetaActualizada.emit(
              recetaActualizada
            );

            alert(
              'Receta actualizada correctamente'
            );

          },

          error: (error) => {

            console.error(
              'Error PUT:',
              error
            );

            /*
             * DummyJSON puede devolver error
             * aunque la información esté correcta.
             *
             * Actualizamos la lista localmente
             * para que el cambio se vea.
             */

            const recetaActualizada: Receta = {
              ...this.receta,
              id: id
            };

            this.recetaActualizada.emit(
              recetaActualizada
            );

            alert(
              'Receta actualizada en la lista'
            );

          }

        });

      return;
    }


    // =====================================
    // REGISTRAR RECETA
    // =====================================

    this.recetaService
      .crearReceta(
        this.receta
      )
      .subscribe({

        next: (respuesta) => {

          console.log(
            'POST correcto:',
            respuesta
          );

          const nuevaReceta: Receta = {
            ...this.receta,
            id: respuesta.id
          };

          this.recetaCreada.emit(
            nuevaReceta
          );

          alert(
            'Receta registrada correctamente'
          );

          this.limpiarFormulario();

        },

        error: (error) => {

          console.error(
            'Error POST:',
            error
          );

          alert(
            'Error al registrar la receta'
          );

        }

      });

  }


  limpiarFormulario(): void {

    this.receta = {
      name: '',
      ingredients: [],
      instructions: [],
      prepTimeMinutes: 0,
      cookTimeMinutes: 0,
      difficulty: 'Fácil',
      cuisine: 'Internacional',
      image: '',
      categoria: 'Entrantes'
    };

    this.ingredientesTexto = '';

    this.instruccionesTexto = '';

  }

}