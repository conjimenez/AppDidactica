import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private key = 'fotosGuardadas';

  async guardarFoto(dataUrl: string, instruccion: string) {
    const fotos = await this.obtenerFotos();
    fotos.push({
      fecha: new Date().toISOString(),
      instruccion,
      imagen: dataUrl
    });
    await Preferences.set({
      key: this.key,
      value: JSON.stringify(fotos)
    });
  }

  async obtenerFotos(): Promise<any[]> {
    const { value } = await Preferences.get({ key: this.key });
    return value ? JSON.parse(value) : [];
  }

  async limpiarFotos() {
    await Preferences.remove({ key: this.key });
  }
}
