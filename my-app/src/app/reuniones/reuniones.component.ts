import { Component, Pipe, PipeTransform, } from '@angular/core';
import { IReunion } from '../interfaces/reunion';

interface IReuniones {
  id: number
  lider:string
  nombre:string
  inicio: string
}

@Pipe({ name: 'morning' })
export class MorningPipe implements PipeTransform {
  transform(meetings: IReuniones[]): IReuniones[] {
    return meetings.filter((meeting) => meeting.inicio.includes('am'));
  }
}

@Pipe({ name: 'afternoon' })
export class AfternoonPipe implements PipeTransform {
  transform(meetings: IReuniones[]): IReuniones[] {
    return meetings.filter((meeting) => meeting.inicio.includes('pm'));
  }
}

@Component({
  selector: 'app-reuniones',
  templateUrl: './reuniones.component.html',
  styleUrls: ['./reuniones.component.css']
})
export class ReunionesComponent {
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

    
  

