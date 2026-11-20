
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly correoCorrecto = 'admin@restaurant.com';
  private readonly contrasenaCorrecta = 'Admin123*';

  login(correo: string, contrasena: string): boolean {
    if (
      correo === this.correoCorrecto &&
      contrasena === this.contrasenaCorrecta
    ) {
      localStorage.setItem('usuarioAutenticado', 'true');
      localStorage.setItem('correoUsuario', correo);
      return true;
    }

    return false;
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('usuarioAutenticado') === 'true';
  }

  getUsuario(): string | null {
    return localStorage.getItem('correoUsuario');
  }

  logout(): void {
    localStorage.removeItem('usuarioAutenticado');
    localStorage.removeItem('correoUsuario');
  }
}
