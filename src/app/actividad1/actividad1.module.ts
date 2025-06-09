import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Actividad1PageRoutingModule } from './actividad1-routing.module';

import { Actividad1Page } from './actividad1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Actividad1PageRoutingModule
  ],
  declarations: [Actividad1Page]
})
export class Actividad1PageModule {}
