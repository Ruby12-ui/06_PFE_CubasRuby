import { Component } from '@angular/core';
import { InicioComponent } from './features/landing/pages/inicio/inicio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InicioComponent],
  template: `
    <app-inicio></app-inicio>
  `,
  styles: []
})
export class AppComponent {

}