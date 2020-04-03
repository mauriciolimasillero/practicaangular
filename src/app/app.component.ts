import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['.activo{background:green;}']
})
export class AppComponent {
  mensaje = 'Curso de Angular';
  nombre = 'Luis';

  getNombre(){
    return this.nombre;
  }

  imagenURL = 'http://lorempixel.com/400/200/'
  botonStatus = true;
  isActive = true;
}
