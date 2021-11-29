import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BanderaGuard } from './services/bandera.guard';
//import { NoIngresadoGuard, } from './no-ingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
    ,canActivate: [BanderaGuard]   
    
    
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
    ,canActivate: [BanderaGuard]
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
    ,canActivate: [BanderaGuard]
  },
  {
    path: 'task',
    loadChildren: () => import('./task/task.module').then( m => m.TaskPageModule)
    ,canActivate: [BanderaGuard]
  },
  {
    path: 'input',
    loadChildren: () => import('./pages/input/input.module').then( m => m.InputPageModule)
    ,canActivate: [BanderaGuard]
  },
  {
    path: 'autos',
    loadChildren: () => import('./pages/autos/autos.module').then( m => m.AutosPageModule)
    ,canActivate: [BanderaGuard]
  },
  {
    path: 'contaminacion',
    loadChildren: () => import('./pages/contaminacion/contaminacion.module').then( m => m.ContaminacionPageModule)
    ,canActivate: [BanderaGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'compensacion',
    loadChildren: () => import('./pages/compensacion/compensacion.module').then( m => m.CompensacionPageModule)
    ,canActivate: [BanderaGuard]
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then( m => m.NoticiasPageModule)
    ,canActivate: [BanderaGuard]
  },
  {
    path: 'datos',
    loadChildren: () => import('./pages/datos/datos.module').then( m => m.DatosPageModule)
    ,canActivate: [BanderaGuard]
  },
  {
    path: 'modificar',
    loadChildren: () => import('./pages/modificar/modificar.module').then( m => m.ModificarPageModule)
    ,canActivate: [BanderaGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
        
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
