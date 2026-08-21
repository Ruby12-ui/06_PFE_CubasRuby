import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  menuOpen = false;

  habilidades = [
    {
      nombre: 'Angular',
      icono: '🅰️',
      porcentaje: 80
    },
    {
      nombre: 'Java',
      icono: '☕',
      porcentaje: 75
    },
    {
      nombre: 'Python',
      icono: '🐍',
      porcentaje: 78
    },
    {
      nombre: 'HTML',
      icono: '🌐',
      porcentaje: 90
    },
    {
      nombre: 'MySQL',
      icono: '🗄️',
      porcentaje: 75
    },
    {
      nombre: 'CSS',
      icono: '🎨',
      porcentaje: 85
    }
  ];

  proyectos = [
    {
      numero: '01',
      icono: '🍎',
      titulo: 'Página Web de la Granada',
      descripcion:
        'Página web desarrollada para presentar productos relacionados con la granada, utilizando una interfaz visual organizada y atractiva.',
      tecnologias: ['HTML', 'CSS', 'JavaScript']
    },
    {
      numero: '02',
      icono: '💻',
      titulo: 'Proyecto desarrollado en IntelliJ',
      descripcion:
        'Proyecto académico desarrollado utilizando IntelliJ IDEA, aplicando programación y conceptos de desarrollo de software.',
      tecnologias: ['Java', 'IntelliJ IDEA', 'POO']
    },
    {
      numero: '03',
      icono: '📋',
      titulo: 'Formulario conectado a Excel',
      descripcion:
        'Sistema de formulario para registrar información y trabajar con los datos almacenados en un archivo de Excel.',
      tecnologias: ['HTML', 'CSS', 'Excel']
    }
  ];

  abrirMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  cerrarMenu(): void {
    this.menuOpen = false;
  }

  irA(seccion: string): void {
    document.getElementById(seccion)?.scrollIntoView({
      behavior: 'smooth'
    });

    this.cerrarMenu();
  }
}