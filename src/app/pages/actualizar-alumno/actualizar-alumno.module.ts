import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarAlumnoPageRoutingModule } from './actualizar-alumno-routing.module';

import { ActualizarAlumnoPage } from './actualizar-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarAlumnoPageRoutingModule
  ],
  declarations: [ActualizarAlumnoPage]
})
export class ActualizarAlumnoPageModule {}
