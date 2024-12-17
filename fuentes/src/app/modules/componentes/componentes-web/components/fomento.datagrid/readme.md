# fomento.datagrid

`fomento.datagrid` contiene una tabla completamente funcional que permite ordenar, filtrar y seleccionar las columnas que se muestran. Además de otras funcionalidades diversas.
Se divide en dos versiones, una versión manual que funciona a través de un json `lib-fomento-jsondatagrid` y la versión que funciona a través de llamadas a una API `lib-fomento-datagrid`

Este componente puede manejar diferentes tipos de paginación (tanto en el cuerpo como en las cabeceras de las respuestas JSON) y es personalizable para adaptarse a distintos casos de uso.

## Características

- **Paginación:** Soporta paginación tanto en el cuerpo de la respuesta (`c1`) como en las cabeceras (`c2`). Soporta la paginación cuando el índice empieza en 0 (`c1`) o en 1(`c2`).
- **Filtrado avanzado:** Permite aplicar filtros globales y filtros avanzados sobre los datos mostrados.
- **Multi-selección:** Permite seleccionar múltiples filas y realizar acciones sobre ellas.
- **Exportación de datos:** Funcionalidad de exportar los datos mostrados en la tabla.
- **Soporte para varias APIs:** Puede configurarse para consumir datos de diferentes endpoints utilizando GET o POST.

## Instalación y servidor de desarrollo

Antes de comenzar, asegúrate de tener instalada la librería `@angular/material`. Si aún no lo has hecho, puedes instalarla ejecutando el siguiente comando:

```bash
npm install --save @angular/material
```

Luego, importa el módulo `ReactiveFormsModule`, `MatTableModule` en tu módulo Angular:

```typescript
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
imports: [
// ...otros módulos
MatTableModule,
ReactiveFormsModule,
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

Una vez configuradas las dependencias, puedes utilizar el componente `FomentoDatagrid` en tu aplicación Angular. Aquí hay un ejemplo de cómo puedes integrarlo en tu plantilla:

```html
<!-- VERSIÓN API -->

<lib-fomento-datagrid
[name]="api_name"
      [apiContent]="apiContent"
      [table_headers]="table_headers"
      [table_data]="dataSource.data"
      [rowsPerPageOptions]="rowsPerPageOptions"
      [actions]="actions"
      [actions_index]="actions_index"
      [listadoAccionesAux]="listadoAccionesAux"
      [show_download]="show_download"
      [multicheck]="multicheck"
      [multi_check_label]="multi_check_label"
      [multi_check_index]="multi_check_index"
      [multi_check_label_col]="multi_check_label_col"
      [universal_filter]="universal_filter"
      [filter]="filter"
      [form]="form"
      [expansion_form]="expansion_form"
      [sizePageParam]="sizePageParam"
      [nPageParam]="nPageParam"
      [show_ayuda]="show_ayuda"
      [show_clean]="show_clean"
      [show_fcolumnas]="show_fcolumnas"
      [idTable]="idTable"
      [id_subsistema]="id_subsistema"
      [hostapi]="hostApi"
      [endpoint]="endpoint"
      [hostApiPaginator]="hostapiPaginator"
      [endpointPaginator]="endpointPaginator"
      [hostApiFilter]="hostapiFilter"
      [endpointFilter]="endpointFilter"
      [hostApiSaveFilter]="hostapiSaveFilter"
      [endpointSaveFilter]="endpointSaveFilter"
      [hostApiFilterUser]="hostapiFiltroUsuarioApi"
      [endpointFilterUser]="endpointFiltroUsuarioApi"
      [reset_button_form]="reset_button_form"
      [submit_button_form]="submit_button_form"
      [showSubmitForm]="showSubmitForm"
      [showResetForm]="showResetForm"
      [validate_form]="validate_form"
      [useGetMethod]="useGetMethod"
      (downloadAction)="descargar($event)"
      (helpIconAction)="iconoAyuda()"
      (checkAction)="check($event)"
      [apiContent]="apiContent"
      [length]="paginator_length"
      [pageSize]="pageSize"
      [pageIndex]="pageIndex"
      [tipoChurrera]="tipoChurrera"
      (page)="changePage($event)"
></lib-fomento-datagrid>

<!-- VERSIÓN MANUAL -->

<lib-fomento-jsondatagrid
[table_headers]="table_headers"
[table_data]="table_data"
[universal_filter]="true"
[actions_index]="-1"
[actions]="true"
[actions_label]="Operaciones"
[listadoAccionesAux]="actions"
[expansion_form]="true"
[form]="form"
[rowsPerPageOptions]="[5, 10, 15]"
[filter]="'advance'"
[name]="name"
[show_download]="true"
[show_ayuda]="true"
[show_clean]="true"
[show_fcolumnas]="true"
[multicheck]="true"
multi_check_label="Botón Multiseleccion"
[multi_check_index]="-1"
multi_check_label_col="Multiselección"
reset_button_form = 'CANCELAR'
submit_button_form = 'GUARDAR'
[show_header] = "true"
[showSubmitForm] = "true"
[showResetForm] = "true"
[showAuxForm] = "false"
[validate_form] = "false"
[expansion_form] = "false"
[alt_form] = "false"
alt_label_form = 'ETIQUETA'
(checkAction)="check($event)"
(downloadAction)="descargar($event)"
(helpIconAction)="iconoAyuda()"
[apiContent]="apiContent"
    [length]="paginator_length"
    [pageSize]="pageSize"
    [pageIndex]="pageIndex"
    [tipoChurrera]="tipoChurrera"
    (page)="changePage($event)"
