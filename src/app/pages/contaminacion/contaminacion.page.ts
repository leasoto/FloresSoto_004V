import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
@Component({
  selector: 'app-contaminacion',
  templateUrl: './contaminacion.page.html',
  styleUrls: ['./contaminacion.page.scss'],
})

export class ContaminacionPage implements OnInit {

  componentes: Componente[] =[
   
    
  ]

  constructor(private menuController: MenuController) { }


  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }

}

