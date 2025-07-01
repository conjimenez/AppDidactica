import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { InstruccionesComponent } from './instrucciones/instrucciones.component';
import { ProgresoComponent } from './progreso/progreso.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';

@NgModule({
  declarations: [
    InstruccionesComponent,
    ProgresoComponent,
    RecomendacionesComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    InstruccionesComponent,
    ProgresoComponent,
    RecomendacionesComponent
  ]
})
export class ComponentsModule { }
