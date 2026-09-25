import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaListaComponent } from './receta-lista.component';

describe('RecetaListaComponent', () => {
  let component: RecetaListaComponent;
  let fixture: ComponentFixture<RecetaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecetaListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecetaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
