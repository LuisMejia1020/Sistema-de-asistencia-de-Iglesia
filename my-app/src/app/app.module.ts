import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { AfternoonPipe, MorningPipe, ReunionesComponent } from './reuniones/reuniones.component';

@NgModule({
  declarations: [
    AppComponent,
    AsistenciaComponent,
    RegistroUsuarioComponent,
    LoginUsuarioComponent,
    ReunionesComponent,
    MorningPipe,
    AfternoonPipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
