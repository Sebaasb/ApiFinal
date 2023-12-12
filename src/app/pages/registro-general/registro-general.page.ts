import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-general',
  templateUrl: './registro-general.page.html',
  styleUrls: ['./registro-general.page.scss'],
})
export class RegistroGeneralPage implements OnInit {

  constructor(private menuController: MenuController,
              private alertController: AlertController,
              private router: Router) { }

  ngOnInit() {
  }

  MostrarMenu(){
    this.menuController.open('first');
  }

  async MostrarMensaje() {
    const alert = await this.alertController.create({
      header: 'Gracias!',
      message: 'Se ha registrado correctamente!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  registrarDocente() {
    this.router.navigate(['/registro-docente']);

  }

  registrarEstudiante() {
    this.router.navigate(['/registro-estudiante']);

  }

}