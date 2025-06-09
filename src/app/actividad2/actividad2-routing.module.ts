import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Actividad2Page } from './actividad2.page';

const routes: Routes = [
  {
    path: '',
    component: Actividad2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Actividad2PageRoutingModule {}
