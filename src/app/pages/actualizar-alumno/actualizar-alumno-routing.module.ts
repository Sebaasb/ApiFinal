import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarAlumnoPage } from './actualizar-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarAlumnoPageRoutingModule {}
