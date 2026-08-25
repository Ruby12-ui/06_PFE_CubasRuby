import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-pelicula-formulario',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './pelicula-formulario.component.html',
  styleUrl: './pelicula-formulario.component.css'
})
export class PeliculaFormularioComponent implements OnInit {

  formulario!: FormGroup;

  editando = false;
  idPelicula: number | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.formulario = this.fb.group({
      titulo: ['', [
        Validators.required,
        Validators.minLength(2)
      ]],

      genero: ['', Validators.required],

      director: ['', Validators.required],

      anio: ['', [
        Validators.required,
        Validators.min(1900),
        Validators.max(2026)
      ]],

      duracion: ['', [
        Validators.required,
        Validators.min(1)
      ]],

      descripcion: ['', [
        Validators.required,
        Validators.minLength(10)
      ]],

      imagen: ['', Validators.required]
    });

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.editando = true;
      this.idPelicula = Number(id);
    }
  }

  guardar(): void {

    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    console.log('Película guardada:', this.formulario.value);

    alert(
      this.editando
        ? 'Película actualizada correctamente'
        : 'Película registrada correctamente'
    );

    this.router.navigate(['/peliculas']);
  }

}