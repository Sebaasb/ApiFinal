import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarQrPageRoutingModule } from './listar-qr-routing.module';

import { ListarQrPage } from './listar-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarQrPageRoutingModule
  ],
  declarations: [ListarQrPage]
})
export class ListarQrPageModule {}
