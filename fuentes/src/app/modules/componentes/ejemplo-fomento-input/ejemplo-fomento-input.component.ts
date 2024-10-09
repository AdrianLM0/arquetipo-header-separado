import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejemplo-fomento-input',
  templateUrl: './ejemplo-fomento-input.component.html',
  styleUrls: ['./ejemplo-fomento-input.component.scss'],
})
export class EjemploFomentoInputComponent {
  ejemploForm: FormGroup;

  // Atributos para el input
  typeStyle = 'material';
  msgError = '';
  msgHelp = 'Ex. pat@example.com';
  label = 'Correo Electrónico';
  id = 'inputCorreo';
  name = 'correo';
  typeMaterial = 'email';
  valueMatter = '';
  readonly = false;
  disabled = false;
  required = true;
  placeholder = 'Correo Electrónico';

  constructor(private fb: FormBuilder) {
    // Inicialización del formulario reactivo
    this.ejemploForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
    });

    // Suscribirse a los cambios de estado para manejar errores
    this.ejemploForm.statusChanges.subscribe(() => {
      this.setValidationMessages();
    });
  }

  // Función para manejar el cambio en el valor del input
  onInputChange(value: string): void {
    this.valueMatter = value;
    this.setValidationMessages();
  }

  // Función para establecer mensajes de error según la validación del formulario
  private setValidationMessages(): void {
    const correoControl = this.ejemploForm.get('correo');
    if (correoControl?.invalid && correoControl?.touched) {
      if (correoControl.errors?.['required']) {
        this.msgError = 'El correo es requerido.';
      } else if (correoControl.errors?.['email']) {
        this.msgError = 'Debe ser un correo electrónico válido.';
      }
    } else {
      this.msgError = '';
    }
  }

}
