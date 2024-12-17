# fomento-filtro-columnas-tabla

`lib-fomento-filtro-columnas-tabla` es un componente Angular que proporciona una filtro de columnas para tablas. Este componente forma parte de la colección de Web Components de Angular y utiliza la biblioteca `@material` para asegurar una experiencia de usuario consistente.

## Instalación y servidor de desarrollo

Antes de comenzar, asegúrate de tener instalada la librería `@angular/material`. Si aún no lo has hecho, puedes instalarla ejecutando el siguiente comando:

```bash
npm install --save @angular/material
```

## Ejemplo de uso

Una vez configuradas las dependencias, puedes utilizar el componente `FomentoFiltroColumnasTabla` en tu aplicación Angular. Aquí hay un ejemplo de cómo puedes integrarlo en tu plantilla:

En el typescript de nuestra aplicación, o del componente donde queramos mostrar el filtro, importamos el componente de la libreria, así como la interfaz "TableColumn" y añadimos una lógica como esta:

```typescript
import { Component } from '@angular/core';
import { TableColumn } from 'i-rf-web-component-node-lib';

@Component({
	selector: 'app-ejemplo-filtro-columnas-tabla',
	templateUrl: './ejemplo-filtro-columnas-tabla.component.html',
	styleUrls: ['./ejemplo-filtro-columnas-tabla.component.scss'],
})
export class EjemploFiltroColumnasTablaComponent {
	columns: TableColumn[] = [
		{ name: 'ID', field: 'id', visible: true },
		{ name: 'Nombre', field: 'name', visible: true },
		{ name: 'Edad', field: 'age', visible: true },
		{ name: 'Ciudad', field: 'city', visible: true },
		{ name: 'Profesión', field: 'profession', visible: true },
	];

	dataSource = [
		{
			id: 1,
			name: 'Juan Pérez',
			age: 30,
			city: 'Madrid',
			profession: 'Ingeniero',
		},
		{
			id: 2,
			name: 'Laura Martínez',
			age: 25,
			city: 'Barcelona',
			profession: 'Diseñadora',
		},
		{
			id: 3,
			name: 'Carlos Gómez',
			age: 40,
			city: 'Sevilla',
			profession: 'Arquitecto',
		},
		{
			id: 4,
			name: 'Ana López',
			age: 35,
			city: 'Valencia',
			profession: 'Doctora',
		},
		{
			id: 5,
			name: 'Pedro González',
			age: 28,
			city: 'Bilbao',
			profession: 'Abogado',
		},
	];

	get displayedColumns(): string[] {
		return this.columns
			.filter((column) => column.visible)
			.map((column) => column.field);
	}

	onColumnsChange(updatedColumns: TableColumn[]): void {
		// Simplemente actualiza el array de columnas con la nueva visibilidad
		this.columns = updatedColumns;
	}
}
```

En el html de nuestra aplicacion, o del componente donde queramos mostrar las alertas, añadimos la etiqueta siguiente:

```html
<lib-fomento-filtro-columnas-tabla
	[columns]="columns"
	(columnsChange)="onColumnsChange($event)"
>
</lib-fomento-filtro-columnas-tabla>
```

La tabla que acompaña al filtro deberia quedar tal que asi:

```html
<div>
	<table mat-table [dataSource]="dataSource">
		<ng-container *ngFor="let column of columns" [matColumnDef]="column.field">
			<th mat-header-cell *matHeaderCellDef>{{ column.name }}</th>
			<td mat-cell *matCellDef="let element">{{ element[column.field] }}</td>
		</ng-container>

		<tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
		<tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
	</table>
</div>
```

### Propiedades de Entrada y Saluda (`@Input`) (`@Output`)

- **columns (TableColumn):** Establece las columnas de la tabla
- **columnsChange (EventEmitter<TableColumn[]>):** Establece las columnas que se muestran/ocultan de nuesta tabla.

Ambas propiedades utilizan el interfaz TableColumn, interfaz importado de la libreria que contiene las siguientes propiedades:

```typescript
export interface TableColumn {
	name: string; // El nombre para mostrar
	field: string; // El campo en los datos que representa
	visible: boolean; // Si la columna está visible o no
}
```

- **@Input() label:** Establece el texto que aparece encima del select. 
- **@Input() appearance:**Establece la apariencia del select.
- **@Input() placeholder:** Establece el placeholder del select. 	
- **@Input() enableSearch:**Establece si se muestra o no el filtro de busqueda de columnas dentro del select

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

## Componentes Internos y Enlaces a sus Readmes

El componente `FomentoFiltroColumnasTabla` utiliza internamente varios componentes. A continuación, se listan los componentes con enlaces a sus respectivos **README**:

- **[`<mat-form-field>`](../fomento.form-field/README.md):** Contenedor para elementos de formulario.
- **[`<mat-select>`](../fomento.select/README.md):** Selector desplegable con opciones.
- **[`<mat-icon>`](../fomento.icon/README.md):** Componente para mostrar íconos.
