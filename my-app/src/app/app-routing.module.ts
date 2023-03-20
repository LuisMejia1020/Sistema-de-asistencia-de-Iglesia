import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AccederSistemaUsuarioComponent } from './acceder-sistema-usuario/acceder-sistema-usuario.component';
import { LoginAdministradorComponent } from './login-administrador/login-administrador.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { ReunionesComponent } from './reuniones/reuniones.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { AdminUserCrudComponent } from './admin-user-crud/admin-user-crud.component';
import { PanelComponent } from './panel/panel.component';
import { AdminReunionCrudComponent } from './admin-reunion-crud/admin-reunion-crud.component';
import { ReporteEspecificoComponent } from './reporte-especifico/reporte-especifico.component';


const routes: Routes = [
  {path: 'inicio', component: AccederSistemaUsuarioComponent,},
  {path: 'primerapantalla', component: LoginAdministradorComponent,},
  {path: 'segundapantalla', component: LoginUsuarioComponent,},
  {path: 'tercerapantalla', component: ReunionesComponent,},
  {path: 'cuartapantalla', component: AsistenciaComponent,},
  {path: 'quintapantalla', component: RegistroUsuarioComponent,},
  {path: 'sextapantalla', component: PanelComponent,},
  {path: 'septimapantalla', component: AsistenciaComponent,},
  {path: 'octavapantalla', component: AsistenciaComponent,},
  {path: 'novenapantalla', component: AdminUserCrudComponent,},
  {path: 'decimapantalla', component: AdminReunionCrudComponent,},
  {path: 'oncepantalla', component: ReporteEspecificoComponent,},
  {path: 'docepantalla', component: ReporteEspecificoComponent,},
  {path: 'trecepantalla', component: AsistenciaComponent,},
  {path: 'catorcepantalla', component: AccederSistemaUsuarioComponent,},
  {path: 'default', component: AccederSistemaUsuarioComponent,},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
