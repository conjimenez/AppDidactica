import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
   
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
     path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'actividad1',
    loadChildren: () => import('./actividad1/actividad1.module').then( m => m.Actividad1PageModule)
  },
  {
    path: 'actividad2',
    loadChildren: () => import('./actividad2/actividad2.module').then( m => m.Actividad2PageModule)
  },
  {
    path: 'resultados',
    loadChildren: () => import('./resultados/resultados.module').then( m => m.ResultadosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
