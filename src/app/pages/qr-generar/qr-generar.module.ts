import { NgModule } from '@angular/core';
import { CommonModule,DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrGenerarPageRoutingModule } from './qr-generar-routing.module';

import { QrGenerarPage } from './qr-generar.page';
import {QRCodeModule} from 'angularx-qrcode'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrGenerarPageRoutingModule,
    QRCodeModule,
  ],
  declarations: [QrGenerarPage],
  providers: [DatePipe],
})
export class QrGenerarPageModule {}
