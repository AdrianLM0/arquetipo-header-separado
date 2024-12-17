import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RequestApiService } from '@fomento/i-rf-logic-component-node-lib';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lib-fomento-formulario',
  templateUrl: './fomento.formulario.component.html',
  styleUrls: ['./fomento.formulario.component.scss'],
})
export class FomentoFormularioComponent implements OnInit {
  @Input() form_config; // Configuración del formulario
  @Input() endpointUrl: string; // Recibe la URL del endpoint desde el componente padre

  @Output() formSaved = new EventEmitter<void>(); // Evento para notificar que el formulario ha sido guardado
  @Output() changeSelectorAction = new EventEmitter<unknown>(); // Emite un evento cuando se cambia la opción de algún selector del formulario.
  @Output() auxAction = new EventEmitter<unknown>();
  @Output() formDataEvent = new EventEmitter<any>();


  form: FormGroup = this.fb.group({}); // Almacena el formulario.
  private subscription: Subscription = new Subscription();
  expanded: number[] = [];

  badge;
  error: any;

  // Otras entradas de configuración del formulario
  @Input() reset_button = 'CANCELAR';
  @Input() submit_button = 'GUARDAR';
  @Input() show_header = true;
  @Input() showSubmit = true;
  @Input() showReset = true;
  @Input() showAux = false;
  @Input() validate_form = false;
  @Input() expansion_form = false;
  @Input() alt = false;
  @Input() alt_label = '';
  @Input() aux_button: string;



  constructor(private fb: FormBuilder, private requestApi: RequestApiService) { }

  ngOnInit(): void {
    this.initializeForm();
    this.expandAll();

  }

  // Inicializa el formulario según la configuración proporcionada
  initializeForm() {
    this.form = this.fb.group({});

    if (this.form_config && this.form_config.sections) {
      this.form_config.sections.forEach((section) => {
        if (section.groups) {
          section.groups.forEach((group) => {
            if (group.rows) {
              group.rows.forEach((row) => {
                if (row.filters) {
                  row.filters.forEach((filter) => {
                    const control = this.fb.control(filter.initialValue || '');

                    if (filter.type === 'input' && filter.validations) {
                      const validators = [];
                      filter.validations.forEach((validation) => {
                        if (validation.validator) {
                          validators.push(validation.validator);
                        }
                      });
                      control.setValidators(validators);
                    }

                    this.form.addControl(filter.formControlName, control);
                  });
                }
              });
            }
          });
        }
      });
    }
  }

  // Limpia el formulario
  cleanForm() {
    this.form.reset();
  }

  // Llama cuando se hace submit del formulario
  submitForm() {

    const formData = this.getFormData(); // Obtener los datos del formulario

    this.formDataEvent.emit(formData); // Emitimos los datos al componente padre

    this.form.reset(); 

      // Forzar los campos visualmente a vaciarse
  Object.keys(this.form.controls).forEach(key => {
    this.form.get(key)?.setValue(''); // Setea cada campo a un string vacío
    this.form.get(key)?.markAsPristine(); // Marca el campo como limpio
    this.form.get(key)?.markAsUntouched(); // Marca el campo como no tocado
    this.form.get(key)?.updateValueAndValidity(); // Actualiza el valor y la validez
  });
  }



  guardarFormulario(body: any): void {
    // Hacer la petición POST usando RequestApiService
   this.requestApi.post(this.endpointUrl, body).subscribe({
      next: (response) => {

        this.formSaved.emit(); // Emitir evento para notificar al componente padre
      },
      error: (error) => {

      }
    });
  }





  // Expande o contrae la sección del formulario
  expand(i: number) {
    if (this.expanded.includes(i)) {
      this.expanded.splice(this.expanded.indexOf(i), 1);
    } else {
      this.expanded.push(i);
    }
  }

  // Expande todas las secciones
  expandAll() {
    if (this.expanded.length === 0) {
      this.expanded = Array.from(Array(this.form_config.sections.length).keys());
    } else {
      this.expanded = [];
    }
  }

  // Método para obtener los datos del formulario de forma dinámica
  getFormData() {
    const data = {};

    this.form_config.sections.forEach((section) => {
      section.groups.forEach((group) => {
        group.rows.forEach((row) => {
          row.filters.forEach((filter) => {
            // Obtenemos el valor dinámicamente usando el nombre del control
            const controlName = filter.formControlName;
            if (controlName) {
              data[controlName] = this.form.value[controlName];
            }
          });
        });
      });
    });

    if (this.form_config.showTable) {
      data['tableData'] = this.form_config.tableData;
    }
    return data;
  }



  onOptionChange(formControlName: string, value) {
    const data = {};
    data['formControlName'] = formControlName;
    data['value'] = value;
    this.changeSelectorAction.emit(data);
  }

  validateFormData() {
    const isValidData = true;
    const formControls = this.form.controls;

    for (const controlName in formControls) {
      if (Object.prototype.hasOwnProperty.call(formControls, controlName)) {
        formControls[controlName].setErrors(null);
      }
    }

    return isValidData;
  }

  auxEvent() {
    this.auxAction.emit(this.getFormData());
  }

  // Calcula la cantidad de inputs llenados en el formulario
  getBadge() {
    let i = 0;
    document.querySelectorAll('.mat-mdc-input-element').forEach((x: HTMLInputElement) => {
      if (x.value.length > 0) {
        i += 1;
      }
    });
    this.badge = String(i);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
