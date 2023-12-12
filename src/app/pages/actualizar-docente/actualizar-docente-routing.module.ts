import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarDocentePage } from './actualizar-docente.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarDocentePageRoutingModule {}
