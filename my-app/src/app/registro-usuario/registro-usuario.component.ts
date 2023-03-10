import { Component } from '@angular/core';
import { IRegistroUsuario } from '../interfaces/interface';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent {
 
 primerNombre:IRegistroUsuario[]=[]
 segundoNombre:IRegistroUsuario[]=[]
 primerApellido:IRegistroUsuario[]=[]
 segundoApellido:IRegistroUsuario[]=[]
 username:IRegistroUsuario[] = []
 email:IRegistroUsuario[] = []
 password:IRegistroUsuario[]=[]

 constructor(){
  this.primerNombre=[]
  this.segundoNombre=[]
  this.primerApellido=[]
  this.segundoApellido
  this.username=[]
  this.email=[]
  this.password=[]
 }

  registrarse(primerNombre:string, segundoNombre:string, primerApellido:string, segundoApellido:string, username: string, email:string, password: string) {
    console.log(`la persona ${this.primerNombre} ${this.segundoNombre} ${this.primerApellido} ${this.segundoApellido } esta registrando su usuario ${this.username} con correo ${this.email} y contraseña ${this.password}`);
  }
}
