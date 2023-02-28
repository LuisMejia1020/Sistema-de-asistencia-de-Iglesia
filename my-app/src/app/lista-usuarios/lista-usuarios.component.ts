import { Component } from '@angular/core';


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {
 users = [
  
    { id:1, nombre: 'John Smith', email: 'john@example.com', username:'Jsmith', password:'12345'},    
    { id:2, nombre: 'Helton Lopez', email: 'helton@gmail.com', username:'heltonj', password:'12345'},   
    { id:3, nombre: 'Jani Flores', email: 'jani@gmail.com', username:'JaniFlores', password:'12345'},
    { id:4, nombre: 'Jose Mejia', email: 'jose@gmail.com', username:'JoseMejia', password:'12345'},
    { id:5, nombre: 'Luis Mejia', email: 'Lmejia@gmail.com', username:'Lmejia', password:'12345'},
    { id:6, nombre: 'Eduardo Figueroa', email: 'Eduardo@gmail.com', username:'Klaka', password:'12345'},
    { id:7, nombre: 'Oscar Chinchilla', email: 'Opchinchillagmail.com', username:'Oscar Chinchilla', password:'12345'},
    { id:8, nombre: 'Alex Cruz', email: 'afct06@gmail.com', username:'Alex Cruz', password:'12345'},

  ];
}
