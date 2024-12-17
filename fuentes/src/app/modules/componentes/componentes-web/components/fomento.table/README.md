# fomento.table

`fomento.table` es un componente Angular que proporciona una tabla configurable a partir de un JSON.

## Instalación y servidor de desarrollo

Antes de comenzar, asegúrate de tener instalada la librería `@angular/material`. Si aún no lo has hecho, puedes instalarla ejecutando el siguiente comando:

```bash
npm install --save @angular/material
```

Luego, importa el módulo `MatTableModule` en tu módulo Angular:

```typescript
import { MatTableModule } from '@angular/material/table';

@NgModule({
	imports: [
		// ...otros módulos
		MatTableModule,
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

Una vez configuradas las dependencias, puedes utilizar el componente `FomentoTable` en tu aplicación Angular. Aquí hay un ejemplo de cómo puedes integrarlo en tu plantilla:

```html
<lib-fomento-table
  [element_data]="element_data"
  [initColumns]="init_columns"
  [endpoint]="apiUrl"
  [isLoading]="false"
></lib-fomento-table>

```

```ts
export class EjemploFomentoTableComponent implements OnInit {
  element_data = [
    { nombre: 'Andrés', apellido: 'Fernández' },
    { nombre: 'Iker', apellido: 'Muñoz' },
    { nombre: 'Francisco', apellido: 'Gutiérrez' },
  ];

  init_columns = [
    { id: 'nombre', name: 'Nombre' },
    { id: 'apellido', name: 'Apellido' },
  ];

  apiUrl = 'http://localhost:8080/api/data';

  ngOnInit(): void {}
}


```

### Props

| Prop         | Tipo | Descripción                                                |
| :----------- | :--: | :--------------------------------------------------------- |
| element_data | JSON | Contiene la información de los datos que contiene la tabla |
| initColumns  | JSON | Contiene el id y el nombre de las columnas del componente  |
|  endpoint    | string	| URL del endpoint para obtener datos de la tabla.         |
| isLoading 	| boolean |	Indicador que muestra si la tabla está cargando datos.  |
| tableDescription | string | Descripción de la tabla para mejorar la accesibilidad. 
Este texto será leído por lectores de pantalla.11### Anexo: ejemplo de variables de entrada |

- Elemet_data

```JSON
 element_data = [
      {"nombre":"Andrés","apellido":"Fernández"},
      {"nombre":"Iker","apellido":"Muñoz"},
      {"nombre":"Francisco","apellido":"Gutiérrez"}]
```

- Init_columns

```JSON
    init_columns = [{"id":"nombre","name":"Nombre"},
                    {"id":"apellido","name":"Apellidos"}]
```
#### Actualización de Accesibilidad

El componente FomentoTable ahora incluye mejoras para cumplir con los estándares de accesibilidad WCAG. Se han implementado cambios para manejar dinámicamente los atributos aria y permitir la personalización de la descripción de la tabla mediante un nuevo input.