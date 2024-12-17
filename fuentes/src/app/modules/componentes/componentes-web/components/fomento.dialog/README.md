# Fomento-dialog

El componente lib-fomento-dialog es un diálogo personalizable en Angular, que permite a los desarrolladores crear modales con diferentes tamaños, un botón de cierre configurable y la opción de mostrar el botón de cierre (X) en distintas posiciones. Utiliza Angular Material para los iconos y botones.

## Instalación

Antes de comenzar, asegúrate de tener instalada la librería `@angular/material`. Si aún no lo has hecho, puedes instalarla ejecutando el siguiente comando:

```bash
npm install --save @angular/material
```

Luego, importa el módulo `MatDialogModule` en tu módulo Angular:

```typescript
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
	imports: [
		// ...otros módulos
		MatDialogModule,
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

Integrar el componente `lib-fomento-Dialog` en tu aplicación Angular es sencillo. Aquí tienes un ejemplo de cómo utilizarlo en tu plantilla:

```html
<lib-fomento-dialog [width]="width" [height]="height" [closeButton]="closeButton" [closeButtonPosition]="closeButtonPosition">
  <!-- Contenido dentro del modal -->
  <div dialog-content>
    <!-- Título centrado en el modal -->
    <div style="text-align: center; margin-bottom: 20px;">
      <h1 style="font-size: 24px; font-weight: bold;">Ejemplo de DIALOG</h1>
    </div>

    <!-- Botón para cerrar el modal debajo del contenido -->
    <div style="display: flex; justify-content: flex-end; margin-top: 20px;">
      <lib-fomento-button
        [label]="label"
        [theme]="theme"
        [icon]="icon"
        [disabled]="disabled"
        [aria_label]="aria_label"
        [disableRipple]="disableRipple"
        (click)="dialog.closeDialog()">
      </lib-fomento-button>
    </div>
  </div>
</lib-fomento-dialog>

```

```ts
  // En el componente padre
import { Component, ViewChild } from '@angular/core';
import { FomentoDialogComponent } from 'path/to/fomento.dialog.component';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
})
export class ExampleComponent {
  width = '65%';
  height = '80%';
  closeButton = true;
  closeButtonPosition: 'left' | 'right' = 'right';

  @ViewChild(FomentoDialogComponent) dialog!: FomentoDialogComponent;

  // Propiedades para el botón dentro del modal
  label = 'CERRAR';
  theme = 'secondary';
  icon = '';
  disabled = false;
  aria_label = 'Cerrar el diálogo';
  disableRipple = true;

  openModal() {
    this.dialog.openDialog();
  }
}

```

## Props

| Prop       |   Tipo   | Descripción                                                             |
| :----      |  :----:  | :---------------------------------------------------------------------- |
| width      |  string  | Permite modificar el tamaño del desplegable, por defecto presenta '80%' |
| height     |  string  | Permite modificar el alto del desplegable, por defecto presenta 40%.    | 
| closeButton|  boolean | Indica si el botón de cierre (X) es visible. Por defecto es true.|
|closeButtonPosition	|'left' | 'right'|	Posición del botón de cierre (X). Puede estar a la izquierda (left) o derecha (right). Valor por defecto: 'right'. |


## Métodos

openDialog()
Este método abre el diálogo con los valores de width, height y otras propiedades configuradas. Se debe llamar al método desde el componente padre cuando se quiera abrir el modal.

closeDialog()
Este método cierra el diálogo. Se puede llamar desde el botón de cierre dentro del modal o cualquier otro elemento en la aplicación que necesite cerrar el diálogo.

## Nota
Asegúrate de que tu aplicación carga las fuentes de Material Icons si no están incluidas en tu proyecto. Puedes hacerlo agregando este enlace en tu index.html:

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
