import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './guards/autorizado.guard';
import { DocenteGuard } from './guards/docente.guard';
import { AlumnoGuard } from './guards/alumno.guard';
import { NouserGuard } from './guards/nouser.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [NouserGuard]
    
  },
  {
    path: 'informacion',
    loadChildren: () => import('./pages/informacion/informacion.module').then( m => m.InformacionPageModule),
    canActivate: [NouserGuard]
  },
  {
    path: 'feriados',
    loadChildren: () => import('./pages/feriados/feriados.module').then( m => m.FeriadosPageModule),
    canActivate: [DocenteGuard]
  },
  {
    path: 'perfil-docente/:id',
    loadChildren: () => import('./pages/perfil-docente/perfil-docente.module').then( m => m.PerfilDocentePageModule),
    canActivate: [DocenteGuard]
  },
  {
    path: 'registro-docentes',
    loadChildren: () => import('./pages/registro-docentes/registro-docentes.module').then( m => m.RegistroDocentesPageModule),
    canActivate: [NouserGuard]
  },
  {
    path: 'registro-general',
    loadChildren: () => import('./pages/registro-general/registro-general.module').then( m => m.RegistroGeneralPageModule),
    canActivate: [NouserGuard]
  },
  {
    path: 'registro-estudiante',
    loadChildren: () => import('./pages/registro-estudiante/registro-estudiante.module').then( m => m.RegistroEstudiantePageModule),
    canActivate: [NouserGuard]
  },
  {
    path: 'perfil-estudiante/:id',
    loadChildren: () => import('./pages/perfil-estudiante/perfil-estudiante.module').then( m => m.PerfilEstudiantePageModule),
    canActivate: [AlumnoGuard]
  },
  {
    path: 'login-alumno',
    loadChildren: () => import('./pages/login-alumno/login-alumno.module').then( m => m.LoginAlumnoPageModule),
    canActivate: [NouserGuard]
  },
  {
    path: 'login-docente',
    loadChildren: () => import('./pages/login-docente/login-docente.module').then( m => m.LoginDocentePageModule),
    canActivate: [NouserGuard]
  },
  {
    path: 'inicio-docente',
    loadChildren: () => import('./pages/inicio-docente/inicio-docente.module').then( m => m.InicioDocentePageModule),
    canActivate: [DocenteGuard]
  },
  {
    path: 'inicio-estudiante',
    loadChildren: () => import('./pages/inicio-estudiante/inicio-estudiante.module').then( m => m.InicioEstudiantePageModule),
    canActivate: [AlumnoGuard]
  },
  {
    path: 'feriados-alumnos',
    loadChildren: () => import('./pages/feriados-alumnos/feriados-alumnos.module').then( m => m.FeriadosAlumnosPageModule),
    canActivate: [AlumnoGuard]
  },
  {
    path: 'escanear-qr',
    loadChildren: () => import('./pages/escanear-qr/escanear-qr.module').then( m => m.EscanearQrPageModule),
    canActivate: [AlumnoGuard]
  },
  {
    path: 'qr-generar',
    loadChildren: () => import('./pages/qr-generar/qr-generar.module').then( m => m.QrGenerarPageModule),
    canActivate: [DocenteGuard]
  },
  {
    path: 'actualizar-docente/:id',
    loadChildren: () => import('./pages/actualizar-docente/actualizar-docente.module').then( m => m.ActualizarDocentePageModule)
  },
  {
    path: 'actualizar-alumno/:id',
    loadChildren: () => import('./pages/actualizar-alumno/actualizar-alumno.module').then( m => m.ActualizarAlumnoPageModule)
  },
  {
    path: 'listar-qr',
    loadChildren: () => import('./pages/listar-qr/listar-qr.module').then( m => m.ListarQrPageModule),
    canActivate: [DocenteGuard]
  },
  {
    path: 'detalle-qr',
    loadChildren: () => import('./pages/detalle-qr/detalle-qr.module').then( m => m.DetalleQrPageModule),
    canActivate: [DocenteGuard]
  },


  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
