import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IDocentes, IAlumno } from '../interfaces/interfaces';

@Component({
  selector: 'app-perfil-docente',
  templateUrl: './perfil-docente.page.html',
  styleUrls: ['./perfil-docente.page.scss'],
})


export class PerfilDocentePage implements OnInit {

  docente = {
    id:0,
    nombre: '',
    email:'',
    password:'', 
    role: 'Docente'
  }

  constructor(
    private menuController: MenuController,
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController,
  ) {}

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
    console.log('URL:', url);
  
    let arr = url.match(/\/perfil-docente\/(\d+)/);
    console.log('Array:', arr);
  
    let id = arr ? parseInt(arr[1]) : NaN;
    console.log('ID:', id);
  
    return id;
  }

  getUsuarioById(usuarioID:number){
    this.authService.BuscarUsuarioId(usuarioID).subscribe(
      (resp:any)=>{                 //resp llega en formato de arreglo de un objeto 
        this.docente={
          id: resp[0].id,
          nombre: resp[0].nombre,
          role: resp[0].role,
          password: resp[0].password,
          email: resp[0].email
        }
      }
    )
  }

 
}
  

  


 