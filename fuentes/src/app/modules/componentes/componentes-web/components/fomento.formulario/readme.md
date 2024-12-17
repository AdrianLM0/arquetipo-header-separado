# fomento-formulario

lib-fomento-formulario es un generador de formularios dinámicos que además contiene validaciones sobre los campos de tipo input.

## Instalación y servidor de desarrollo

Antes de comenzar, asegúrate de tener instalada la librería `@angular/material`. Si aún no lo has hecho, puedes instalarla ejecutando el siguiente comando:

```bash
npm install --save @angular/material
```

Luego, importa el módulo `MatFormFieldModule` en tu módulo Angular:

```typescript
import { MatFormFieldModuke } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	imports: [
		// ...otros módulos
		MatMenuModule,
		FormsModule,
		ReactiveFormsModule,
	],
	// ...otros metadatos del módulo
})
export class AppModule {}
```

También será necesario importar dentro de tu componente el servicio que dará soporte a las validaciones.

```typescript
import { FomentoValidationService } from "@fomento/i-rf-logic-component-node-lib";
##

Para levantar el web components en local, se deberá seguir una serie de pasos en el orden correcto, ya que sino no se podrá iniciar correctamente. Los pasos que se deben seguir son los siguientes:

1. Eliminar el fichero .npmrc para así eliminar los repositorios y usuarios almacenados y actualizarlos con los datos necesarios correctos.
   ```
   rm C:\Users\{{USER}}\.npmrc
   ```
2. Acceder al [repositorio de web-components del MSD](https://gitlab.juntadeandalucia.es/pt-exp-webcomponents) y seleccionar el que se necesite.
3. Clicar en el botón "Clone" y copiar el enlace HTTPS.
4. En local, se debe posicionar en la carpeta donde se quiera descargar el web-component y abrir una consola de comandos. A continuación, ejecutar el siguiente:
   ```
   git clone {{enlace HTTPS copiado}}
   ```
   Tras la ejecución de este comando, se habrá creado la carpeta del proyecto web-component que se ha seleccionado.
5. Se accede a esta carpeta y se procede a configurar el archivo npm para acceder a los átomos que conforman la molécula:
   ```
   npm config set @matter:registry=https://nexus.paas.junta-andalucia.es/repository/msd.npm-private/
   ```
6. Se instalan las dependencias del web-component:
   ```
   npm i
   ```
7. Levantar el proyecto con el servidor de webpack:
   ```
   npm start
   ```
8. El proyecto se podrá visualizar en tiempo real en la siguiente ruta: [http://localhost:3000/](http://localhost:3000/)
```

## Uso

Una vez configuradas las dependencias, puedes utilizar el componente FomentoFormulario en tu aplicación Angular. Aquí hay un ejemplo de cómo puedes integrarlo en tu plantilla:

```html
<lib-fomento-formulario 
        [form_config]="form_config"
        [reset_button]="reset_button"
        [submit_button]="submit_button"
        [showSubmit]="showSubmit"
        [showReset]="showReset"
		[validate_form]="true"
		[expansion_form]="true"
        (submitAction)="prueba($event)"
        [alt]="true"
        alt_label="HOLA"
      ></lib-fomento-formulario>
```

## Props

