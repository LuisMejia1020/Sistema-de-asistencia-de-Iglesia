import { Component } from '@angular/core';
import { ILogin } from '../interfaces/interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-administrador',
  templateUrl: './login-administrador.component.html',
  styleUrls: ['./login-administrador.component.css']
})
export class LoginAdministradorComponent {

 
  
  email: ILogin[] = [];
  password: ILogin[] = [];

  constructor(){
    this.email = []
    this.password = []
  }

  iniciarSesion(email:string, password:string) {
    console.log(`Iniciando sesión el Administrador con correo ${this.email} y contraseña ${this.password}`);

  }
}
