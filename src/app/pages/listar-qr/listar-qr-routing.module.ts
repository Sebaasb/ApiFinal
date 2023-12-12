import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarQrPage } from './listar-qr.page';

const routes: Routes = [
  {
    path: '',
    component: ListarQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarQrPageRoutingModule {}
