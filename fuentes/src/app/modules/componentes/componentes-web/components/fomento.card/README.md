# fomento.card

`fomento.card` es un componente Angular que proporciona una tarjeta estilizada con diversas opciones de personalización. Este componente forma parte de la colección de Web Components de Angular y utiliza las bibliotecas `@material` y `@matter` para asegurar una experiencia de usuario consistente.

## Instalación y servidor de desarrollo

Antes de comenzar, asegúrate de tener instalada la librería `@angular/material`. Si aún no lo has hecho, puedes instalarla ejecutando el siguiente comando:

```bash
npm install --save @angular/material
```

Luego, importa el módulo `MatCardModule` en tu módulo Angular:

```typescript
import { MatCardModule } from '@angular/material/card';

@NgModule({
	imports: [
		// ...otros módulos
		MatCardModule,
	],
	// ...otros metadatos del módulo
})
export class AppModule {}
```

Además, asegúrate de tener la librería `@matter` instalada e importada. Puedes instalarla ejecutando:

```bash
npm install --save @matter/matter-card
```

Luego, importa el componente `MatterCardComponent` en tu componente o módulo Angular:

```typescript
import '@matter/matter-card/dist/matter-card';
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

Una vez configuradas las dependencias, puedes utilizar el componente `FomentoCard` en tu aplicación Angular. Aquí hay un ejemplo de cómo puedes integrarlo en tu plantilla:

```html
<lib-fomento-card
	[title]="Título de la tarjeta"
	[size]="m"
	[text]="Texto de la tarjeta"
	[label]="Etiqueta del botón"
	[icon]="plus"
   [enableHover]="true"
></lib-fomento-card>
```

### Propiedades de Entrada (`@Input`)

- **title (string):** Define el título de la tarjeta.
- **size (string):** Especifica el tamaño de la tarjeta, las opciones son s, m l o xl.
- **text (string):** Proporciona el texto principal de la tarjeta.
- **label (string):** Establece la etiqueta del botón para el componente Button dentro de la tarjeta, si es vacío desparece el botón.
- **icon (string):** Icono para el componente MatterButton dentro de la tarjeta. Utiliza la librería Font Awesome (p. ej. para fa-house el valor de icon sería simplemente "house").
- **enableHover(boolean):** Booleano para activar o desactivar el hover sobre el card.

Asegúrate de ajustar estas propiedades según tus necesidades para personalizar la apariencia y el contenido de la tarjeta.



#### Nota

El botón está configurado de tal manera que si el label se encuentra vacío, desaparece, por lo que si se desea ocultar el botón, simplemente habrá que dejar el label vacío.