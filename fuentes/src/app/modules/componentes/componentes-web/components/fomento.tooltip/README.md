# fomento.tooltip

`fomento.tooltip` es un componente Angular que proporciona un pequeño desplegable explicativo cuando pasas el ratón por algún elemento.

## Instalación y servidor de desarrollo

Antes de comenzar, asegúrate de tener instalada la librería `@angular/material`. Si aún no lo has hecho, puedes instalarla ejecutando el siguiente comando:

```bash
npm install --save @angular/material
```

Luego, importa el módulo `MatTooltipModule` en tu módulo Angular:

```typescript
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
	imports: [
		// ...otros módulos
		MatTooltipModule,
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

Una vez configuradas las dependencias, puedes utilizar el componente `FomentoTooltip` en tu aplicación Angular. Aquí hay un ejemplo de cómo puedes integrarlo en tu plantilla:

```html
<lib-fomento-tooltip 
    description="Texto personalizado para el tooltip" 
    position="above" 
    [delay_hide]="500" 
    [delay_show]="200"
    ariaLabel="Texto alternativo del tooltip"
    ariaLive="assertive"
    role="tooltip">
    <button>Ejemplo</button>
</lib-fomento-tooltip>

```

El componente que aparezca dentro de la etiqueta será el elemento sobre el que al hacer 'hover' se despliegue el contenido

## Inputs del Componente `FomentoTooltip`

| Nombre          | Tipo                               | Descripción                                            | Valor por defecto                |
|-----------------|------------------------------------|--------------------------------------------------------|-----------------------------------|
| `description`   | `string`                           | Texto del tooltip                                      | `"Esto es un 'tooltip'"`          |
| `position`      | `TooltipPosition`                  | Posición (`"above"`, `"below"`, `"left"`, `"right"`)   | `"below"`                         |
| `delay_hide`    | `number`                           | Retraso en ms para ocultar el tooltip                  | `0`                               |
| `delay_show`    | `number`                           | Retraso en ms para mostrar el tooltip                  | `0`                               |
| `tooltipEnabled`| `boolean`                          | Controla si el tooltip está visible o no               | `true`                            |
| `ariaLabel`     | `string`                           | Etiqueta accesible para lectores de pantalla           | `"Tooltip: Esto es un 'tooltip'"` |
| `ariaLive`      | `'off' | 'polite' | 'assertive'`  | Controla la prioridad de lectura en lectores de pantalla | `"polite"`                     |
| `role`          | `string`                           | Rol accesible para el tooltip                          | `"tooltip"`                       |
| `tabindex`      | `string`                           | Controla el foco del tooltip en la navegación          | `"0"`                             |



## Descripción de los nuevos parámetros de accesibilidad

-ariaLabel: Permite personalizar el texto que los lectores de pantalla usan para describir el tooltip. Esto es útil para ofrecer información accesible y relevante para los usuarios con discapacidades visuales.

-ariaLive: Controla cómo y cuándo se anunciará el contenido del tooltip a los lectores de pantalla. Se puede configurar como:

"off": No anuncia el contenido automáticamente.
"polite": Anuncia el contenido cuando el lector de pantalla esté listo (no interrumpe otros mensajes).
"assertive": Anuncia el contenido de inmediato, interrumpiendo cualquier otro mensaje.

-role: Permite establecer el rol del elemento, que suele ser tooltip. En casos especiales, puede ser cambiado según las necesidades de accesibilidad.

-tabindex: Controla si el tooltip puede recibir el foco en la navegación del teclado. Un valor de "0" permite que el tooltip sea enfocado y accesible a través de la tecla Tab.