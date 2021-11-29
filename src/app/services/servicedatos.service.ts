import { Injectable } from '@angular/core';
import { Storage }  from '@ionic/storage';
import { AuthService } from 'src/app/services/authservice.service';
import { Router } from '@angular/router';
import { ToastController} from '@ionic/angular';
import { NgModule, NO_ERRORS_SCHEMA }  from '@angular/core';





@NgModule({

    
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }



export interface Datos{
  id : number;
  patente: string; 
  modelo: string; 
  edad: string;
  huella: number;
  modified: number;
}

export interface Usuarios{
  id : number;
  nombre: string; 
  contrasenia: string; 
}

const ITEMS_KEY = 'my-datos';

const ITEMS_KEY_USUARIO = 'my-users';

@Injectable({
  providedIn: 'root'
})
export class ServicedatosService {

  



  private _storage : Storage;

  constructor(private storage: Storage, private toastController: ToastController, 
    public authService: AuthService, private route: Router) { 
    
    this.init();
   }

   //definimos en un método la creación del almacenamiento
  async init(){
    const storage = await this.storage.create();
    this._storage= storage;
  }

  
  addDatos(dato: Datos):Promise<any>{
    return this.storage.get(ITEMS_KEY).then((datos : Datos[])=>{
       if (datos) {
         datos.push(dato);
         return this.storage.set(ITEMS_KEY, datos);
       }else {
         return this.storage.set(ITEMS_KEY, [dato]);
       }
 
     })
   }
 
    //Nos permmite obtener la información almacenada en el storage 
    //por medio de sus keys 
 
    getDatos(): Promise<Datos[]>{
     return this.storage.get(ITEMS_KEY);
   }
 
 
   //actualizar información de un objeto 
   updateDatos(dato: Datos): Promise<any>{
     return this.storage.get(ITEMS_KEY).then((datos : Datos[])=>{
       if (!datos || datos.length == 0){
         return null;
       }
       let newDato: Datos[] = [];
       for (let i of datos){
         if (i.id === dato.id){
           newDato.push(dato);
         }
         else{
           newDato.push(i);
         }
       }
       return this.storage.set(ITEMS_KEY, newDato);
     });
   }
 
    //Eliminar
   deleteDatos(id: number): Promise<Datos>{
     return this.storage.get(ITEMS_KEY).then((datos : Datos[])=>{
       if (!datos || datos.length === 0){
         return null;
       }
       let toKeep: Datos[] = []; 
       for (let i of datos){
         if (i.id !== id){
           toKeep.push(i);
         }
       }
       return this.storage.set(ITEMS_KEY, toKeep);
     });
     
   }

   addUsuario(dato: Usuarios):Promise<any>{
    return this.storage.get(ITEMS_KEY_USUARIO).then((datos : Usuarios[])=>{
       if (datos) {
         datos.push(dato);
         return this.storage.set(ITEMS_KEY_USUARIO, datos);
       }else {
         return this.storage.set(ITEMS_KEY_USUARIO, [dato]);
       }
 
     })
   }
 
    //Nos permmite obtener la información almacenada en el storage 
    //por medio de sus keys 
 
    getUsuarios(): Promise<Usuarios[]>{
     return this.storage.get(ITEMS_KEY_USUARIO);
   }
 
 
   //actualizar información de un objeto 
   updateUsuario(dato: Usuarios): Promise<any>{
     return this.storage.get(ITEMS_KEY_USUARIO).then((datos : Usuarios[])=>{
       if (!datos || datos.length == 0){
         return null;
       }
       let newDato: Usuarios[] = [];
       for (let i of datos){
         if (i.id === dato.id){
           newDato.push(dato);
         }
         else{
           newDato.push(i);
         }
       }
       return this.storage.set(ITEMS_KEY_USUARIO, newDato);
     });
   }
 
    //Eliminar
   deleteUsuario(id: number): Promise<Usuarios>{
     return this.storage.get(ITEMS_KEY_USUARIO).then((datos : Usuarios[])=>{
       if (!datos || datos.length === 0){
         return null;
       }
       let toKeep: Usuarios[] = []; 
       for (let i of datos){
         if (i.id !== id){
           toKeep.push(i);
         }
       }
       return this.storage.set(ITEMS_KEY_USUARIO, toKeep);
     });
     
   }

   routeRedirect = '';
   buscarUsuario(usuario: string, icontrasenia:string){
    let valor="";
    this.storage.get(ITEMS_KEY_USUARIO).then((usuarios : Usuarios[])=>{
      if (!usuarios || usuarios.length === 0){
        return null;
      }
      for (let i of usuarios){

        if (i.contrasenia === icontrasenia && i.nombre === usuario){
           valor="existe";
           this.showToast("Bienvenido "+i.nombre);
           this.authService.login();
           this.route.navigate(['/inicio']);
          
        }
      }
      if(valor===""){
        this.showToast("Usuario y/o contraseña incorrectos");
      }
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
