import { Component, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage {
  usuario: string = '';
  nombre: string = '';
  apellido: string = '';
  nivelEducacion: string = '';
  fechaNacimiento: Date | null = null;

  constructor(
    private route: ActivatedRoute,
    private alertCtrl: AlertController,
    private renderer: Renderer2,
    private navCtrl: NavController
  ) {
    this.route.queryParams.subscribe((params: any) => {
      this.usuario = params['usuario'] || 'Invitado';
    });
  }

  async mostrarInfo() {
    const mensaje = `Nombre: ${this.nombre}
    Apellido: ${this.apellido}
    Nivel: ${this.nivelEducacion}
    Fecha de Nacimiento: ${this.fechaNacimiento ? this.fechaNacimiento.toLocaleDateString() : 'No definida'}`;

    const alert = await this.alertCtrl.create({
      header: 'Datos Ingresados',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }
  
  irAlLogin() {
    this.navCtrl.navigateRoot('/login');
  }

  limpiar() {
    this.nombre = '';
    this.apellido = '';
    this.nivelEducacion = '';
    this.fechaNacimiento = null;

    const nombreInput = document.querySelector('.nombre-input');
    const apellidoInput = document.querySelector('.apellido-input');

    if (nombreInput) {
      this.renderer.addClass(nombreInput, 'animated');
      setTimeout(() => this.renderer.removeClass(nombreInput, 'animated'), 1000);
    }

    if (apellidoInput) {
      this.renderer.addClass(apellidoInput, 'animated');
      setTimeout(() => this.renderer.removeClass(apellidoInput, 'animated'), 1000);
    }
  }
}