# Fomento-Alerts

`fomento-Alerts` es un componente Angular que proporciona una barra de Alertas estilizada con diversas opciones de personalización. Este componente forma parte de la colección de Web Components de Angular y utiliza la biblioteca `@material` para asegurar una experiencia de usuario consistente.

## Instalación y servidor de desarrollo

Antes de comenzar, asegúrate de tener instalada la librería `@angular/material`. Si aún no lo has hecho, puedes instalarla ejecutando el siguiente comando:

```bash
npm install --save @angular/material
```

Asegúrate de tener instalada la librería `@angular-notifier`. Si aún no lo has hecho, puedes instalarla ejecutando el siguiente comando:

```bash
npm install --save angular-notifier
```

Luego, importa el módulo `NotifierModule ` en tu módulo Angular:

```typescript
import { NotifierModule } from 'angular-notifier';

@NgModule({
	imports: [
		// ...otros módulos
		NotifierModule,
	],
	// ...otros metadatos del módulo
})
export class AppModule {}
```

Es necesario importar el estilo global de angular-notifier en el archivo de estilos global de nuestra aplicacion (styles.scss), añadiendo el siguiente import:

```css
@import '../node_modules/angular-notifier/styles.css';
```

## Ejemplo de uso

Una vez configuradas las dependencias, puedes utilizar el componente `FomentoAlerts` en tu aplicación Angular. Aquí hay un ejemplo de cómo puedes integrarlo en tu plantilla:

En el typescript de nuestra aplicación, o del componente donde queramos mostrar las alertas, importamos el componente de la libreria y añadimos un @ViewChild de la siguiente manera:

```typescript
import { Component, ViewChild } from '@angular/core';
import {
	Notification,
	FomentoAlertsComponent,
} from 'i-rf-web-component-node-lib';

@Component({
	selector: 'prueba-alertas',
	templateUrl: './prueba-alertas.component.html',
	styleUrls: ['./prueba-alertas.component.scss'],
})
export class PruebaAlertas {
	@ViewChild(FomentoAlertsComponent, { static: true })
	notification: FomentoAlertsComponent;

	showNotification(
		notificationsArray: Notification[],
		tipo: string,
		botonCerrar?: boolean,
		showActionButtons?: boolean,
		primaryAction?: Function,
		secondaryAction?: Function,
		labelBotonera?: string,
		textoPrimerBoton?: string,
		textoSegundoBoton?: string,
	) {
		this.notification.showNotification(
			notificationsArray,
			tipo,
			botonCerrar,
			showActionButtons,
			(data) => this.logicaPrimerBoton(data),
			(data) => this.logicaSegundoBoton(data),
			labelBotonera,
			textoPrimerBoton,
			textoSegundoBoton,
		);
	}
}
```

En el html de nuestra aplicacion, o del componente donde queramos mostrar las alertas, añadimos la etiqueta siguiente:

```html
<lib-fomento-alerts></lib-fomento-alerts>
```

### Propiedades de Entrada (`@Input`) y Otras Propiedades de Configuración

