import { Component } from '@angular/core';
import { IReunion } from '../interfaces/reunion';

@Component({
  selector: 'app-reunion',
  templateUrl: './reunion.component.html',
  styleUrls: ['./reunion.component.css']
})
export class ReunionComponent {
  reunion: IReunion = {
    id: 0,
    lider: 'Fernando Gomez',
    nombre: 'Reunion Cristo viene',
    inicio: '7:00 AM'
  }
}
