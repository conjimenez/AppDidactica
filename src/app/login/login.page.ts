import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false, // Este componente no es standalone
})
export class LoginPage {
  usuario: string = '';
  password: string = '';

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) {}

  login() {
    if (
      this.usuario.length >= 3 &&
      this.usuario.length <= 8 &&
      /^[0-9]{4}$/.test(this.password)
    ) {
      this.navCtrl.navigateForward(['/home'], {
        queryParams: { usuario: this.usuario }
      });
      localStorage.setItem('usuario', this.usuario);

    } else {
      this.presentAlert(
        'Datos inválidos',
        'Usuario: entre 3 y 8 caracteres.\nContraseña: exactamente 4 números.'
      );
    }
  }

  async presentAlert(titulo: string, mensaje: string) {
    const alert = await this.alertCtrl.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }
}