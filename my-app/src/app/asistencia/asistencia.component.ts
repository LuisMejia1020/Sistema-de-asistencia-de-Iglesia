import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent {

  constructor(private location: Location){

  }
  asistenciaRegistrada = false;

  registrarAsistencia(){
    this.asistenciaRegistrada = true
  }
  personas = [
    { nombre: 'Juan', asistio: false },
    { nombre: 'Pedro', asistio: false },
    { nombre: 'María', asistio: false },
    { nombre: 'Luis', asistio: false },
    { nombre: 'Jani', asistio: false },
    { nombre: 'Helton', asistio: false },
    { nombre: 'Jose', asistio: false },
    { nombre: 'Francisco', asistio: false },
    { nombre: 'Carlos', asistio: false },
  ];

  clearSession(){
    console.log("Hasta luego te esperamos pronto")
    alert("tu sesion ha terminado")
  }

  goBack() {
    this.location.back();
  }

}
