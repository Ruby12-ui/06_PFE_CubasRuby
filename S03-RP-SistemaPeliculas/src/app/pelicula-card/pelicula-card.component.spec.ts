import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeliculaCardComponent } from './pelicula-card.component';

describe('PeliculaCardComponent', () => {
  let component: PeliculaCardComponent;
  let fixture: ComponentFixture<PeliculaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculaCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PeliculaCardComponent);
    component = fixture.componentInstance;

    component.pelicula = {
      id: 1,
      titulo: 'Avengers: Endgame',
      genero: 'Acción',
      director: 'Anthony Russo y Joe Russo',
      anio: 2019,
      duracion: 181,
      descripcion: 'Los Vengadores se enfrentan a Thanos.',
      imagen: 'https://example.com/imagen.jpg'
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});