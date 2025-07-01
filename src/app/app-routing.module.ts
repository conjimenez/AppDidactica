import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'actividad1',
    loadChildren: () => import('./actividad1/actividad1.module').then(m => m.Actividad1PageModule)
  },
  {
    path: 'actividad2',
    loadChildren: () => import('./actividad2/actividad2.module').then(m => m.Actividad2PageModule)
  },
  {
    path: 'resultados',
    loadChildren: () => import('./resultados/resultados.module').then(m => m.ResultadosPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'api-test',
    loadChildren: () => import('./pages/api-test/api-test.module').then( m => m.ApiTestPageModule)
  },
  {
    path: 'json-placeholder',
    loadChildren: () => import('./pages/json-placeholder/json-placeholder.module').then( m => m.JsonPlaceholderPageModule)
  },
  {
    path: 'actividad-camara',
    loadChildren: () => import('./pages/actividad-camara/actividad-camara.module').then( m => m.ActividadCamaraPageModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./pages/historial/historial.module').then( m => m.HistorialPageModule)
  },
  
  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}