import { Component, Pipe, PipeTransform } from '@angular/core';

interface IReportes {
  id: number
  numeroAsistencia: number
  inicio: string
  personasFaltantes: string
  personasNuevas: string
}

interface IAsistencia {
  nombre: string
  type: 'faltante'| 'nueva'
}

@Pipe({ name: 'faltante'})
export class FaltantePipe implements PipeTransform {
  transform(reportes: IAsistencia[]): IAsistencia[] {
    return reportes.filter((reporte) => reporte.type.includes('faltante'))
  }
}

@Pipe({ name: 'nueva'})
export class NuevaPipe implements PipeTransform {
  transform(reportes: IAsistencia[]): IAsistencia[] {
    return reportes.filter((reporte) => reporte.type.includes('nueva'))
    
  }
}

@Component({
  selector: 'app-reporte-especifico',
  templateUrl: './reporte-especifico.component.html',
  styleUrls: ['./reporte-especifico.component.css']
})
export class ReporteEspecificoComponent {

  reportesNuevos: IAsistencia = {
    nombre: '',
    type: 'faltante'
  }

  reportes: IAsistencia[] = [
   {nombre: 'Luis Mejia', type:'nueva'},
   {nombre: 'Helgon Lopez', type:'faltante'},
   {nombre: 'Jani Flores', type:'nueva'},
   {nombre: 'Jose Mejia', type:'faltante'},
   {nombre: 'Alex Cruz', type:'faltante'},
   {nombre: 'Fernando Gomez', type:'nueva'},
   {nombre: 'Oscar Chinchilla', type:'nueva'},
   {nombre: 'Monica Flores', type:'nueva'},
   {nombre: 'Diego Giron', type:'faltante'},
   {nombre: 'Karla Castro', type:'faltante'},

  ]

  clearSession(){
    console.log("Hasta luego te esperamos pronto")
    alert("tu sesion ha terminado")
  }

  

}
