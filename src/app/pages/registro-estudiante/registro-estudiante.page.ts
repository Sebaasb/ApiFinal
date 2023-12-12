import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAlumno } from '../interfaces/interfaces';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'app-registro-estudiante',
  templateUrl: './registro-estudiante.page.html',
  styleUrls: ['./registro-estudiante.page.scss'],
})
export class RegistroEstudiantePage implements OnInit {

  registroEstudianteForm : FormGroup;
  userdata: any;

  newEstudiante: IAlumno={
    nombre: "",
    rut: "",
    email: "",
    password: "",
    sede: "",
    jornada: "",

  }

  constructor(private apiCrud: ApiCrudService, 
              private authService: AuthService,
              private alertController: AlertController, 
              private router: Router, 
              private formBuilder: FormBuilder,
              private menuController: MenuController) {

                this.registroEstudianteForm = this.formBuilder.group({
                  nombre: ['', [Validators.required,]],
                  rut: ['', [Validators.required, Validators.minLength(8)]],
                  email: ['', [Validators.required, Validators.email]],
                  password: ['', [Validators.required, Validators.minLength(8)]],
                  jornada: ["",[Validators.required]],
                  sede: ["",[Validators.required]]
            
                });
               }

  ngOnInit() {
  }

  // crearEstudiante2() {
  //   if (this.registroEstudianteForm && this.registroEstudianteForm.valid) {
  //     // Obtén el valor del email del nuevo estudiante desde el formulario
  //     const newEstudianteEmail = this.registroEstudianteForm.get('email')?.value;
      
  //     // Imprimir el email en la consola antes de la comparación
  //     console.log('Email a verificar:', newEstudianteEmail);
  
  //     // Verificar si el estudiante ya existe
  //     this.authService.GetAlumnoByEmail(newEstudianteEmail).subscribe(existingStudent => {
  //       if (existingStudent !== null) {
  //         // Estudiante ya existe, mostrar mensaje
  //         this.mostrarMensaje('El estudiante ya existe');
  //       } else {
  //         // Estudiante no existe, crear y mostrar mensaje de éxito
  //         const newEstudiante = this.registroEstudianteForm.value;
  //         this.apiCrud.CrearEstudiante(newEstudiante).subscribe(response => {
  //           console.log(response);
  //           this.mostrarMensaje('Estudiante creado exitosamente');
  //           this.registroEstudianteForm.reset();
  //         });
  //       }
  //     });
  //   }
  // }
  
  crearEstudiante(){
    if (this.registroEstudianteForm.valid){
      //implementar que el usuario no se repita, en caso que ya existe enviar un mensaje
      this.authService.GetAlumnoByEmail(this.registroEstudianteForm.value.email).subscribe(resp=>{
        this.userdata = resp; 
        if(this.userdata.length>0){
           this.registroEstudianteForm.reset();
          this.errorDuplicidad();
        }
        else{
          this.newEstudiante.nombre = this.registroEstudianteForm.value.nombre;
          this.newEstudiante.rut = this.registroEstudianteForm.value.rut;
          this.newEstudiante.email = this.registroEstudianteForm.value.email;
          this.newEstudiante.password = this.registroEstudianteForm.value.password;
          this.newEstudiante.sede = this.registroEstudianteForm.value.sede;
          this.newEstudiante.jornada=this.registroEstudianteForm.value.jornada;;
          this.apiCrud.CrearEstudiante(this.newEstudiante).subscribe();
          this.registroEstudianteForm.reset();
          this.mostrarMensaje('Estudiante creado exitosamente');
          this.router.navigateByUrl('/login-alumno');
        }
      })
    }
  }
  
  
  async errorDuplicidad(){
    const alerta = await this.alertController.create({
      header: 'Error..',
      message: 'El estudiante ya existe',
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


