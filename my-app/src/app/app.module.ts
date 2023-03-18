import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AdminReunionCrudComponent } from './admin-reunion-crud/admin-reunion-crud.component';
import {  PanelComponent, MananaPipe, TardePipe } from './panel/panel.component';
import { ReporteEspecificoComponent, FaltantePipe, NuevaPipe } from './reporte-especifico/reporte-especifico.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'



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
    AdminReunionCrudComponent,
    PanelComponent,
    ReporteEspecificoComponent,
    MananaPipe,
    TardePipe,
    FaltantePipe,
    NuevaPipe,
   
    
  
   

  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
