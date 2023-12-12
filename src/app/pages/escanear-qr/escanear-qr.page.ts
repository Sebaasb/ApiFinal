import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AlertController } from '@ionic/angular';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';

interface IAsistencia {
  nombre: string;
  asignatura: string;
}

interface IAsistencias {
  id: number;
  nombre: string;
  asignatura: string;
}




@Component({
  selector: 'app-escanear-qr',
  templateUrl: './escanear-qr.page.html',
  styleUrls: ['./escanear-qr.page.scss'],
})
export class EscanearQrPage implements OnInit {

  scannedResult: any;
  bandera: boolean = true;
  asistencias: IAsistencias[] = [];

  constructor( private menuController: MenuController,
                private alertController: AlertController,
                  private apicrud: ApiCrudService) {}



//Scanear QR
async checkPermission() {
  try {
    const status = await BarcodeScanner.checkPermission({ force: true});
    if (status.granted) {
      return true;
    }
    return false;
  } catch(e) {
    console.log(e);
    return;
  }
}



async startScan() {
  try {
    const permission = await this.checkPermission();
    if (!permission) {
      return;
    }

    // Agrega una clase al elemento principal
    document.querySelector('body')?.classList.add('scanner-active');
    this.bandera = false;

    await BarcodeScanner.hideBackground();

    const result = await BarcodeScanner.startScan();
    console.log(result);

    if (result?.hasContent) {
      this.scannedResult = result.content;
      BarcodeScanner.showBackground();

      // Elimina la clase cuando desactivas el escaneo
      document.querySelector('body')?.classList.remove('scanner-active');
      this.bandera = true;
      console.log(this.scannedResult);
    }
  } catch (e) {
    console.log(e);
    this.stopScan();
  }
}

stopScan() {
  BarcodeScanner.showBackground();
  BarcodeScanner.startScan();
  document.querySelector('body')?.classList.add('scanner-active');
}
  ngOnInit() {
  }

  MostrarMenu(){
    this.menuController.open('first');

  }

  ultimoIdGenerado: number = 0;

  generarIdUnico(): number {
    this.ultimoIdGenerado++;
    return this.ultimoIdGenerado;
  }

  generarAsistencia() {
    // Obtén el nombre del usuario desde sessionStorage
    const nombreAlumno = sessionStorage.getItem('nombre');
  
    // Verifica si se ha escaneado algo
    if (this.scannedResult && nombreAlumno) {
      // Crea un objeto de asistencia
      const nuevaAsistencia: IAsistencias = {
        id: this.generarIdUnico(),
        nombre: nombreAlumno,
        asignatura: this.scannedResult,
      };
  
      // Guarda la asistencia en el arreglo
      this.apicrud.CrearAsistencia(nuevaAsistencia).subscribe();
  
      // Puedes realizar aquí cualquier acción adicional, como enviar la asistencia al servidor
  
      // Muestra un mensaje
      this.mostrarMensaje();
    }
  }
  
  async mostrarMensaje(){
    const alerta = await this.alertController.create({
      header: 'Su asistencia ha sido registrada',
      message: 'Usted ha quedado presente',
      buttons: ['OK']
    });
    alerta.present();
  }

  guardarAsistencia() {
    // Imprime las asistencias en la consola para verificar
    console.log('Asistencias guardadas:', this.asistencias);
  }
  
}
    


