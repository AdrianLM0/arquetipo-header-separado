# Fomento-Autocomplete

`Fomento-Autocomplete` es un componente Angular que permite generar un selector junto a un buscador, de forma que es posible filtrar entre las opciones a elegir. Este componente, parte de la colección de Web Components de Angular.

## Instalación

Antes de comenzar, asegúrate de tener instalada la librería `@angular/material`. Si aún no lo has hecho, puedes instalarla ejecutando el siguiente comando:

```bash
npm install --save @angular/material
```

Luego, importa el módulo `MatAutocompleteModule` en tu módulo Angular:

```typescript
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
	imports: [
		// ...otros módulos
		MatAutocompleteModule,
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

Integrar el componente `Fomento-Autocomplete` en tu aplicación Angular es sencillo. Aquí tienes un ejemplo de cómo utilizarlo en tu plantilla:

    ```html
    <lib-fomento-autocomplete
        [requireSelection]="requireSelection"
        [panelWidth]="panelWidth"
        [autoActiveFirstOption]="autoActiveFirstOption"
        [disableRipple]="disabledRipple"
        [hideSingleSelectionIndicator]="hideSingleSelectionIndicator"
        [ariaLabel]="ariaLabel"
        [ariaLabelledby]="ariaLabelledby"
        [label]="label";
        [placeholder]="placeholder";
        [options]="options"

        >
    </lib-fomento-autocomplete>
    ```

### Propiedades de Entrada (`@Input`)

#### Atributos de `lib-fomento-autocomplete`

- **autoActiveFirstOption (boolean):** Si se desean que la primera opción este activa al desplegar el panel.
- **disabledRipple (boolean):** Si se desactiva el efecto onda al hacer click en alguna de las opciones del panel.
- **hideSingleSelectionIndicator (boolean):** Si se muestra el icono del elemento seleccionado.
- **panelWidth (number):** Permite modificar el tamaño del panel del selector (en px)
- **placeholder (string):** Permite modificar el campo por defecto que aparece si no se marca ninguna opción del selector.
- **requireSelecction (boolean):** Si el usuario debe elegir sí o sí alguna opción cuando el componente pertenece a un formulario.
- **options (string[]):** Lista de opciones que contendrá el selector (["Opcion 1", "Opcion 2"]).
- **ariaLabel (string):** Referente a la accesibilidad, permite que los _screen readers_ llamen al componente por este campo.
- **ariaDescription (string):** Referente a la accesibilidad, permite que los _screen readers_ asocien al componente esta etiqueta.
- **ariaLabelledBy (string):** Referente a la accesibilidad, permite enlazar un elemento con una etiqueta. 

Ajusta estas propiedades según tus necesidades para personalizar la apariencia y el comportamiento del icono.

¡Disfruta utilizando `Fomento-Autocomplete` en tu aplicación Angular!
