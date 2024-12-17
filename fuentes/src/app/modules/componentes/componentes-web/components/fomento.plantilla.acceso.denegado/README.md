# fomento.plantilla.acceso.denegado

`fomento.plantilla.acceso.denegado` es un componente Angular que proporciona una plantilla para mostrar un panel de acceso denegado, con una alerta y unos mensajes configurables.

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

Una vez configuradas las dependencias, puedes utilizar el componente `FomentoPlantilla-accesoDenegado` en tu aplicación Angular. Aquí hay un ejemplo de cómo puedes integrarlo en tu plantilla:

**ESTE ELEMENTO SIEMPRE DEBE IR CONTENIDO EN UNA TABLA**

```html
<lib-fomento-plantilla-acceso-denegado [title]="title" [parrafo]="parrafo">
</lib-fomento-plantilla-acceso-denegado>
```

### Propiedades de Entrada (`@Input`)

#### Atributos de `lib-fomento-Plantilla-Formulario`

- **title:** Establece un titulo principal al formulario.
- **parrafo:** Establece un párrafo explicativo.

Ajusta estas propiedades según tus necesidades para personalizar la apariencia y el comportamiento de la plantilla acceso denegado.

¡Disfruta utilizando `Fomento-plantilla-acceso denegado` en tu aplicación Angular!
