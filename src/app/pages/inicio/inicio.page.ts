import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
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
    },
    {
      icon: 'beer',
      name: 'noticias',
      redirectTo:'/noticias'
    }
    
  ]

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}

