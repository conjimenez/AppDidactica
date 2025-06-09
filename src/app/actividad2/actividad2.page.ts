import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-actividad2',
  templateUrl: './actividad2.page.html',
  styleUrls: ['./actividad2.page.scss'],
  standalone: false,
})
export class Actividad2Page implements OnInit {
  numeroA: number = 0;
  numeroB: number = 0;
  resultado: string = '';

  constructor(private navCtrl: NavController) {} // ✅ Constructor declarado correctamente

  ngOnInit() {
    this.generarNumeros();
  }

  generarNumeros() {
    this.numeroA = Math.floor(Math.random() * 100);
    this.numeroB = Math.floor(Math.random() * 100);
    this.resultado = '';
  }

  verificar(eleccion: number) {
    const mayor = this.numeroA > this.numeroB ? this.numeroA : this.numeroB;
    if (eleccion === mayor) {
      this.resultado = '¡Muy bien!';
    } else {
      this.resultado = 'Ups, intenta de nuevo.';
    }
  }

  volverAlHome() {
    this.navCtrl.navigateRoot('/home'); // ✅ Ahora sí existe este método
  }
}