```typescript

    notifications (Notification[]): Este parámetro de entrada es un arreglo de objetos Notification, cada uno conteniendo title (título) y message (mensaje). Este arreglo representa las notificaciones que se mostrarán al usuario.

    type (string): Este parámetro de entrada especifica el tipo de notificación a mostrar. Puede ser 'success', 'error', 'info', 'warning', etc. Se utiliza para determinar la plantilla de notificación que se debe mostrar (por ejemplo, customNotificationTmplSuccess para 'success').

    showCloseButton (boolean): Este parámetro opcional de entrada indica si se debe mostrar un botón para cerrar la notificación. Si se proporciona, sobrescribe el valor predeterminado (true).

    showActionButtons (boolean): Este parámetro opcional de entrada determina si se deben mostrar botones de acción en la notificación. Si se proporciona, sobrescribe el valor predeterminado (false).

    primaryAction (Function): Este parámetro opcional de entrada es una función que se ejecutará cuando el usuario haga clic en el botón de acción primario. Si no se proporciona, se utiliza una función vacía por defecto.

    secondaryAction (Function): Este parámetro opcional de entrada es una función que se ejecutará cuando el usuario haga clic en el botón de acción secundario. Al igual que primaryAction, si no se proporciona, se utiliza una función vacía por defecto.

    labelBotonera (string): Este parámetro opcional de entrada es una etiqueta para los botones de acción. Si se proporciona, sobrescribe el valor predeterminado ('ACCIÓN').

    textoPrimerBoton (string): Este parámetro opcional de entrada es el texto del primer botón de acción. Si se proporciona, sobrescribe el valor predeterminado ('CANCELAR').

    textoSegundoBoton (string): Este parámetro opcional de entrada es el texto del segundo botón de acción. Si se proporciona, sobrescribe el valor predeterminado ('ACEPTAR').
```

## Los tipos son los siguientes:

- `success`: Se utiliza para mostrar mensajes exitosos o informativos.
- `info`: Se utiliza para mostrar información relevante al usuario.
- `warning`: Se utiliza para alertar al usuario sobre un evento que no es grave pero requiere atención.
- `error`: Se utiliza para alertar al usuario un error o un problema que ha ocurrido.

Cada uno de estos tipos se representa con diferentes colores y íconos para diferenciar visualmente el nivel de importancia o el contexto del mensaje.

# Configuración de Opciones de Alertas Personalizado

Este componente incluye una configuracion custom de Angular-Notifier, que adapta su estilo y opciones de personalización, utilizando `NotifierOptions`.
Dicha configuracion viene incluida en el module del componente.
El NotifierOptions en Angular Notifier es un objeto de configuración utilizado para personalizar la apariencia, comportamiento y animaciones de las notificaciones dentro de una aplicación Angular que utiliza el paquete angular-notifier. Este objeto permite definir cómo y dónde se muestran las notificaciones, su estilo visual, cómo interactúan con el usuario y cómo se animan al aparecer y desaparecer.

A continuación se muestra un ejemplo de cómo configurar `customNotifierOptions` en Angular Notifier. Esta configuración demuestra varias opciones y sus respectivas funcionalidades:

```typescript
const customNotifierOptions: NotifierOptions = {
	position: {
		// Define la posición de las notificaciones en la pantalla
		horizontal: {
			position: 'middle', // Posición horizontal (izquierda, centro, derecha)
			distance: 12, // Distancia en píxeles desde el borde horizontal
		},
		vertical: {
			position: 'top', // Posición vertical (arriba, abajo)
			distance: 0, // Distancia en píxeles desde el borde vertical
			gap: 10, // Espacio entre múltiples notificaciones
		},
	},
	theme: 'material', // Establece el tema visual de las notificaciones (ej: material)
	behaviour: {
		autoHide: false, // Determina si la notificación se oculta automáticamente
		stacking: 1, // Número máximo de notificaciones que se muestran al mismo tiempo
	},
	animations: {
		// Configuración de animaciones para las notificaciones
		enabled: true, // Habilita o deshabilita las animaciones
		show: {
			preset: 'fade', // Animación al mostrar (ej: fade, slide)
			speed: 300, // Velocidad de la animación al mostrar
			easing: 'ease', // Tipo de efecto de la animación al mostrar
		},
		hide: {
			preset: 'fade', // Animación al ocultar (ej: fade, slide)
			speed: 300, // Velocidad de la animación al ocultar
			easing: 'ease', // Tipo de efecto de la animación al ocultar
			offset: 50, // Desplazamiento para la animación al ocultar
		},
		shift: {
			speed: 300, // Velocidad de la animación al desplazar
			easing: 'ease', // Tipo de efecto de la animación al desplazar
		},
		overlap: 150, // Tiempo en milisegundos antes de que comience una nueva animación
	},
};
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
