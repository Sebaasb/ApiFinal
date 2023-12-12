import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeriadosAlumnosPageRoutingModule } from './feriados-alumnos-routing.module';

import { FeriadosAlumnosPage } from './feriados-alumnos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeriadosAlumnosPageRoutingModule
  ],
  declarations: [FeriadosAlumnosPage]
})
export class FeriadosAlumnosPageModule {}
