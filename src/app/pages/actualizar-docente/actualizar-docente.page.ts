import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

interface Asignatura {
  nombreAsignatura: string;
  seccion: string;
  horasSemanales: string;
  año: string;
  semestre: string;
}

@Component({
  selector: 'app-actualizar-docente',
  templateUrl: './actualizar-docente.page.html',
  styleUrls: ['./actualizar-docente.page.scss'],
})
export class ActualizarDocentePage implements OnInit {

  docente = {
    id: 0,
    nombre: '',
    email: '',
    password: '',
    role: 'Docente',
    Asignaturas: [] as Asignatura[], // Tipo explícito para Asignaturas
  };

  constructor( private menuController: MenuController,
               private authService: AuthService,
               private router: Router, 
               private alertcontroller: AlertController) { }

  ngOnInit() {
  }

  MostrarMenu() {
    this.menuController.open('first');
  }

  ionViewWillEnter(){
    this.getUsuarioById(this.getIdFromUrl());
  }

  getIdFromUrl() {
    let url = this.router.url;
    let arr = url.match(/\/actualizar-docente\/(\d+)/);
    let id = arr ? parseInt(arr[1]) : NaN;
    return id;
  }

  getUsuarioById(usuarioID: number) {
    this.authService.BuscarUsuarioId(usuarioID).subscribe(
      (resp: any) => {
        console.log('Respuesta del servidor en getUsuarioById:', resp); // Agrega este log
        this.docente = {
          id: resp[0].id,
          nombre: resp[0].nombre, // Asegúrate de que 'nombre' esté definido en la respuesta
          role: 'Docente',
          password: resp[0].password,
          email: resp[0].email,
          Asignaturas: resp[0].Asignaturas || [],
        };
  
        console.log('Docente actualizado en getUsuarioById:', this.docente);
      }
    );
  }

  ActualizarUsuario() {
    this.authService.ActualizarUsuario(this.docente).subscribe(() => {
      this.mostrarMensaje();
  
      // Después de actualizar, volver a cargar la información del docente
      this.getUsuarioById(this.docente.id);
  
      // Navega a la misma página de perfil-docente con el id actualizado
      this.router.navigateByUrl(`/perfil-docente/${this.docente.id}`, { skipLocationChange: true }).then(() => {
        this.router.navigate([`/perfil-docente/${this.docente.id}`]);
      });
    });
  }

  async mostrarMensaje() {
    const alerta = await this.alertcontroller.create({
      header: 'Usuario Actualizado ',
      message: 'Su información se ha modificado ' + this.docente.email,
      buttons: ['OK'],
    });
    alerta.present();
  }
}


