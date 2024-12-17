# Fomento-Ripple

`lib-fomento-Ripple` es un componente Angular que simplifica la creación del efecto ripple sobre el elemento que se desee. Este componente, parte de la colección de Web Components de Angular.

## Instalación

Antes de comenzar, asegúrate de tener instalada la librería `@angular/material`. Si aún no lo has hecho, puedes instalarla ejecutando el siguiente comando:

```bash
npm install --save @angular/material
```

Luego, importa el módulo `MatRippleModule` en tu módulo Angular:

```typescript
import { MatRippeModule } from '@angular/material/ripple';

@NgModule({
	imports: [
		// ...otros módulos
		MatRippleModule,
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

Integrar el componente `lib-fomento-Ripple` en tu aplicación Angular es sencillo. Aquí tienes un ejemplo de cómo utilizarlo en tu plantilla:

    ```html
    <div
    matRipple
    [matRippleAnimation]="matRippleAnimation"
    [matRippleCentered]="matRippleCentered"
    [matRippleColor]="matRippleColor"
    [matRippleDisabled]="matRippleDisabled"
    [matRippleRadius]="matRippleRadius"
    [matRippleTrigger]="matRippleTrigger"
    [matRippleUnbounded]="matRippleUnbounded">

CLICK ME

</div>
```

### Propiedades de Entrada (`@Input`)

#### Atributos de `lib-fomento-Ripple`

- **matRipple:** Establece el efecto ripple al elemento elegido.
- **matRippleAnimation (RippleAnimationConfig):** Configura la animación del efecto, pudes modificar la duración de la entrada y salida de las ondas.
- **matRippleCentered (boolean):** Si la onda se origina desde el centro del elemento anfitrión, en lugar de originarse desde dónde se hizo click.
- **matRippleColor (string):** Establece el color del efecto.
- **matRippleDisabled (string):** Desactiva el efecto.
- **matRippleRadius (number):** Si se establece, el radio en píxeles del primer plano se ondula cuando se expande por completo. Si no está configurado, el radio será la distancia desde el centro de la onda hasta la esquina más alejada del rectángulo delimitador del elemento anfitrión..
- **matRippleTrigger (HTMLElement):** El elemento que desencadena la onda cuando se reciben eventos de clic. El valor predeterminado es el elemento host de la directiva.
- **matRippleUnbounded (boolean):** Si las ondas deben ser visibles fuera de los límites del componente.

Ajusta estas propiedades según tus necesidades para personalizar la apariencia y el comportamiento del icono.

¡Disfruta utilizando `Fomento-ripple` en tu aplicación Angular!
