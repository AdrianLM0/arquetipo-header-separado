# fomento.paginator

fomento.paginator es un componente Angular que proporciona una tabla configurable a partir de un JSON.

## Instalación y servidor de desarrollo

Antes de comenzar, asegúrate de tener instalada la librería @angular/material. Si aún no lo has hecho, puedes instalarla ejecutando el siguiente comando:
bash
npm install --save @angular/material
Luego, importa el módulo MatPaginatorModule en tu módulo Angular:
typescript
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
    imports: [
        // ...otros módulos
        MatPaginatorModule,
    ],
    // ...otros metadatos del módulo
})
export class AppModule {}
##

Para levantar el web components en local, se deberá seguir una serie de pasos en el orden correcto, ya que sino no se podrá iniciar correctamente. Los pasos que se deben seguir son los siguientes:

1. Eliminar el fichero .npmrc para así eliminar los repositorios y usuarios almacenados y actualizarlos con los datos necesarios correctos.

      rm C:\Users\{{USER}}\.npmrc
   
2. Acceder al [repositorio de web-components del MSD](https://gitlab.juntadeandalucia.es/pt-exp-webcomponents) y seleccionar el que se necesite.
3. Clicar en el botón "Clone" y copiar el enlace HTTPS.
4. En local, se debe posicionar en la carpeta donde se quiera descargar el web-component y abrir una consola de comandos. A continuación, ejecutar el siguiente:
      git clone {{enlace HTTPS copiado}}
      Tras la ejecución de este comando, se habrá creado la carpeta del proyecto web-component que se ha seleccionado.
5. Se accede a esta carpeta y se procede a configurar el archivo npm para acceder a los átomos que conforman la molécula:
      npm config set @matter:registry=https://nexus.paas.junta-andalucia.es/repository/msd.npm-private/
   6. Se instalan las dependencias del web-component:
      npm i
   7. Levantar el proyecto con el servidor de webpack:
      npm start
   8. El proyecto se podrá visualizar en tiempo real en la siguiente ruta: [http://localhost:3000/](http://localhost:3000/)

## Ejemplo de uso

Una vez configuradas las dependencias, puedes utilizar el componente FomentoPaginator en tu aplicación Angular. Aquí hay un ejemplo de cómo puedes integrarlo en tu plantilla:

**ESTE ELEMENTO SIEMPRE DEBE IR CONTENIDO EN UNA TABLA**
html
<custom-paginator
    [pageSizeOptions]="[2, 5, 10]"
    [pageSize]="5"
    [pageIndex]="2"
    [length]="100"
    [showFirstLastButtons]="true"
    [hidePageSize]="false"
    [disabled]="false"
></custom-paginator>

## Props

| Prop                 | Tipo         | Descripción                                                                                         |
| :------------------: | :----------: | :-------------------------------------------------------------------------------------------------: |
| pageSizeOptions      | JSON         | Permite modificar el tamaño de las páginas a partir de un desplegable según las opciones detalladas |
| pageIndex            | JSON         | Indica el número de página que se mostrará al inicializar el componente paginator                   |
| pageSize             | JSON         | Permite modificar el tamaño de las páginas                                                          |
| length               | JSON         | Número total de elementos en la colección, para calcular el número de páginas.                      |