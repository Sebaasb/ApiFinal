import { Component, OnInit } from '@angular/core';
import { Data } from '../interfaces/interfaces';
import { FeriadosService } from 'src/app/servicios/feriados.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.page.html',
  styleUrls: ['./feriados.page.scss'],
})
export class FeriadosPage implements OnInit {

  feriados: Data[] = [];

  constructor(private feriadosService: FeriadosService,
              private menuController: MenuController) { }

  ngOnInit() {
    this.feriadosService.getFeriados().subscribe(resp =>{
      console.log('feriados', resp);
      this.feriados.push(...resp.data)
    });
  }

  MostrarMenu(){
    this.menuController.open('first');

  }

}
