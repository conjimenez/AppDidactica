import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  standalone: false, // Este componente no es standalone
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  nombre: string = '';
  apellido: string = '';
  nivelEducacion: string = '';
  fechaNacimiento: string = '';
  segmentValue: string = 'instrucciones';
  usuario: string = 'Estudiante';

  constructor(private route: ActivatedRoute, private router: Router) {
    // Tomar parámetro de la URL
    this.route.queryParams.subscribe(params => {
      if (params['usuario']) {
        this.usuario = params['usuario'];
        localStorage.setItem('usuario', this.usuario);
      } else {
        // Si no viene en la URL, revisar si está guardado
        const guardado = localStorage.getItem('usuario');
        if (guardado) {
          this.usuario = guardado;
        }
      }
    });
  }

  limpiar() {
    this.nombre = '';
    this.apellido = '';
    this.nivelEducacion = '';
    this.fechaNacimiento = '';
  }

  mostrarInfo() {
    console.log('Nombre:', this.nombre);
    console.log('Apellido:', this.apellido);
    console.log('Nivel de educación:', this.nivelEducacion);
    console.log('Fecha de nacimiento:', this.fechaNacimiento);
  }

  irAlLogin() {
    this.router.navigate(['/login']);
  }
}
