import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroEstudiantePageRoutingModule } from './registro-estudiante-routing.module';

import { RegistroEstudiantePage } from './registro-estudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroEstudiantePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistroEstudiantePage]
})
export class RegistroEstudiantePageModule {}
