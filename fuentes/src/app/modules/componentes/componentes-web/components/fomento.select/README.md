# Fomento-select

El componente select consiste en un asistente de pasos.

## Instalación

Antes de comenzar, asegúrate de tener instalada la librería `@angular/material`. Si aún no lo has hecho, puedes instalarla ejecutando el siguiente comando:

```bash
npm install --save @angular/material
```

Luego, importa el módulo `MatSelectModule` en tu módulo Angular:

```typescript
import { MatSelectModule } from '@angular/material/select';

@NgModule({
	imports: [
		// ...otros módulos
		MatSelectModule,
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

Integrar el componente `lib-fomento-Select` en tu aplicación Angular es sencillo. Aquí tienes un ejemplo de cómo utilizarlo en tu plantilla:

```html
<lib-fomento-select
	[data]="['Opcion1', 'Opcion2']"
	label="Selector"
	[disabled]="false;"
	default="Elija una opción"
></lib-fomento-select>
```

## Props

| Prop     |     Tipo      | Descripción                                                                      |
| :------- | :-----------: | :------------------------------------------------------------------------------- |
| data     | Array<string> | Lista de opciones que podrán seleccionarse en el selector                        |
| label    |    string     | Etiqueta descriptiva que se colocará encima del selector                         |
| disabled |    boolean    | Permite deshabilitar el funcionamiento de un selector                            |
| default  |    string     | La opción que aparece por defecto, antes de seleccionar alguna otra del selector |
