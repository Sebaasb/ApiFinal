import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeriadosAlumnosPage } from './feriados-alumnos.page';

const routes: Routes = [
  {
    path: '',
    component: FeriadosAlumnosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeriadosAlumnosPageRoutingModule {}
