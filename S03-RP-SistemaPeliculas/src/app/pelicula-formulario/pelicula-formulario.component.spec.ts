import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { PeliculaFormularioComponent } from './pelicula-formulario.component';

describe('PeliculaFormularioComponent', () => {
  let component: PeliculaFormularioComponent;
  let fixture: ComponentFixture<PeliculaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculaFormularioComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => null
              }
            },
            params: of({})
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PeliculaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form', () => {
    expect(component.formulario).toBeTruthy();
  });

  it('should have an invalid form initially', () => {
    expect(component.formulario.invalid).toBeTrue();
  });
});