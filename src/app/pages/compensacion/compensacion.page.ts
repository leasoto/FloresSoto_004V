import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-compensacion',
  templateUrl: './compensacion.page.html',
  styleUrls: ['./compensacion.page.scss'],
})
export class CompensacionPage implements OnInit {

  componentes: Componente[] =[
    {
      icon: 'beer',
      name: 'cerveza',
      redirectTo:'/alert'
    },
    {
      icon: 'beer',
      name: 'cerveza',
      redirectTo:'/action-sheet'
    },
    {
      icon: 'beer',
      name: 'input',
      redirectTo:'/input'
    },
    {
      icon: 'beer',
      name: 'autos',
      redirectTo:'/autos'
    }
    
  ]

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
