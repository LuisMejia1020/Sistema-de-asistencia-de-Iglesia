import { Component } from '@angular/core';
interface IUsuario {
  id: number;
  nombre: string;
  email: string;
}

@Component({
  selector: 'app-admin-user-crud',
  templateUrl: './admin-user-crud.component.html',
  styleUrls: ['./admin-user-crud.component.css']
})
export class AdminUserCrudComponent {
  usuarios: IUsuario[] = [
    { id: 1, nombre: 'Juan', email: 'juan@gmail.com' },
    { id: 2, nombre: 'Pedro', email: 'pedro@gmail.com' },
    { id: 3, nombre: 'María', email: 'maria@gmail.com' }
  ];

  usuarioSeleccionado: IUsuario = { id: 0, nombre: '', email: '' };
  modoEdicion = false;

  // Método para crear o actualizar un usuario
  guardarUsuario() {
    if (this.modoEdicion) {
      // Actualizar usuario existente
      const indice = this.usuarios.findIndex(u => u.id === this.usuarioSeleccionado.id);
      this.usuarios[indice] = { ...this.usuarioSeleccionado };
    } else {
      // Crear un nuevo usuario
      this.usuarioSeleccionado.id = this.usuarios.length + 1;
      this.usuarios.push({ ...this.usuarioSeleccionado });
    }
    // Limpiar el formulario
    this.usuarioSeleccionado = { id: 0, nombre: '', email: '' };
    this.modoEdicion = false;
  }

  // Método para editar un usuario existente
  editarUsuario(usuario: IUsuario) {
    this.usuarioSeleccionado = { ...usuario };
    this.modoEdicion = true;
  }

  // Método para borrar un usuario existente
  borrarUsuario(usuario: IUsuario) {
    const confirmacion = confirm(`¿Está seguro que desea borrar a ${usuario.nombre}?`);
    if (confirmacion) {
      this.usuarios = this.usuarios.filter(u => u.id !== usuario.id);
    }
  }

}
