import { Component, OnInit } from '@angular/core';
import { ICodigoQr, ICodigoQrs } from '../interfaces/interfaces';
import { AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';

@Component({
  selector: 'app-listar-qr',
  templateUrl: './listar-qr.page.html',
  styleUrls: ['./listar-qr.page.scss'],
})
export class ListarQrPage implements OnInit {
  [x: string]: any;

  codigos:ICodigoQrs[]=[];

  numero : any;

  constructor(private alertcontroller: AlertController,
              private router: Router,
              private loadingCtrl : LoadingController,
              private apiCrudService: ApiCrudService,
              private menuController: MenuController ) { }

  ngOnInit() {
  }
  
  MostrarMenu() {
    this.menuController.open('first');
  }

  loadCodigosQR() {
    this.apiCrudService.listarCodigosQR().subscribe({
      next: (resp) => {
        console.log(resp);
        this.codigos = resp;
      },
      error: (err) => {
        console.log(err.error.message);
      },
    });
  }


  ionViewWillEnter(){
    this.loadCodigos();
    this.numero = sessionStorage.getItem('id');
  }

  async loadCodigos(event?: InfiniteScrollCustomEvent){
    
    const loading = await this.loadingCtrl.create({
      message: "Cargando..",
      spinner: "bubbles"
    });
    await loading.present();


    this.apiCrudService.listarCodigosQR().subscribe(
      {
        next: resp=>{
          console.log(resp);
         loading.dismiss();
          let listString = JSON.stringify(resp)
          this.codigos=JSON.parse(listString)
          event?.target.complete();
          console.log(this.codigos);
          
        },
        error: err =>{
          console.log(err.error.message);
         loading.dismiss();
        }
      }
    ) 
  }

}




