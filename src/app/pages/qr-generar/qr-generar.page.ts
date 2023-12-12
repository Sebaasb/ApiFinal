import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { AlertController } from '@ionic/angular';
import { QRCodeErrorCorrectionLevel, QRCodeToDataURLOptions } from 'qrcode';
import { AuthService } from 'src/app/servicios/auth.service';
import { ICodigoQr, IDocentes } from '../interfaces/interfaces';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

export interface IDocente {
  id: number;
  nombre: string;
  email: string;
  password: string;
  asignaturas: Asignatura[];
}

interface Asignatura {
  nombreAsignatura: string;
  seccion: string;
  horasSemanales: string;
  año: string;
  semestre: string;
}


@Component({
  selector: 'app-qr-generar',
  templateUrl: './qr-generar.page.html',
  styleUrls: ['./qr-generar.page.scss'],
})

export class QrGenerarPage implements OnInit {

  public mensaje: string;

  data = {
    texto: '',
    fecha:'',
    asignatura:'',
    seccion :''
  };

  nombre: any;


  newCodigo:ICodigoQr={
    nombre:'',
    email: '',
    asignatura: '',
	  fecha:''
  }

  docente: IDocentes = {
    id:0,
    nombre: '',
    email:'',
    password:'', 
    asignaturas: [] as Asignatura[],
  }

 

 
  // qrCodeString: string = 'Hola, esto es un código QR';


  constructor(private menuController: MenuController,
              private authService: AuthService,
              private alertController: AlertController,
              private apiCrudService : ApiCrudService,
              private datePipe: DatePipe,
              private router: Router) { 
                this.mensaje='Duoc UC Maipú';
                this.nombre=sessionStorage.getItem('nombre');
              }

              ngOnInit() {
                const userId = sessionStorage.getItem('id');
                if (userId) {
                  // Llama a la función para obtener las asignaturas del docente
                  this.obtenerAsignaturasDocente(Number(userId));
                }
              }

  MostrarMenu(){
    this.menuController.open('first');

  }

  generarQr() {
    this.mensaje = this.data.texto;
    this.newCodigo.nombre = this.nombre;
    const userEmail = sessionStorage.getItem('email');
    if (userEmail) {
      this.newCodigo.email = userEmail;
    }
    this.newCodigo.asignatura = this.newCodigo.asignatura;
    this.newCodigo.fecha = this.newCodigo.fecha;

    if (this.newCodigo.asignatura && this.newCodigo.fecha ) {
      this.apiCrudService.CrearQR(this.newCodigo).subscribe();
      this.mostrarMensaje();
      this.data.texto = '';
    }
  }

  guardarQR(){
    let mensaje: string = `${this.newCodigo.asignatura}-${this.newCodigo.fecha}`;
    return mensaje;
  }


  async mostrarMensaje(){
    const alerta = await this.alertController.create({
      header: 'Asignatura ha sido registrada',
      message: 'Su QR ha sido almacenado',
      buttons: ['OK']
    });
    alerta.present();
  }

  IrACodigosAlmacenados() {
    this.router.navigate(['/listar-qr']); // Ajusta la ruta según tu configuración
  }

  obtenerAsignaturasDocente(usuarioID: number) {
    const userId = sessionStorage.getItem('id');
    if (userId) {
      this.authService.BuscarUsuarioId(usuarioID).subscribe(
        (resp: any) => {
          console.log('Respuesta del servidor en obtenerAsignaturasDocente:', resp);
          this.docente = {
            id: resp[0].id,
            nombre: resp[0].nombre,
            password: resp[0].password,
            email: resp[0].email,
            asignaturas: resp[0].Asignaturas || [],
          };
  
          // Acceder a las asignaturas del docente
          const asignaturasDelDocente = this.docente.asignaturas;
          console.log('Asignaturas del docente:', asignaturasDelDocente);
  
          // Resto de tu código...
        }
      );
    }
  }
  






}