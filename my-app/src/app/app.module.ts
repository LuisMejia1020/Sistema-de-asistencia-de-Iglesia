import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { AfternoonPipe, MorningPipe, ReunionesComponent } from './reuniones/reuniones.component';
import { AdminUserCrudComponent } from './admin-user-crud/admin-user-crud.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { ReunionComponent } from './reunion/reunion.component';
import { AccederSistemaUsuarioComponent } from './acceder-sistema-usuario/acceder-sistema-usuario.component';
import { LoginAdministradorComponent } from './login-administrador/login-administrador.component';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
import { AdminReunionCrudComponent } from './admin-reunion-crud/admin-reunion-crud.component';
=======
import { PanelComponent } from './panel/panel.component';
import { ReporteEspecificoComponent } from './reporte-especifico/reporte-especifico.component';
>>>>>>> 059ae37c37f2c451086d4c5fb7c4f6e08c313a27

;

@NgModule({
  declarations: [
    AppComponent,
    AsistenciaComponent,
    RegistroUsuarioComponent,
    LoginUsuarioComponent,
    ReunionesComponent,
    MorningPipe,
    AfternoonPipe,
    AdminUserCrudComponent,
    ListaUsuariosComponent,
    ReunionComponent,
    AccederSistemaUsuarioComponent,
    LoginAdministradorComponent,
<<<<<<< HEAD
    AdminReunionCrudComponent,
=======
    PanelComponent,
    ReporteEspecificoComponent,
>>>>>>> 059ae37c37f2c451086d4c5fb7c4f6e08c313a27
    
  
    
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
