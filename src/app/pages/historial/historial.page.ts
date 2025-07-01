import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  standalone: false,
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  fotos: any[] = [];

  constructor(private storageService: StorageService) {}

  async ngOnInit() {
    this.fotos = await this.storageService.obtenerFotos();
  }

  async limpiarHistorial() {
    await this.storageService.limpiarFotos();
    this.fotos = [];
  }
}
