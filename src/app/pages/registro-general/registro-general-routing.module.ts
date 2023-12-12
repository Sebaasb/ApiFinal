import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroGeneralPage } from './registro-general.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroGeneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroGeneralPageRoutingModule {}
