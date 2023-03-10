import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AccederSistemaUsuarioComponent } from './acceder-sistema-usuario/acceder-sistema-usuario.component';

const routes: Routes = [{
  path: 'inicio', component: AccederSistemaUsuarioComponent,
},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
