# Fomento-button-toggle

`lib-fomento-button-toggle` es un componente Angular que simplifica la creación de interruptores de encendido/apagado con la apariencia de un botón. Este componente forma parte de la colección de Web Components de Angular.

## Instalación

Antes de comenzar, asegúrate de tener instalada la librería `@angular/material`. Si aún no lo has hecho, puedes instalarla ejecutando el siguiente comando:

```bash
npm install --save @angular/material
```

Luego, importa el módulo `MatButtonToggleModule` en tu módulo Angular:

```typescript
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
	imports: [
		// ...otros módulos
		MatButtonToggleModule,
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

Integrar el componente `lib-fomento-button-toggle` en tu aplicación Angular es sencillo. Aquí tienes un ejemplo de cómo utilizarlo en tu plantilla:

    ```html
    <lib-fomento-button-toggle (click)="clickbutton($event)"
        [disabled]="disabled"
        [appearance]="appearance"
        [name]="name"
        [value]="value"
        [ariaLabel]="ariaLabel"
        [ariaLabelledby]="ariaLabelledby"
        [checked]="checked"
        [disableRipple]="disableRipple"
        [id]="id"
        [label]="label"
        [multiple]="multiple"
        [toggleGroup]="toggleGroup">
    </lib-fomento-button-toggle>
    ```

### Propiedades de Entrada (`@Input`)

#### Atributos de `lib-fomento-button-toggle`

- **appearance (MatButtonToggleAppearance):** Define el estilo visual del botón. Puede tomar dos valores: 
'standard': Es el estilo por defecto, con un diseño moderno y consistente con Angular Material.
'legacy': Estilo antiguo que puede utilizarse para mantener compatibilidad con versiones anteriores.
Este atributo permite cambiar el aspecto visual del componente para ajustarse a las necesidades de diseño de tu aplicación.
- **vertical (boolean):** Define la disposición de los botones dentro del grupo MatButtonToggleGroup.
Si se establece en true, los botones del grupo se mostrarán en una disposición vertical, es decir, uno debajo del otro.
Si se establece en false (que es el valor predeterminado), los botones se mostrarán en una disposición horizontal, uno al lado del otro.
- **disabled (boolean):** Indica si el botón está deshabilitado o no.
Si está configurado como true, el botón no será interactivo, es decir, no podrá ser clicado ni activado por el usuario.
- **ariaLabel (string):** Proporciona una etiqueta accesible al botón mediante el atributo aria-label.
Es útil para describir la funcionalidad del botón a usuarios que usan tecnologías de asistencia como lectores de pantalla.
- **ariaLabelledby (string):** Atributo que puede referenciar el id de otro elemento que actúa como etiqueta del botón.
Es útil cuando ya existe un texto en la interfaz que describe el botón, para evitar duplicar la información.
- **checked (boolean):** Define si el botón está seleccionado o no.
- **disableRipple (boolean):** Desactiva el efecto "ripple" (onda de expansión) que se muestra cuando se hace clic en el botón.
Por defecto, Angular Material usa este efecto para indicar que el botón ha sido pulsado.
Si se configura como true, el efecto visual se deshabilitará, lo que puede ser útil para mantener un diseño más sencillo.
- **label (string):** Representa el texto visible asociado a cada botón dentro del grupo MatButtonToggle.
Este texto se muestra dentro del botón y sirve para describir la acción o el propósito del botón de forma clara al usuario.
- **id (string):** Identificador único del botón.
- **value (string):** Valor asignado al botón seleccionado.
- **name (string):** El atributo 'nombre' de HTML se utiliza para identificar el campo en un formulario. 
Se usa para identificar el botón o grupo de botones cuando se envía un formulario.
- **multiple (boolean):** Indica si el grupo de botones permite seleccionar varios botones a la vez o solo uno.
Si multiple es true, varios botones dentro del grupo pueden estar seleccionados simultáneamente.
Si multiple es false, se comporta como un grupo de botones de tipo radio, donde solo un botón puede estar seleccionado al mismo tiempo.
- **toggleGroup (Object[]):** En caso de ser 'multiple' la lista con las especificaciones de los distintos botones:

```ts
let toggleGroup = [
	{
		disabled: false,
		ariaLabel: 'Bold',
		ariaLabelledby: 'Bold',
		checked: false,
		disabledRipple: true,
		id: 'bold',
		value: 'bold',
		name: 'bold',
		label: 'Bold',
	},
];
```

Ajusta estas propiedades según tus necesidades para personalizar la apariencia y el comportamiento del botón.

¡Disfruta utilizando `Fomento-button-toggle` en tu aplicación Angular!
