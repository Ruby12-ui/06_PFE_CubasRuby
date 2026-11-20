
import { Component } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { Sidebar } from './components/sidebar/sidebar';
import { Header } from './components/header/header';
import { AuthService } from './services/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Sidebar, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  mostrarDashboard = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.actualizarVista();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.actualizarVista());
  }

  private actualizarVista(): void {
  this.mostrarDashboard =
    this.authService.isAuthenticated() &&
    !this.router.url.startsWith('/login') &&
    !this.router.url.startsWith('/bienvenida');
  }
}
