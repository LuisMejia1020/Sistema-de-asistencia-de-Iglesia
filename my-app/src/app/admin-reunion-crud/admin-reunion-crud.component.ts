import { Component } from '@angular/core';
import { IReunion } from '../interfaces/reunion';

interface IReuniones {
  id: number
  lider:string
  nombre:string
  inicio: string
}

@Component({
  selector: 'app-admin-reunion-crud',
  templateUrl: './admin-reunion-crud.component.html',
  styleUrls: ['./admin-reunion-crud.component.css']
})
export class AdminReunionCrudComponent {

  reunionNueva: IReunion = {
    id: 0,
    lider: '',
    nombre: '',
    inicio: ''
  }
  meetings: IReuniones[] = [
    { id: 0,lider: 'Martin Lloyd',nombre: 'Reunión matutina', inicio: '10:30 am' },
    { id: 1,lider: 'Juan Calvino',nombre: 'Reunión vespertina', inicio: '5:30 pm' }
    
  ];

  reunionSeleccionado: IReunion = { id: 0, nombre: '', lider: '', inicio:'' };
  modoEdicion = false;

  // Método para crear o actualizar un usuario
  guardarReunion() {
    if (this.modoEdicion) {
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
    this.modoEdicion = false;
  }

  // Método para editar un usuario existente
  editarReunion(meeting: IReuniones) {
    this.reunionSeleccionado = { ...meeting };
    this.modoEdicion = true;
  }

  // Método para borrar un usuario existente
  borrarReunion(meeting: IReuniones) {
    const confirmacion = confirm(`¿Está seguro que desea borrar a ${meeting.nombre}?`);
    if (confirmacion) {
      this.meetings = this.meetings.filter(m => m.id !== meeting.id);
    }
  }

}
