import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarDocentePageRoutingModule } from './actualizar-docente-routing.module';

import { ActualizarDocentePage } from './actualizar-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarDocentePageRoutingModule
  ],
  declarations: [ActualizarDocentePage]
})
export class ActualizarDocentePageModule {}
