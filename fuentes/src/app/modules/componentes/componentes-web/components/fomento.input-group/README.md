# fomento.input-group

`fomento.input-group` es un componente que contiene en una misma entrada, un campo formulario y un botón de aceptar.

## Instalación y servidor de desarrollo

Antes de comenzar, asegúrate de tener instalada la librería `@angular/material`. Si aún no lo has hecho, puedes instalarla ejecutando el siguiente comando:

```bash
npm install --save @angular/material
```

Luego, importa el módulo `MatInputModule` y `FormsModule` en tu módulo Angular:

```typescript
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [
		// ...otros módulos
		MatInputModule,
		FormsModule,
	],
	// ...otros metadatos del módulo
})
export class AppModule {}
```

Además, asegúrate de tener la librería `@matter` instalada e importada. Puedes instalarla ejecutando:

```bash
npm install --save @matter/matter-input-group
```

Luego, importa el componente `MatterInputGroupComponent` en tu componente o módulo Angular:

```typescript
import '@matter/matter-input-group/dist/matter-input-group';
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

Una vez configuradas las dependencias, puedes utilizar el componente `FomentoInputGroup` en tu aplicación Angular. Aquí hay un ejemplo de cómo puedes integrarlo en tu plantilla:

```html
<lib-fomento-input-group
	typeStyle="material"
	width_input="70%"
	input_msgError=""
	placeholder="Placeholder"
	type="text"
	value=""
	id="sample"
	name="sample"
	button_label=""
	button_icon="search"
	button_icon_theme="info"
	button_href="#"
	button_target="_self"
	[disabled]="false"
></lib-fomento-input-group>
```

## Props

| Prop              |  Tipo   | Descripción                                                                                        |
| :---------------- | :-----: | :------------------------------------------------------------------------------------------------- |
| typeStyle         | string  | Entre 'material' y 'matter' permite elegir la tecnología sobre la que se construirá el componente. |
| width_input       | string  | A partir de un porcentaje permite modificar la anchura del componente                              |
| input_msgError    | string  | el mensaje de error que se mostrará en caso de recibir uno                                         |
| placeholder       | string  | Contenido del campo de entrada cuando no se escrito nada en él                                     |
| type              | string  | El tipo del campo de entrada, puede ser color, password, number, email...                          |
| value             | string  | El valor del campo de entrada inicial                                                              |
| id                | string  | Un atributo identificador del campo de entrada                                                     |
| name              | string  | Un atributo 'nombre' que identifica al campo de entrada                                            |
| button_label      | string  | Contenido de la etiqueta del botón del campo de entrada                                            |
| button_icon       | string  | Icono de la librería 'fontawesome' que contiene el botón                                           |
| button_icon_theme | string  | Tema del botón (info, warning, error, primary) del componente                                      |
| button_href       | string  | Si deseas que el botón redirija a alguna página                                                    |
| button_target     | string  | Indicas si quieres que la nueva página se abrá en otra pestaña, sustituyendo a la actual...        |
| disabled          | boolean | Desactiva el campo de entrada                                                                      |
