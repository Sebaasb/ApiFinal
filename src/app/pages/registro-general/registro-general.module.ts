import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroGeneralPageRoutingModule } from './registro-general-routing.module';

import { RegistroGeneralPage } from './registro-general.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroGeneralPageRoutingModule
  ],
  declarations: [RegistroGeneralPage]
})
export class RegistroGeneralPageModule {}
