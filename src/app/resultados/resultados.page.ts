import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
  standalone: false,
})
export class ResultadosPage implements OnInit {
  actividad1: number = 0;
  actividad2: number = 0;

  constructor(private route: ActivatedRoute) {}
ngOnInit() {
  const puntos1 = localStorage.getItem('puntajeActividad1');
  const puntos2 = localStorage.getItem('puntajeActividad2');

  this.actividad1 = puntos1 ? parseInt(puntos1, 10) : 0;
  this.actividad2 = puntos2 ? parseInt(puntos2, 10) : 0;
}
reiniciarPuntajes() {
  localStorage.removeItem('puntajeActividad1');
  localStorage.removeItem('puntajeActividad2');
  this.actividad1 = 0;
  this.actividad2 = 0;        
}
  volverAlHome() {
    window.location.href = '/home';
  }
}
