import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  usuario = {
    nombre:'',
    apellido:'',
    genero:'',
    fecha:'',
    email:'',
    password:'',
    password2:'',
    
  }


  constructor(public alertController: AlertController) { }

  showAlert() {

    this.alertController.create({
      header: 'Tu cuenta ha sido creada.',
      subHeader: 'Se ha enviado la información a tu correo.',
      buttons: ['OK']
    }).then(res => {

      res.present();

    });

  }



  ngOnInit() {
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }
  
  showConfirm() {
    this.alertController.create({
      header: 'Confirm Alert',
      subHeader: 'Beware lets confirm',
      message: 'Are you sure? you want to leave without safty mask?',
      buttons: [
        {
          text: 'Never',
          handler: () => {
            console.log('I care about humanity');
          }
        },
        {
          text: 'Not Sure',
          handler: () => {
            console.log('Let me think');
          }
        },
        {
          text: 'Yes!',
          handler: () => {
            console.log('Whatever');
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

}

