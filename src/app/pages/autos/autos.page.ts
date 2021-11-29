import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-autos',
  templateUrl: './autos.page.html',
  styleUrls: ['./autos.page.scss'],
})
export class AutosPage implements OnInit {

  componentes: Componente[] =[
    {
      icon: 'beer',
      name: 'inicio',
      redirectTo:'/inicio'
    },
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