></lib-fomento-jsondatagrid>
```

## Props

| Prop                                          |        Tipo        | Descripción                                                                                              |
| :-------------------------------------------- | :----------------: | :------------------------------------------------------------------------------------------------------- |
| name                                          |       string       | Texto descriptivo que aparece encima de la tabla                                                         |
| table_headers                                 |   TableColumn[]    | JSON que representa las columnas de la tabla                                                             |
| table_data                                    |    TableCell[]     | JSON que representa los datos de la table                                                                |
| rowsPerPageOption                             |   Array<number>    | Opciones que contendrá el selector que modifica el tamaño de resultados que mostrará la tabla por página |
| actions                                       |      boolean       | Permite esconder o enseñar la columna de acciones                                                        |
| actions_index                                 |       number       | Permite decidir en qué posición debe estar la columna 'Acciones'                                         |
| listadoAccionesAux                            |       Array        | Lista de las acciones que contendrá la columna 'Acciones'                                                |
| show_download                                 |      boolean       | Muestra o esconde el botón para exportar la tabla                                                        |
| multicheck                                    |      boolean       | Muestra o esconde la columna de selección múltiple                                                       |
| multi_check_label                             |       string       | Permite modificar la etiqueta tanto de la columna como del botón de selección                            |
| multi_check_index                             |       number       | Permite decidir en qué posición debe estar la columna 'Multiselección'                                   |
| multi_check_label_col                         |       string       | Valor de la etiqueta de la columna de 'Multiselección'                                                   |
| universal_filter                              |      boolean       | Muestra o esconde un buscador que filtra por todas las columnas de la tabla                              |
| filter                                        | 'column','advance','none' | Permite distinguir entre un filtrado modo formulario, a partir de filtros en las distintas columnas o sin formulario    |
| form                                          |       string       | En caso de seleccionar un filtrado modo formulario se debe especificar la configuración que se utilizará |
| sizePageParam                                 |       string       | En las llamadas a la API, el valor para devolver el tamaño de las páginas (suele ser 'size' o 'limit')   |
| nPageParam                                    |       string       | En las llamadas a la API, el valor para devolver el número de página (suele ser 'offset' o 'page')       |
| apiContent                                    |       string       | En las respuestas de una API en ocasiones no se devuelve directamente el objeto, en ese caso rellenar  este atributo. Suele ser 'result' o 'content' |
| expansion_form                                |      boolean       | Si quieres el formulario pueda expandirse o no                                                           |
| show_download                                 |      boolean       | Si quieres esconder o mostrar el botón de descarga                                                       |
| show_ayuda                                    |      boolean       | Si quieres esconder o mostrar el botón de ayuda                                                          |
| show_clean                                    |      boolean       | Si quieres esconder o mostrar el botón de 'reset' de formulario                                          |
| show_fcolumnas                                |      boolean       | Si quieres esconder o mostrar el botón de filtrar columnas                                               |
| id_table                                |      number       | El identificador de la tabla que se utilizará en las consultas a la bd    |
| id_subsistema                                |      string       |  El subsistema de la tabla que se utilizará en las consultas a la bd      |
| hostapi                                       |       string       | A la hora de poblar la base de datos, el valor de la ruta de la API                                      |
| endpoint                                      |       string       | A la hora de poblar la base de datos, el valor del recurso dentro de la ruta de la API                   |
| hostApiPaginator                     |       string       | A la hora de paginar el resultado de una consulta a la base de datos, el valor de la ruta de la API                                      |
| endpointPaginator                    |       string       | A la hora de paginar el resultado de una consulta a la base de datos, el valor del recurso dentro de la ruta de la API                   |
| hostApiFilter                     |       string       | A la hora de filtrar a través de una consulta a la base de datos, el valor de la ruta de la API                                      |
| endpointFilter                    |       string       | A la hora de filtrar a través de una consulta a la base de datos, el valor del recurso dentro de la ruta de la API                   |
| hostApiSaveFilter                     |       string       | A la hora de guardar un filtro en la base de datos, el valor de la ruta de la API                                      |
| endpointSaveFilter                    |       string       | A la hora de guardar un filtro en la base de datos, el valor del recurso dentro de la ruta de la API                   |
| hostApiFilterUser                     |       string       | A la hora de obtener los filtros de un usuario a partir del resultado de una consulta a la base de datos, el valor de la ruta de la API                                      |
| endpointFilterUser                    |       string       | A la hora de obtener los filtros de un usuario a partir del resultado de una consulta a la base de datos, el valor del recurso dentro de la ruta de la API                   |
| pageIndex | number        | Índice de la página actual.
| pageSize | number        | Tamaño de página actual.
| useGetMethod | boolean       | Determina si se usa GET o POST para las llamadas a la API.
| form_config    | String  | EndPoint / JSON con los datos de configuración del formulario, a continuación un ejemplo de su estructura. |
| reset_button   | String  | Texto que contiene la etiqueta del botón de reset                                                          |
| submit_button  | String  | Texto que contiene la etiqueta del botón de envío                                                          |
| showSubmit     | boolean | Muestra u oculta el botón de enviar                                                                        |
| showReset      | boolean | Muestra u oculta el botón de reset                                                                         |
| validate_form  | boolean | Si quieres que el formulario sea validado                                                                  |
| expansion_form | boolean | Si el formulario es expansible o no                                                                        |
| aux_button     | string  | Contenido de la etiqueta del botón 'Auxiliar' (abajo izquierda)                                            |
| alt            | boolean | Permite esconder o mostrar arriba a la derecha un botón alternativo                                        |
| alt_label      | boolean | Etiqueta del botón alternativo                                                                             |
| tipoChurrera   | String  | c1 o c2, identifica si los datos de paginación vienen en el body (c1) o en los headers (c2)

---Evento--- ---Descripción---
page Emite el evento de cambio de página en la paginación.

En tu componente padre, asegúrate de manejar el evento page emitido por el componente hijo:
```ts
changePage(event: PageEvent) {
  this.pageSize = event.pageSize;
  this.pageIndex = event.pageIndex;
  this.consumeApi(); // Llamar al método que consume la API con la nueva configuración de la página
}
```

## Anexo

1.- Interfaz TableColumn[]

```ts
export interface TableColumn {
header: string; // El nombre para mostrar
field: string; // El campo en los datos que representa
visible: boolean; // Si la columna está visible o no
}
```

2.- Interfaz TableCell[]

```ts
export interface TableCell {
[key: string]: unknown; // Lista de objetos clave:valor
}
```

3.- Ejemplo table_header

```ts
table_headers: TableColumn[] =
[
    {header:'Columna 1', field: 'c1', visible: false},
    {header:'Columna 2', field: 'c2', visible: false}
];
```

4.- Ejemplo table_data

```ts
table_data: TableCell[] =
[
    {'c1':'Celda 1,1','c2':'Celda 1,2'},
    {'c1':'Prueba 2,1','c2':'Prueba 2,2'}
]
```

5.- Ejemplo form

```json
{
"sections": [
{
"label": "Información usuario",
"groups": [
{
"label": "Expediente",
"rows": [
{
"filters": [
{
"header": "Referencia de la liquidación",
"formControlName": "referenciaLiquidacion",
"type": "input"
},
{
"header": "Código territorial",
"formControlName": "codigoTerritorial",
"type": "select",
"selectOptions": [
{ "value": "0", "description": "SÍ" },
{ "value": "1", "description": "NO" }
]
},
{
"header": "Identificador interesado",
"label": "NIF",
"formControlName": "nifInteresado",
"type": "checkbox"
},
{
"header": "Fecha de creación - Mínimo",
"formControlName": "fechaCreacionMin",
"type": "date"
}
]
},
{
"filters": [
{
"header": "Provincia",
"formControlName": "provincia",
"type": "select",
"selectOptions": [{ "value": "0", "description": "Sevilla" }]
},
{
"header": "Municipio",
"formControlName": "municipio",
"type": "select",
"selectOptions": [{ "value": "0", "description": "Sevilla" }]
}
]
}
]
}
]
},
{
"label": "Solicitante",
"rows": [
{
"filters": [
{
"header": "Referencia de la liquidación",
"formControlName": "referenciaLiquidacion",
"type": "input"
},
{
"header": "Código territorial",
"formControlName": "codigoTerritorial",
"type": "select",
"selectOptions": [
{ "value": "0", "description": "SÍ" },
{ "value": "1", "description": "NO" }
]
}
]
}
]
}
]
}
```

6.- Ejemplo listadoAccionesAux

```ts
let listadoAccionesAux = [
{
nombre: 'Funcion 1',
funcion: () => {
console.log('FUNCIÓN 1');
},
tooltip: 'Esto es un tooltip',
icono: 'fas fa-eye',
},
{
nombre: 'Funcion 2',
funcion: () => {
console.log('FUNCIÓN 2');
},
icono: 'fas fa-eye',
},
{
nombre: 'Funcion 3',
funcion: () => {
console.log('FUNCIÓN 3');
},
icono: 'fas fa-eye',
},
{
nombre: 'Funcion 4',
funcion: () => {
console.log('FUNCIÓN 4');
},
icono: 'fas fa-eye',
},
];
```
7. - Ejemplo simplificado de métodos necesarios en la clase padre para implementar correctamente el componente.

```ts
  ngOnInit(): void {
    this.endpoint = 'api/v1/formularios/listbyquerydsl';
  }

    changePage(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    // opcional adicionar el sort
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

    api_name = 'Listado de ejemplo de formularios';

    table_headers = [
    { header: 'ID', field: 'id', visible: true },
    { header: 'Código', field: 'codigo', visible: true },
    { header: 'Nombre', field: 'nombre', visible: true },
  ];

```