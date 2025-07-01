import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  standalone: false,
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Aquí NO navegues a ninguna ruta
    });
  }
}
