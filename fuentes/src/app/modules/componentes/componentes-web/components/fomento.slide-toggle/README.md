# Fomento-slide-toggle

`lib-fomento-slide-toggle` es un componente Angular que simplifica la creación de un control de encendido/apagado que se puede alternar haciendo clic.

## Instalación

Antes de comenzar, asegúrate de tener instalada la librería `@angular/material`. Si aún no lo has hecho, puedes instalarla ejecutando el siguiente comando:

```bash
npm install --save @angular/material
```

Luego, importa el módulo `MatSlideToggleModule` en tu módulo Angular:

```typescript
import { MatSlideToggleModule } from '@angular/material/slide-TOGGLE';

@NgModule({
	imports: [
		// ...otros módulos
		MatSlideToggleModule,
	],
	// ...otros metadatos del módulo
})
export class AppModule {}
```

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

## Ejemplo de uso

Integrar el componente `lib-fomento-slide-toggle` en tu aplicación Angular es sencillo. Aquí tienes un ejemplo de cómo utilizarlo en tu plantilla:

```html
<lib-fomento-slide-toggle
	(click)="clickChange($event)"
	[ariaDescribedby]="ariaDescribedby"
	[ariaLabel]="ariaLabel"
	[ariaLabelledby]="ariaLabelledby"
	[checked]="checked"
	[color]="color"
	[disableRipple]="disableRipple"
	[disable]="disable"
	[hideIcon]="hideIcon"
	[id]="id"
	[labelPosition]="labelPosition"
	[name]="name"
	[required]="required"
	[label]="label"
></lib-fomento-slide-toggle>
```

### Propiedades de Entrada (`@Input`)

#### Atributos de `lib-fomento-slide-toggle`

- **ariaDescribedby (string):** Se utiliza para establecer el atributo aria-describedby en el elemento de entrada subyacentes.
- **ariaLabel (string | null):** Se utiliza para establecer el atributo aria-label en el elemento de entrada subyacente.
- **ariaLabelledby (string | null):** Se utiliza para establecer el atributo aria-labelledby en el elemento de entrada subyacente.
- **checked (boolean):** Si el elemento de alternancia deslizante está marcado o no.
- **color (string | undefined):** Color del componente.
- **disableRipple (boolean):** Si el interruptor deslizante tiene una ondulación.
- **disable (boolean):** Si el cambio de diapositivas está deshabilitado.
- **hideIcon (booolean):** Si se debe ocultar el ícono dentro de la palanca de diapositivas.
- **id (string):** Una identificación única para la entrada de alternancia deslizante. Si no se proporciona ninguno, se generará automáticamente.
- **labelPosition ('before' | 'after'):** Si la etiqueta debe aparecer después o antes del cambio de diapositiva. El valor predeterminado es "after".
- **name (string | null):** El valor del nombre se aplicará al elemento de entrada si está presente.
- **required (boolean):** Si se requiere el cambio deslizante.
- **label (string):** Etiqueta que aparecerá a un lado del componente.

Ajusta estas propiedades según tus necesidades para personalizar la apariencia y el comportamiento del slide-toggle.

¡Disfruta utilizando `Fomento-slide-toggle` en tu aplicación Angular!
