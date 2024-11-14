import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-fomento-input',
  templateUrl: './ejemplo-fomento-input.component.html',
  styleUrls: ['./ejemplo-fomento-input.component.scss'],
})
export class EjemploFomentoInputComponent {
  // Atributos para el input
  msgError = '';
  msgHelp = 'Ex. pat@example.com';
  label = 'Correo Electrónico';
  id = 'inputCorreo';
  name = 'correo';
  readonly = false;
  disabled = false;
  required = true;
  placeholder = 'Correo Electrónico';

  constructor() {

  }

}
