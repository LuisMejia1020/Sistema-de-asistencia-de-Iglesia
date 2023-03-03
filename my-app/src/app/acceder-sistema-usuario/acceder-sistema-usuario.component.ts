import { Component } from '@angular/core';

@Component({
  selector: 'app-acceder-sistema-usuario',
  templateUrl: './acceder-sistema-usuario.component.html',
  styleUrls: ['./acceder-sistema-usuario.component.css']
})
export class AccederSistemaUsuarioComponent {
  tipoUsuario = 'normal';

  setTipoUsuario(tipo: string) {
    this.tipoUsuario = tipo;
  }
}
