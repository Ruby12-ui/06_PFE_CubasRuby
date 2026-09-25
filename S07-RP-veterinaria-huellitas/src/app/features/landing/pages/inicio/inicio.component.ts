import { Component } from '@angular/core';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServiciosComponent } from '../../components/servicios/servicios.component';
import { NosotrosComponent } from '../../components/nosotros/nosotros.component';
import { EspecialistasComponent } from '../../components/especialistas/especialistas.component';
import { ContactoComponent } from '../../components/contacto/contacto.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ServiciosComponent,
    NosotrosComponent,
    EspecialistasComponent,
    ContactoComponent,
    FooterComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
}