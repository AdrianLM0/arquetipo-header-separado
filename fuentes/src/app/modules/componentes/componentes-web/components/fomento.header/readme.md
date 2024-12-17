# Fomento-header

El componente header es una de las piezas que conforman la barra de navegación de esta librería. Consiste en una barra auxiliar que incluye información de interés y el apartado de "Ayuda".

## Instalación

Antes de comenzar, asegúrate de tener instalada la librería `@angular/material`. Si aún no lo has hecho, puedes instalarla ejecutando el siguiente comando:

```bash
npm install --save @angular/material
```

Luego, importa el módulo `MatToolbarModule` en tu módulo Angular:

```typescript
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
	imports: [
		// ...otros módulos
		MatToolbarModule,
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

Integrar el componente `lib-fomento-Header` en tu aplicación Angular es sencillo. Aquí tienes un ejemplo de cómo utilizarlo en tu plantilla:

    ```html
    <lib-fomento-header
    version="11.2.5"
    [mostrar_fecha]="true"
    [mostrar_hora]="true"
    url_ayuda="inicio/ayuda"
    ></lib-fomento-header>
    ```

## Props

| Prop          |  Tipo   | Descripción                                       |
| :------------ | :-----: | :------------------------------------------------ |
| version       | string  | Versión actual de la aplicación con formato X.Y.Z |
| mostrar_fecha | boolean | Atributo que permite mostrar o no la fecha actual |
| mostrar_hora  | boolean | Atributo que permite mostrar o no la hora actual  |
| url_ayuda     | string  | Url que redirecciona el botón + icono de "Ayuda"  |
