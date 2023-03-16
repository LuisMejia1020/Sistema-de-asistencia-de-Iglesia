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

const routes: Routes = [
  {path: 'inicio', component: AccederSistemaUsuarioComponent,},
  {path: 'primerapantalla', component: LoginAdministradorComponent,},
  {path: 'segundapantalla', component: LoginUsuarioComponent,},
  {path: 'tercerapantalla', component: ReunionesComponent,},
  {path: 'cuartapantalla', component: AsistenciaComponent,},
  {path: 'quintapantalla', component: RegistroUsuarioComponent,},
  {path: 'sextapantalla', component: AdminUserCrudComponent,},
  {path: 'septimapantalla', component: AsistenciaComponent,},
  {path: 'octavapantalla', component: AsistenciaComponent,},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
