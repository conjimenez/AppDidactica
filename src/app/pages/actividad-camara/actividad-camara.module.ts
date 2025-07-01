import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActividadCamaraPageRoutingModule } from './actividad-camara-routing.module';

import { ActividadCamaraPage } from './actividad-camara.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActividadCamaraPageRoutingModule
  ],
  declarations: [ActividadCamaraPage]
})
export class ActividadCamaraPageModule {}
