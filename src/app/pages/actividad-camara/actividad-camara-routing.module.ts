import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActividadCamaraPage } from './actividad-camara.page';

const routes: Routes = [
  {
    path: '',
    component: ActividadCamaraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActividadCamaraPageRoutingModule {}
