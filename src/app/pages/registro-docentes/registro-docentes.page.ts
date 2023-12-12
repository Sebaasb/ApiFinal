import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; 
import { IDocente, IDocentes } from '../interfaces/interfaces';
import { Asignatura } from '../interfaces/interfaces';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-docentes',
  templateUrl: './registro-docentes.page.html',
  styleUrls: ['./registro-docentes.page.scss'],
})
export class RegistroDocentesPage implements OnInit {

  registroDocente: FormGroup; 
  userdata: any;

  newDocente: IDocente={
    nombre: "",
    email: "",
    password: "",
    asignaturas: []
   

  }

  constructor(private menuController: MenuController,
              private apicrud: ApiCrudService, 
              private authService: AuthService,
              private alertController: AlertController,
              private formBuilder: FormBuilder,
              private http: HttpClient,
              private router: Router) {
    this.registroDocente = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      asignaturas: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    const asignaturas = this.registroDocente.get('asignaturas') as FormArray;
    for (let index = 0; index < 1; index++) {
      asignaturas.push(
        this.formBuilder.group({
          nombreAsignatura: ['', [Validators.required, Validators.minLength(6)]],
          seccion: ['', [Validators.required, Validators.minLength(3)]],
          horas: ['', [Validators.required, Validators.minLength(1)]],
          año: ['', [Validators.required, Validators.minLength(4)]],
          semestre: ['', [Validators.required, Validators.minLength(5)]],
        })
      );
    }
  }

  get asignaturaControls() {
    return (this.registroDocente.get('asignaturas') as FormArray).controls;
  }

  agregarAsignatura() {
    const asignaturas = this.registroDocente.get('asignaturas') as FormArray;
    asignaturas.push(
      this.formBuilder.group({
        nombreAsignatura: ['', [Validators.required, Validators.minLength(6)]],
        seccion: ['', [Validators.required, Validators.minLength(3)]],
        horas: ['', [Validators.required, Validators.minLength(1)]],
        año: ['', [Validators.required, Validators.minLength(4)]],
        semestre: ['', [Validators.required, Validators.minLength(5)]],
      })
    );
  }



  crearDocente() {
    if (this.registroDocente.valid) {
      // Implementar la verificación de duplicidad, en caso de que ya exista, mostrar un mensaje
      this.authService.GetUserById(this.registroDocente.value.email).subscribe(resp => {
        this.userdata = resp;
        if (this.userdata.length > 0) {
          this.registroDocente.reset();
          this.errorDuplicidad();
        } else {
          // Crear el docente y mostrar mensaje de éxito
          this.apicrud.CrearDocente(this.registroDocente.value).subscribe(response => {
            console.log(response);
            this.mostrarMensaje('Docente creado exitosamente');
            this.registroDocente.reset();
            this.router.navigateByUrl('/login-docente');
          });
        }
      });
    }
  }
  
  
  
  async errorDuplicidad(){
    const alerta = await this.alertController.create({
      header: 'Error..',
      message: 'El docente ya existe',
      buttons: ['OK']
    });
    alerta.present();
  }

  async mostrarMensaje(mensaje: string) {
    const alerta = await this.alertController.create({
      header: 'Mensaje',
      message: mensaje,
      buttons: ['OK']
    });
    alerta.present();
  }

  MostrarMenu() {
    this.menuController.open('first');
  }
}







