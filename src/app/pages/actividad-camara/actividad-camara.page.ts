import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-actividad-camara',
  templateUrl: './actividad-camara.page.html',
  standalone: false,
  styleUrls: ['./actividad-camara.page.scss'],
})
export class ActividadCamaraPage {
  instrucciones = [
    'Toma una foto de algo de color rojo',
    'Toma una foto de un objeto con forma de círculo',
    'Toma una foto de un número',
    'Toma una foto de un animal de peluche',
    'Toma una foto de algo que empiece con la letra M'
  ];
  instruccion: string;
  photo: string | null = null;

  constructor(private storageService: StorageService) {
    this.instruccion = this.obtenerInstruccionAleatoria();
  }

  obtenerInstruccionAleatoria(): string {
    const indice = Math.floor(Math.random() * this.instrucciones.length);
    return this.instrucciones[indice];
  }

async tomarFoto() {
  try {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    this.photo = image.dataUrl || null;

    if (this.photo) {
      await this.storageService.guardarFoto(this.photo, this.instruccion);
      console.log('Foto guardada correctamente');
    }
  } catch (error) {
    console.error('Error tomando foto', error);
  }
}

}
