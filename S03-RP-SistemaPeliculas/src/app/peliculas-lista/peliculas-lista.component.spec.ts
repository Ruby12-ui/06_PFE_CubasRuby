import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeliculasListaComponent } from './peliculas-lista.component';

describe('PeliculasListaComponent', () => {
  let component: PeliculasListaComponent;
  let fixture: ComponentFixture<PeliculasListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculasListaComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PeliculasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have movies', () => {
    expect(component.peliculas.length).toBeGreaterThan(0);
  });

  it('should delete a movie', () => {
    const cantidadInicial = component.peliculas.length;

    component.eliminarPelicula(1);

    expect(component.peliculas.length).toBe(cantidadInicial - 1);
  });
});