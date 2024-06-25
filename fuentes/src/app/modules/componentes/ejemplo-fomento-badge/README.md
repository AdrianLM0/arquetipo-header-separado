# Fomento-badge

`Fomento-bagde` es un componente Angular que simplifica la creación de componentes de tipo badges o insignias para mostrarlas sobre otros elementos. Este componente, parte de la colección de Web Components de Angular.

## Instalación

Antes de comenzar, asegúrate de tener instalada la librería `@angular/material`. Si aún no lo has hecho, puedes instalarla ejecutando el siguiente comando:

```bash
npm install --save @angular/material
```

Luego, importa el módulo `MatBadgeModule` en tu módulo Angular:

```typescript
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
	imports: [
		// ...otros módulos
		MatBagdeModule,
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

Integrar el componente `Fomento-Bagde` en tu aplicación Angular es sencillo. Aquí tienes un ejemplo de cómo utilizarlo en tu plantilla:

    ```html
    <mat-icon
        [matBadge]="matBadge"
        [matBadgeColor]="matBadgeColor"
        [matBadgePosition]="matBadgePosition"
        [matBadgeSize]="matBadgeSize">
    </mat-icon>
    ```

### Propiedades de Entrada (`@Input`)

#### Atributos de `Fomento-badge`

- **matBadgeColor (ThemePalette):** Color de la insignia, puede ser 'primary', 'accent' o 'warn'.
- **matBagde (string | number | undefined):** Contenido que mostraá la insignia.
- **matBadgeDescripcion (string):** Mensaje utilizado para describir el elemento decorado nediante aria-describedby.
- **matBadgeDisabled (boolean):** Si la insignia está deshabilitada.
- **matBadgeHiden (boolean):** Si la insignia está oculta.
- **matBadgeOverlap (boolean):** Si la insignia debe superponerse a su contenido o no.
- **matBadgePosition (MatBadgePosition):** Posición de la insignia, puede ser 'above after', 'above before', 'below before' o 'below after'.
- **matBadgeSize (MatBadgeSize):** Tamaño de la insignia, pueden ser 'small', 'medium' o 'large'.

Ajusta estas propiedades según tus necesidades para personalizar la apariencia y el comportamiento del icono.

¡Disfruta utilizando `Fomento-badge` en tu aplicación Angular!
