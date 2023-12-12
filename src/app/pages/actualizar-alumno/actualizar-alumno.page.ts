import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IDocentes, IAlumno } from '../interfaces/interfaces';

interface Alumno {
  id: number;
  nombreCompleto: string;
  rut: string;
  email: string;
  password: string;
  sede: string;
  jornada: string;
}

@Component({
  selector: 'app-actualizar-alumno',
  templateUrl: './actualizar-alumno.page.html',
  styleUrls: ['./actualizar-alumno.page.scss'],
})
export class ActualizarAlumnoPage implements OnInit {

  alumno = {
    id:0,
    nombre: '',
    rut:'',
    email:'',
    password:'', 
    sede: '',
	  jornada: '',
    role: 'Alumno'
  }

  constructor(  private menuController: MenuController,
                private authService: AuthService,
                private router: Router,
                private alertController: AlertController,) { }

  ngOnInit() {
    
  }

  MostrarMenu() {
    this.menuController.open('first');
  }

  ionViewWillEnter(){
    this.getAlumnoById(this.getIdFromUrl());
  }

  getIdFromUrl() {
    let url = this.router.url;
    console.log('URL:', url);
  
    let arr = url.match(/\/actualizar-alumno\/(\d+)/);
    console.log('Array:', arr);
  
    let id = arr ? parseInt(arr[1]) : NaN;
    console.log('ID:', id);
  
    return id;
  }

  getAlumnoById(usuarioID: number) {
    this.authService.BuscarAlumnoId(usuarioID).subscribe(
      (resp: any) => {
        console.log('Respuesta del servidor:', resp);
  
        this.alumno = {
          id: resp[0].id,
          nombre: resp[0].nombre,
          rut: resp[0].rut,
          role: 'Alumno',
          password: resp[0].password,
          email: resp[0].email,
          sede: resp[0].sede,
          jornada: resp[0].jornada,
        };
  
        console.log('Estudiante actualizado:', this.alumno);
      }
    );
  }
  

  ActualizarAlumno() {
    
    console.log('Antes de la actualización:', this.alumno);
    this.authService.ActualizarAlumno(this.alumno).subscribe(() => {
      console.log('Datos actualizados:', this.alumno);
      this.mostrarMensaje();
  
      // Navega a la misma página de perfil-estudiante con el id actualizado
      this.router.navigateByUrl(`/perfil-estudiante/${this.alumno.id}`, { skipLocationChange: true }).then(() => {
        this.router.navigate([`/perfil-estudiante/${this.alumno.id}`]);
      });
    });
  }
  

  async mostrarMensaje() {
    const alerta = await this.alertController.create({
      header: 'Usuario Actualizado ',
      message: 'Su información se ha modificado ' + this.alumno.email,
      buttons: ['OK'],
    });
    alerta.present();
  }

}
