# Fomento-expansion

`lib-fomento-expansion` es un componente Angular que simplifica la creación de componentes de tipo paneles de expansion. Este componente, parte de la colección de Web Components de Angular.

## Instalación

Antes de comenzar, asegúrate de tener instalada la librería `@angular/material`. Si aún no lo has hecho, puedes instalarla ejecutando el siguiente comando:

```bash
npm install --save @angular/material
```

Luego, importa el módulo `MatExpansionModule` en tu módulo Angular:

```typescript
import { MatExpandionModule } from '@angular/material/expansion';

@NgModule({
	imports: [
		// ...otros módulos
		MatExpansionModule,
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

Integrar el componente `lib-fomento-Expansion` en tu aplicación Angular es sencillo. Aquí tienes un ejemplo de cómo utilizarlo en tu plantilla:

    ```html
   <lib-fomento-expansion-panel 
      [hideToggle]="hideToggle" 
      [togglePosition]="togglePosition" 
      [displayMode]="displayMode"
      [disabled]="disabled" 
      [expanded]="expanded"
      [collapsedHeight]="collapsedHeight" 
      [expandedHeight]="expandedHeight"
      [panelTitle]="panelTitle"
      [panelDescription]="panelDescription"
      [panelContent]="panelContent">
   </lib-fomento-expansion-panel>
    ```

### Propiedades de Entrada (`@Input`)

#### Atributos de `lib-fomento-expansion`

- **disdisplayMode (MatAccordionDisplayMode):** Mode de viasualización de los paneles de expansión. Hay dos modos default: se coloca un espacion al rededor de cualquier panel expandido o flat: no se coloca ningún espacio a rededor de los paneles expandidos, mostrando todos los paneles a la misma elevación.
- **hideToggle (boolean):** Si el indicador de expansión debe ocultarse.
- **multi (boolean):** Si el acordeón debería permitir múltiples elementos de acordeón expandidos simultaneamente.
- **togglePosition (MatAccordionTogglePosition):** La posición del indicador de expansión, puede ser "after" o "before".
- **id (string):** Establece un identificador.
- **disabled (boolean):** Si se deshabilita el panel de expansión.
- **expanded (boolean):** Si se mantiene expandido el panel de expansión.
- **collapsedHeight (string):** Altura del encabezado mientras el panel esta colapsado, se indica en píxeles.
- **expandedHeight (string):** Altura del encabezado mientras se expande el panel, se indica en píxeles.
- **panelTitle (string):** Texto del título del panel de expansión.
- **panelDescription (string):** Texto de la descripción del encabezado del panel.
- **panelContent (string):** Texto del contenido principal del panel.

Ajusta estas propiedades según tus necesidades para personalizar la apariencia y el comportamiento del icono.

¡Disfruta utilizando `Fomento-expansion` en tu aplicación Angular!
