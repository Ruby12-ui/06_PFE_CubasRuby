
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  correo = '';
  contrasena = '';
  mensajeError = '';
  mostrarContrasena = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  iniciarSesion(): void {
    this.mensajeError = '';

    if (!this.correo.trim() || !this.contrasena) {
      this.mensajeError = 'Completa todos los campos.';
      return;
    }

    const resultado = this.authService.login(
      this.correo.trim(),
      this.contrasena
    );

    if (resultado) {
      this.router.navigate(['/bienvenida']);
    } else {
      this.mensajeError = 'Correo electrónico o contraseña incorrectos.';
    }
  }
}
