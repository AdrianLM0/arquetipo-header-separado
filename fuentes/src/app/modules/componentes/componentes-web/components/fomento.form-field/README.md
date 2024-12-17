# Fomento-Form-field

`lib-fomento-Form-Field` es un componente Angular que simplifica la creación de campos de formulario en tu aplicación. Este componente, parte de la colección de Web Components de Angular

## Instalación

Antes de comenzar, asegúrate de tener instalada la librería `@angular/material`. Si aún no lo has hecho, puedes instalarla ejecutando el siguiente comando:

```bash
npm install --save @angular/material
```

Luego, importa el módulo `MatFormFieldModule` en tu módulo Angular:

```typescript
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
	imports: [
		// ...otros módulos
		MatFormFieldModule,
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
    <lib-fomento-form-field
    [appearance]="appearance"
    [color]="color"
    [floatLabel]="floatLabel"
    [hideRequiredMarker]="hideRequiredMarker"
    [hintLabel]="hintLabel"
    [subscriptSizing]="subscriptSizing"
    [type]="'selectFomento'" >
    </lib-fomento-form-field>
    ```

### Propiedades de Entrada (`@Input`)

#### Atributos de `lib-fomento-form-field`

- **appearance (MatFormFieldAppearance):** Establece el estilo y apariencia del formulario.
- **color (ThemePalette):** La paleta de colores para el campo del formulario.
- **floatLabel (FloatLabelType):** Si la etiqueta siempre debe flotar o flotar mientras el usuario escribe.
- **hideRequiredMarker (boolean):** Si el marcador requerido debe ocultarse.
- **hintLabel (string):** Texto para la sugerencia del campo del formulario.
- **subscriptSizing (SubscriptSizing):** Si el campo del formulario debe reservar espacio para una línea de texto de sugerencia/error (predeterminado) o hacer que el espaciado aumente desde 0px según sea necesario según el tamaño del contenido de sugerencia/error. Tenga en cuenta que cuando se utiliza el tamaño dinámico, se producirán cambios en el diseño cuando cambie el texto de sugerencia/error.

Ajusta estas propiedades según tus necesidades para personalizar la apariencia y el comportamiento del formulario.

¡Disfruta utilizando `Fomento-form-field` en tu aplicación Angular!
