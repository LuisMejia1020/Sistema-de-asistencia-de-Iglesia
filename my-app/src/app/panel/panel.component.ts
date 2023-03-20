import { Component, Pipe, PipeTransform } from '@angular/core';
import { IReporte } from '../interfaces/IReporte';

interface IReportes {
  id: number
  numeroAsistencia: number
  inicio: string
  personasFaltantes: string
  personasNuevas: string
}

@Pipe({ name: 'manana'})
export class MananaPipe implements PipeTransform {
  transform(reportes: IReportes[]): IReportes[] {
    return reportes.filter((reporte) => reporte.inicio.includes('am'));
  }
}

@Pipe({ name: 'tarde'})
export class TardePipe implements PipeTransform {
  transform(reportes: IReportes[]): IReportes[] {
    return reportes.filter((reporte) => reporte.inicio.includes('pm'))
  }
}

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

  reporteNuevo: IReporte = {
    id: 0,
    numeroAsistencia: 0,
    inicio:'',
    personasFaltantes: '',
    personasNuevas: ''
  }

  reportes: IReportes[] = [
    {id:0, numeroAsistencia: 10, inicio: '8:00 am', personasFaltantes: 'Jani Flores, Luis Mejia', personasNuevas:'Jose Mejia, Carlos Lopez'},

    {id:1, numeroAsistencia: 12, inicio: '4:00 pm', personasFaltantes: 'Carlos Perez, Monica Flores', personasNuevas:'Jair Lopez, Thor Odinson'}
  ]

  clearSession(){
    console.log("Hasta luego te esperamos pronto")
    alert("tu sesion ha terminado")
  }

}
