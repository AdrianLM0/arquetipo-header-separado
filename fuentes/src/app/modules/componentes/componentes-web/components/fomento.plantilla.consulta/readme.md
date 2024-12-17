# fomento.plantilla-consulta

`fomento.plantilla-consulta` contiene una página web totalmente configurada que contiene una barra de navegación, una miga de pan y el componente 'datagrid'

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

Una vez configuradas las dependencias, puedes utilizar el componente `FomentoPlantillaConsulta` en tu aplicación Angular. Aquí hay un ejemplo de cómo puedes integrarlo en tu plantilla:

```html
<lib-fomento-plantilla-consulta
	[title]="title"
        [endpoint]="endpoint"
        [hostApi]="hostApi"
        [filter]="filter"
        [rowsPerPageOptions]="rowsPerPageOptions"
	    [actions]="actions"
        [apiContent]="apiContent"
        [table_headers]="table_header"
        [listadoAccionesAux]="listadoAccionesAux"
        [name]="name"
        [show_download]="show_download"
        [show_ayuda]="show_ayuda"
        [show_clean]="show_clean"
        [show_fcolumnas]="show_fcolumnas"
        [actions_index]="actions_index"
        [actions_label]="actions_label"
        [multicheck]="multicheck"
        [multi_check_label]="multi_check_label"
        [multi_check_index]="multi_check_index"
        [multi_check_label_col]="multi_check_label_col"
        [sizePageParam]="sizePageParam"
        [nPageParam]="nPageParam"
        [idTable]="idTable"
        [idSubsistema]="idSubsistema"
        [hostApiPaginator]="hostApiPaginator"
        [endpointPaginator]="endpointPaginator"
        [hostApiFilter]="hostApiFilter"
        [endpointFilter]="endpointFilter"
        [hostApiSaveFilter]="hostApiSaveFilter"
        [endpointSaveFilter]="endpointSaveFilter"
        [hostApiFilterUser]="hostApiFilterUser"
        [endpointFilterUser]="endpointFilterUser"
        [form]="form"
        [showReset]="showResetForm"
        [submit_button]="submit_button_form"
        [reset_button]="reset_button_form"
        [expansion_form]="expansion_form"
        [showAux]="showAuxForm"
        [showSubmit]="showSubmitForm"
        [validate_form]="validate_form"
        [alt]="alt_form"
        [alt_label]="alt_label_form"
        [show_header]="show_header"
></lib-fomento-plantilla-consulta>
```

## Props

| Prop                                                                   |        Tipo        | Descripción                                                                                                                                       |
| :--------------------------------------------------------------------- | :----------------: | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| title                                                                  |       string       | Texto descriptivo que aparece encima del componente                                                                                               |
| table_headers                                                          |   TableColumn[]    | JSON que representa las columnas de la tabla                                                                                                      |
| table_data                                                             |    TableCell[]     | JSON que representa los datos de la tabla, en caso de querer generar la table de manera manual                                                    |
| hostapi                                                                |       string       | En caso de hacerlo a través de API, hostapi representa la ruta a la que se va a realizar la llamada                                               |
| endpoint                                                               |       string       | Representa el recurso que se quiere pedir. En una ruta 172.0.0.1:8080/conserjería/miembros                                                        |
| hostapi sería '172.0.0.1:8080/conserjería' y endpoint sería 'miembros' |
| rowsPerPageOption                                                      |   Array<number>    | Opciones que contendrá el selector que modifica el tamaño de resultados que mostrará la tabla por página                                          |
| actions                                                                |   Array<String>    | Una lista que contiene las acciones ('edit', 'details', 'delete') que se podrán realizar sobre las filas                                          |
| actions_index                                                          |       number       | Permite decidir en qué posición debe estar la columan 'Acciones'                                                                                  |
| show_download                                                          |      boolean       | Muestra o esconde el botón para exportar la tabla                                                                                                 |
| multicheck                                                             |      boolean       | Muestra o esconde la columna de selección múltiple                                                                                                |
| multi_check_label                                                      |       string       | Permite modificar la etiqueta de la columna multicheck                                                                                            |
| multi_check_index                                                      |       number       | Permite decidir en qué posición debe estar la columna 'Multiselección'                                                                            |
| multi_check_label_col                                                  |       string       | Permite decidir la etiqueta del botón 'Multiselección'                                                                                            |
| universal_filter                                                       |      boolean       | Muestra o esconde un buscador que filtra por todas las columnas de la tabla                                                                       |
| filter                                                                 | 'column','advance' | Permite distinguir entre un filtrado modo formulario o a partir de filtros en las distintas columnas                                              |
| show_download                                                          |      boolean       | Permite decidir si se quiere un botón de descarga                                                                                                 |
| form                                                                   |       string       | En caso de seleccionar un filtrado modo formulario se debe especificar la configuración que se utilizará                                          |
| nPageParam                                                             |      boolean       | El parámetro de la api que representa el número de página (no su valor) ej ../usuario?offset=20                                                   |
| sizePageParam                                                          |      boolean       | l parámetro de la api que representa el tamaño de página (no su valor) ej ../usuarios?size=10                                                     |
| apiContent                                                             |       string       | Al realizar la llamada a la api puede devolver el json resultado en un objeto result:... o content:..., en ese caso se debe especificar ese valor |
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

5.- Para utilizar el breadcrum de la plantilla

```ts

  @ViewChild(FomentoPlantillaConsultaComponent) componentePlantilla!: FomentoPlantillaConsultaComponent;
  constructor(private router: Router){}

  ngAfterViewInit() {
    this.componentePlantilla?.gestionBreadcrumb(this.router.url)
  }
```
