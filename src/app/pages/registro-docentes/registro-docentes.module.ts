import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroDocentesPageRoutingModule } from './registro-docentes-routing.module';

import { RegistroDocentesPage } from './registro-docentes.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegistroDocentesPageRoutingModule
  ],
  declarations: [RegistroDocentesPage]
})
export class RegistroDocentesPageModule {}
