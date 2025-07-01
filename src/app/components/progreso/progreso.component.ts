import { Component } from '@angular/core';

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  
  styleUrls: ['./progreso.component.scss'],
})
export class ProgresoComponent {
  progreso = [
    { actividad: 'Sumas', completado: '80%' },
    { actividad: 'Restas', completado: '60%' },
    { actividad: 'Multiplicaciones', completado: '30%' },
  ];
}
