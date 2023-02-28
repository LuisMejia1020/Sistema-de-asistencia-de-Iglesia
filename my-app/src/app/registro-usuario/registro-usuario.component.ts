import { Component } from '@angular/core';
import { IRegistroUsuario } from '../interfaces/interface';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent {
 
 username:IRegistroUsuario[] = []
 email:IRegistroUsuario[] = []
 password:IRegistroUsuario[]=[]

 constructor(){
  this.username=[]
  this.email=[]
  this.password=[]
 }

  registrarse(username: string, email:string, password: string) {
    console.log(`Registrando usuario ${this.username} con correo ${this.email} y contraseña ${this.password}`);
  }
}
