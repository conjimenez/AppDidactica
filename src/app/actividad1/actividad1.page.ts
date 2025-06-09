import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-actividad1',
  templateUrl: './actividad1.page.html',
  styleUrls: ['./actividad1.page.scss'],
  standalone: false,
})
export class Actividad1Page implements OnInit {
  numero1: number = 0;
  numero2: number = 0;
  opciones: number[] = [];
  mensaje: string = '';
  puntaje: number = 0;  // ✅ Puntaje acumulado

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    this.generarPregunta();
  }

  generarPregunta() {
    this.numero1 = Math.floor(Math.random() * 10);
    this.numero2 = Math.floor(Math.random() * 10);
    const correcta = this.numero1 + this.numero2;

    this.opciones = [
      correcta,
      correcta + 1,
      correcta - 1,
      correcta + 2
    ].sort(() => Math.random() - 0.5);

    this.mensaje = '';
  }

  verificarRespuesta(opcion: number) {
    const correcta = this.numero1 + this.numero2;
    if (opcion === correcta) {
      this.mensaje = '¡Correcto!';
      localStorage.setItem('puntajeActividad2', '1'); // ✅ Guardar puntaje
      this.puntaje++;
    } else {
      this.mensaje = 'Incorrecto, intenta otra vez.';
    }
  }

  irAResultados() {
    this.navCtrl.navigateForward('/resultados', {
      queryParams: {
        actividad1: this.puntaje
      }
    });
  }

  volverAlHome() {
    this.navCtrl.navigateRoot('/home');
  }
 
}
