import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleQrPageRoutingModule } from './detalle-qr-routing.module';

import { DetalleQrPage } from './detalle-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleQrPageRoutingModule
  ],
  declarations: [DetalleQrPage]
})
export class DetalleQrPageModule {}
