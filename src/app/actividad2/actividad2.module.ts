import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Actividad2PageRoutingModule } from './actividad2-routing.module';

import { Actividad2Page } from './actividad2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Actividad2PageRoutingModule
  ],
  declarations: [Actividad2Page]
})
export class Actividad2PageModule {}
