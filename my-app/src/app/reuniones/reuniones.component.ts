import { Component, Pipe, PipeTransform } from '@angular/core';

interface IReuniones {
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
  meetings: IReuniones[] = [
    { lider: 'Cash Luna',nombre: 'Reunión 0', inicio: '6:00 am' },
    { lider: 'Cash Luna',nombre: 'Reunión 6', inicio: '8:30 am' },
    { lider: 'Cash Luna',nombre: 'Reunión 1', inicio: '10:00 am' },
    { lider: 'Cash Luna',nombre: 'Reunión 2', inicio: '11:30 am' },
    { lider: 'Marcos Witt',nombre: 'Reunión 3', inicio: '2:00 pm' },
    { lider: 'Marcos Witt',nombre: 'Reunión 4', inicio: '4:30 pm' },
    { lider: 'Marcos Witt',nombre: 'Reunión 5', inicio: '6:00 pm' },
    { lider: 'Marcos Witt',nombre: 'Reunión 8', inicio: '10:30 pm' },
  ];
    
  
}
