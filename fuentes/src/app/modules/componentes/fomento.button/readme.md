# Fomento-Button

`lib-fomento-Button` es un componente Angular que simplifica la creación de botones en tu aplicación. Este componente, parte de la colección de Web Components de Angular, utiliza la librería `@matter` para proporcionar una variedad de opciones de personalización tanto para el botón en sí como para su contenido.

## Instalación

Asegúrate de tener importado el web-component `FomentoButtonComponent` en tu componente o módulo Angular:

```typescript
import '@matter/matter-button/dist/matter-button';
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

Integrar el componente `FomentoButton` en tu aplicación Angular es sencillo. Aquí tienes un ejemplo de cómo utilizarlo en tu plantilla:

```html
<lib-fomento-button
	typeStyle="material"
	label="Etiqueta"
	theme="primary"
	icon="book"
	href="https://www.juntadeandalucia.es/"
	target="_self"
	[disabled]="false"
	aria_label="texto alt"
	badge="2"
	[disableRipple]="true"
></lib-fomento-button>
```

### Propiedades de Entrada (`@Input`)

#### Atributos de `Fomento-Button`

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

Ajusta estas propiedades según tus necesidades para personalizar la apariencia y el comportamiento del botón.

¡Disfruta utilizando `Fomento-Button` en tu aplicación Angular!
