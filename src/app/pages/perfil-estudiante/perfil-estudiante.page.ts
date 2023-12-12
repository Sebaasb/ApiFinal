import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IDocentes, IAlumno } from '../interfaces/interfaces';


@Component({
  selector: 'app-perfil-estudiante',
  templateUrl: './perfil-estudiante.page.html',
  styleUrls: ['./perfil-estudiante.page.scss'],
})

export class PerfilEstudiantePage implements OnInit {

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
  
    let arr = url.match(/\/perfil-estudiante\/(\d+)/);
    console.log('Array:', arr);
  
    let id = arr ? parseInt(arr[1]) : NaN;
    console.log('ID:', id);
  
    return id;
  }

  getAlumnoById(usuarioID: number) {
    this.authService.BuscarAlumnoId(usuarioID).subscribe(
      (resp: any) => {
        console.log('Respuesta del servidor:', resp);
  
        // Asegúrate de que la propiedad 'nombreCompleto' exista en la respuesta
        if (resp[0].nombre) {
          this.alumno = {
            id: resp[0].id,
            nombre: resp[0].nombre, // Utiliza 'nombreCompleto' en lugar de 'nombre'
            rut: resp[0].rut,
            role: 'Alumno', // Puedes asignar un valor fijo o buscar en la respuesta del servidor
            password: resp[0].password,
            email: resp[0].email,
            sede: resp[0].sede,
            jornada: resp[0].jornada,
          };
  
          console.log('Estudiante actualizado:', this.alumno);
        }
      }
    );
  }
  
  
  

 
}
