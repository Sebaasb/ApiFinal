import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  // aqui se llama al metodo
  MostrarMenu(){
    this.menuController.open('first');

  }


}