- **form_config (string):**EndPoint / JSON con los datos de configuración del formulario, a continuación un ejemplo de su estructura. [Ejemplo form_config](#ejemplo-form_config)
- **endpointUrl (string):**Recibe la URL del endpoint desde el componente padre.
- **reset_button (string):**Texto que contiene la etiqueta del boton de reset.
- **submit_button(string):**Texto que contiene la etiqueta del boton de envío.
- **show_header (boolean):**Permite mostrar u ocultar el header.
- **showSubmit (boolean):** Muestra u oculta el botón de enviar.
- **showReset (boolean):** Muestra u oculta el botón de reset.
- **validate_form (boolean):** Si quieres que el formulario sea validado.
- **expansion_form (boolean):** Si el formulario es expansible o no.
- **aux_button (string):** Contenido de la etiqueta del botón 'Auxiliar' (abajo izquierda).
- **alt (boolean):** Permite esconder o mostrar arriba a la derecha un botón alternativo.
- **alt_label (string):** Etiqueta del botón alternativo.
- **showAux(boolean):**Permite ocultar o mostrar el botón auxiliar 
 
## Outputs

- **formSaved:**Evento para notificar que el formulario ha sido guardado
- **changeSelectorAction:**Emite un evento cuando se cambia la opción de algún selector del formulario.
- **auxAction:**Emite el formulario al pulsar el botón auxiliar
- **formDataEvent:**Emite los datos del mormulario al pulsar el botón de submit

## Anexo

### Ejemplo form_config

```
{
		sections: [
			{
				label: 'Información usuario',
				groups: [
					{
						label: 'Expediente',
						rows: [
							{
								filters: [
									{
										header: 'Prueba de validacion maxLength',
										formControlName: 'validacionMaxLength',
										type: 'input',
										validations: [
											{
												validator: Validators.maxLength(2),
												message: 'No se permiten más de dos caracteres',
											},
										],
									},
									{
										header: 'Prueba de validacion email',
										formControlName: 'validacionEmail',
										type: 'input',
										validations: [
											{
												validator: Validators.email,
												message: 'El email introducido no es válido',
											},
										],
									},
									{
										header: 'Prueba de validacion required',
										formControlName: 'validacionRequired',
										type: 'input',
										validations: [
											{
												validator: Validators.required,
												message: 'El campo es obligatorio',
											},
										],
									},
									{
										header: 'Prueba de validacion minLength',
										formControlName: 'validacionMinLength',
										type: 'input',
										validations: [
											{
												validator: Validators.minLength(3),
												message: 'El campo debe tener minimo tres carácteres',
											},
										],
									},

									{
										header: 'Código territorial',
										formControlName: 'codigoTerritorial',
										type: 'select',
										selectOptions: [
											{ value: '0', description: 'SÍ' },
											{ value: '1', description: 'NO' },
										],
									},
									{
										header: 'Identificador interesado',
										label: 'NIF',
										formControlName: 'nifInteresado',
										type: 'checkbox',
									},
									{
										header: 'Fecha de creación - Mínimo',
										formControlName: 'fechaCreacionMin',
										type: 'date',
									},
								],
							},
						],
					},
					{
						label: 'Dirección',
						rows: [
							{
								filters: [
									{
										header: 'Provincia',
										formControlName: 'provincia',
										type: 'select',
										selectOptions: [
											{ value: '0', description: 'Sevilla' },
											{ value: '0', description: 'Córdoba' },
											{ value: '0', description: 'Málaga' },
											{ value: '0', description: 'Granada' },
											{ value: '0', description: 'Almeria' },
											{ value: '0', description: 'Jaén' },
											{ value: '0', description: 'Huelva' },
											{ value: '0', description: 'Cádiz' },
										],
									},
									{
										header: 'Municipio',
										formControlName: 'municipio',
										type: 'select',
										selectOptions: [{ value: '0', description: 'Sevilla' }],
									},
									{
										header: 'Economía',
										formControlName: 'economia',
										type: 'radio',
										radioOptions: [
											{ label: 'Opción 1', value: 'true' },
											{ label: 'Opción 2', value: 'false' },
										],
									},
								],
							},
						],
					},
				],
			},
			{
				label: 'Solicitante',
				groups: [
					{
						rows: [
							{
								filters: [
									{
										header: 'Referencia de la liquidación',
										formControlName: 'referenciaLiquidacion',
										type: 'input',
									},
									{
										header: 'Código territorial',
										formControlName: 'codigoTerritorial',
										type: 'select',
										selectOptions: [
											{ value: '0', description: 'SÍ' },
											{ value: '1', description: 'NO' },
										],
									},
								],
							},
						],
					},
				],
			},
		],
	};
```


## Atributos de `Fomento-Button (<lib-fomento-button>)`

- **typeStyle (string):** Establece el estilo del botón, las opciones son 'material' o 'matter'.
- **label (string):** Texto del botón.
- **theme (string):** Tipo de botón que queremos mostrar, las opciones son: 'primary' y 'secondary'.
- **icon (string):** Especifica el nombre del icono. Utiliza la librería Font Awesome (p. ej. para fa-house el valor de icon sería simplemente 'house').
- **href (string):** URL a la que el botón redirige (si es un botón de enlace).
- **target (string):** Especifica dónde abrir el enlace vinculado, por defecto '\_self'.
- **disabled (boolean):** Indica si el componente está deshabilitado, por defecto habilitado.
- **aria_label (string):** Texto descriptivo para usuarios de tecnologías de asistencia.
- **disableRipple (boolean):** Desactiva la animación de ripple del botón. Por defecto a true
- **badge ():** Si `badge` es distinto a '' puedes añadir el componente `lib-fomento-badge` a tu Fomento-Button directamente

### Propiedades de Entrada (`@Output`)

- **(onclickevent):** Funciona de forma similar el evento '(click)'

````

