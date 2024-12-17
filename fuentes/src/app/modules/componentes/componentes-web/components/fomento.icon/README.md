# Fomento-Icon

`lib-fomento-Icon` es un componente Angular que simplifica la creación de iconos en tu aplicación. Este componente, parte de la colección de Web Components de Angular y utiliza la librería `@matter` para proporcionar una variedad de opciones de personalización para el icono.

## Instalación

Antes de comenzar, asegúrate de tener instalada la librería `@angular/material`. Si aún no lo has hecho, puedes instalarla ejecutando el siguiente comando:

```bash
npm install --save @angular/material
```

Luego, importa el módulo `MatIconModule` en tu módulo Angular:

```typescript
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	imports: [
		// ...otros módulos
		MatIconModule,
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

Integrar el componente `lib-fomento-Icon` en tu aplicación Angular es sencillo. Aquí tienes un ejemplo de cómo utilizarlo en tu plantilla:

    ```html
     <lib-fomento-icon
        [typeStyle]="typeStyle"
        [icon]="icon"
        [color]="color"
        [svgIcon]="svgIcon"
        [fontSet]="fontSet"
        [inline]="inline"
        [fontIcon]="fontIcon">
    </lib-fomento-icon>
    ```

### Propiedades de Entrada (`@Input`)

#### Atributos de `lib-fomento-Icon`

- **typeStyle (string):** Establece el estilo del botón.
- **color (string):** Establece el color del ícono.
- **icon (string):** Nombre del ícono para Material Icons.
- **fontSet (string):** Conjunto de fuentes que forman parte del icono.
- **svgIcon (string):** Nombre del icono en el conjunto de iconos SVG.
- **fontIcon (string):** Nombre de un icono dentro de un conjunto de fuentes.
- **inline (boolean):** Si el ícono debe estar en línea, dimensionar automáticamente el ícono para que coincida con el tamaño de fuente del elemento que contiene el ícono.

Ajusta estas propiedades según tus necesidades para personalizar la apariencia y el comportamiento del icono.

¡Disfruta utilizando `lib-fomento-Button` en tu aplicación Angular!
