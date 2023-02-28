import { Component } from '@angular/core';
import { ILogin } from '../interfaces/interface';


@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent {
  email: ILogin[] = [];
  password: ILogin[] = [];

  constructor(){
    this.email = []
    this.password = []
  }

  iniciarSesion(email:string, password:string) {
    console.log(`Iniciando sesión con correo ${this.email} y contraseña ${this.password}`);

  }

  
}

