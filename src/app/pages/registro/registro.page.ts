import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  standalone: false, // Este componente no es standalone
  styleUrls: ['./registro.page.scss']
})
export class RegistroPage {
  usuario: string = '';
  clave: string = '';

  constructor(
    private dbService: DatabaseService,
    private alertCtrl: AlertController,
    private router: Router
  ) {}

  async registrar() {
    const claveNumero = parseInt(this.clave, 10);

    if (!this.usuario || isNaN(claveNumero) || this.clave.length < 4) {
      this.presentAlert('Datos inválidos', 'Ingresa un usuario y una clave numérica de al menos 4 dígitos.');
      return;
    }

    const exito = await this.dbService.register(this.usuario, claveNumero);

    if (exito) {
      this.presentAlert('Registro exitoso', 'El usuario se registró correctamente.');
      this.router.navigate(['/login']);
    } else {
      this.presentAlert('Error', 'No se pudo registrar el usuario.');
    }
  }

  limpiar() {
    this.usuario = '';
    this.clave = '';
  }

  async presentAlert(titulo: string, mensaje: string) {
    const alert = await this.alertCtrl.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
