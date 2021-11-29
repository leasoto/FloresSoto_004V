import { Component, OnInit, ViewChild } from '@angular/core';

import { ServicedatosService, Usuarios } from 'src/app/services/servicedatos.service';
import { Platform , ToastController, IonList } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuarios: Usuarios[] = [];
  newUsuarios: Usuarios = <Usuarios>{};

  @ViewChild('myList')myList : IonList;

 

  constructor(private storageService: ServicedatosService, 
    private plt: Platform, private toastController: ToastController) { 
      this.plt.ready().then(()=>{
        this.loadUsuarios();
      });

    }

  ngOnInit() {
  }
  onSubmit(){
    this.addUsuarios();
    this.loadUsuarios();
  }


//get
loadUsuarios(){
  this.storageService.getUsuarios().then(usuarios=>{
    this.usuarios=usuarios;
  });
}

 //create
 addUsuarios(){
  this.newUsuarios.id = Date.now();
  this.storageService.addUsuario(this.newUsuarios).then(usuario=>{
    this.newUsuarios = <Usuarios>{};
    this.showToast('!Usuario Agregados');
    this.loadUsuarios();
  });
}



async showToast(msg){
  const toast = await this.toastController.create({
    message: msg, 
    duration: 2000
  });
  toast.present();
}



}