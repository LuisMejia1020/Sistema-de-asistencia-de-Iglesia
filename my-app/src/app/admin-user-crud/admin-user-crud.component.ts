import { Component } from '@angular/core';
import { IReunion } from '../interfaces/reunion';

interface IReuniones {
  id: number
  lider:string
  nombre:string
  inicio: string
}

interface IUsuario {
  id: number;
  nombre: string;
  email: string;
}

@Component({
  selector: 'app-admin-user-crud',
  templateUrl: './admin-user-crud.component.html',
  styleUrls: ['./admin-user-crud.component.css']
})
export class AdminUserCrudComponent {
  usuarios: IUsuario[] = [
    { id: 1, nombre: 'Juan', email: 'juan@gmail.com' },
    { id: 2, nombre: 'Pedro', email: 'pedro@gmail.com' },
    { id: 3, nombre: 'María', email: 'maria@gmail.com' }
  ];

  usuarioSeleccionado: IUsuario = { id: 0, nombre: '', email: '' };
  modoEdicion = false;

  // Método para crear o actualizar un usuario
  guardarUsuario() {
    if (this.modoEdicion) {
      // Actualizar usuario existente
      const indice = this.usuarios.findIndex(u => u.id === this.usuarioSeleccionado.id);
      this.usuarios[indice] = { ...this.usuarioSeleccionado };
    } else {
      // Crear un nuevo usuario
      this.usuarioSeleccionado.id = this.usuarios.length + 1;
      this.usuarios.push({ ...this.usuarioSeleccionado });
    }
    // Limpiar el formulario
    this.usuarioSeleccionado = { id: 0, nombre: '', email: '' };
    this.modoEdicion = false;
  }

  // Método para editar un usuario existente
  editarUsuario(usuario: IUsuario) {
    this.usuarioSeleccionado = { ...usuario };
    this.modoEdicion = true;
  }

  // Método para borrar un usuario existente
  borrarUsuario(usuario: IUsuario) {
    const confirmacion = confirm(`¿Está seguro que desea borrar a ${usuario.nombre}?`);
    if (confirmacion) {
      this.usuarios = this.usuarios.filter(u => u.id !== usuario.id);
    }
  }

  reunionNueva: IReunion = {
    id: 0,
    lider: '',
    nombre: '',
    inicio: ''
  }
  meetings: IReuniones[] = [
    {  id: 0,lider: 'Cash Luna',nombre: 'Reunión 0', inicio: '6:00 am' },
    {  id: 1,lider: 'Cash Luna',nombre: 'Reunión 6', inicio: '8:30 am' },
    {  id: 2,lider: 'Cash Luna',nombre: 'Reunión 1', inicio: '10:00 am' },
    {  id: 3,lider: 'Cash Luna',nombre: 'Reunión 2', inicio: '11:30 am' },
    {  id: 4,lider: 'Fernando Gomez',nombre: 'Reunión 2', inicio: '10:30 am' },
    



    { id: 5,lider: 'Marcos Witt',nombre: 'Reunión 3', inicio: '2:00 pm' },
    { id: 6,lider: 'Marcos Witt',nombre: 'Reunión 4', inicio: '4:30 pm' },
    { id: 7,lider: 'Marcos Witt',nombre: 'Reunión 5', inicio: '6:00 pm' },
    { id: 8,lider: 'Marcos Witt',nombre: 'Reunión 8', inicio: '10:30 pm' },
    { id: 9,lider: 'Jose Jorge Mejia',nombre: 'Reunión alfa', inicio: '9:30 pm' },
    
  ];

  reunionSeleccionado: IReunion = { id: 0, nombre: '', lider: '', inicio:'' };
  modoEdicion2 = false;

  // Método para crear o actualizar un usuario
  guardarReunion() {
    if (this.modoEdicion2) {
      // Actualizar reunion existente
      const indice = this.meetings.findIndex(m => m.id === this.reunionSeleccionado.id);
      this.meetings[indice] = { ...this.reunionSeleccionado };
    } else {
      // Crear un nuevo usuario
      this.reunionSeleccionado.id = this.meetings.length + 1;
      this.meetings.push({ ...this.reunionSeleccionado });
    }
    // Limpiar el formulario
    this.reunionSeleccionado = { id: 0, nombre: '', lider: '', inicio:'' };
    this.modoEdicion2 = false;
  }

  // Método para editar un usuario existente
  editarReunion(meeting: IReuniones) {
    this.reunionSeleccionado = { ...meeting };
    this.modoEdicion2 = true;
  }

  // Método para borrar un usuario existente
  borrarReunion(meeting: IReuniones) {
    const confirmacion = confirm(`¿Está seguro que desea borrar a ${meeting.nombre}?`);
    if (confirmacion) {
      this.meetings = this.meetings.filter(m => m.id !== meeting.id);
    }
  }

}
