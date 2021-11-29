import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonList, MenuController, NavController, Platform, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/authservice.service';
import { ServicedatosService, Usuarios } from 'src/app/services/servicedatos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuarios:Usuarios[]=[];
  newUsuarios: Usuarios=<Usuarios>{};
  usuarioLogueado = false;

  @ViewChild('myList')myList : IonList;

  constructor(private storageService: ServicedatosService, public navCtrl: NavController,
    private plt: Platform, private toastController: ToastController, private menuController: MenuController,
    
    public authService: AuthService) { 
this.plt.ready().then(()=>{
this.loadUsuarios();
});


}

  buscarUsuarios(nombre:string,contraseña:string){
    this.storageService.buscarUsuario(nombre,contraseña);
  }

  


  ngOnInit() {
    this.usuarioLogueado = this.authService.isLoggedIn('');
    this.authService.changeLoginStatus$.subscribe((loggedStatus: boolean)=>{
      this.usuarioLogueado=loggedStatus;
    })
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  logout(){
    this.authService.logout();
  }


  loadUsuarios(){
    this.storageService.getUsuarios().then(usuarios=>{
      this.usuarios=usuarios;
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