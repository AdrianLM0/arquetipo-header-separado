# fomento-grid-list

`FomentoGridListComponent` es un componente Angular diseñado para mostrar una lista de datos en forma de grilla. Ofrece características como paginación, selección, y la capacidad de mostrar mensajes personalizados o plantillas en diferentes estados (cargando, vacío, error)

## Instalación y servidor de desarrollo

Antes de comenzar, asegúrate de tener instalada la librería `@angular/material`. Si aún no lo has hecho, puedes instalarla ejecutando el siguiente comando:

```bash
npm install --save @angular/material
```

## Uso

Para utilizar FomentoGridListComponent, incluya el selector fomento-grid-list en su plantilla HTML.

```html
<lib-fomento-grid-list></lib-fomento-grid-list>
```

## Ejemplos de uso

Incluye el componente en tu plantilla HTML y configura sus inputs y outputs según tus necesidades. Por ejemplo:

Estos ejemplos muestran un `FomentoGridList` con una configuracion determinada:

```html
<lib-fomento-grid-list
	[columns]="tuNumeroDeColumnas"
	[rowHeight]="tuAlturaDeFila"
	[gutterSize]="tuTamañoDelGutter"
	[isLoading]="estaCargando"
	[showError]="mostrarError"
	[errorMessage]="tuMensajeDeError"
	[showEmptyMessage]="mostrarMensajeVacio"
	[emptyMessage]="tuMensajeVacio"
>
	<!-- Contenido personalizado aquí -->
</lib-fomento-grid-list>

<lib-fomento-grid-list
	[data]="misDatos"
	[selectable]="true"
	(selectEvent)="manejarSeleccion($event)"
	(pageChangeEvent)="cambiarPagina($event)"
>
</lib-fomento-grid-list>
```

### Propiedades de Entrada (`@Input`) y elementos de configuración:

El componente FomentoListComponent acepta los siguientes inputs:

```typescript

- `columns`: number - Número de columnas en la grilla. Por defecto es 3.
- `rowHeight`: string - Define la altura de las filas, por defecto '1:1'.
- `gutterSize`: string - Tamaño del espacio entre elementos, por defecto '1px'.
- `data`: unknown[] - Array de datos para mostrar en la grilla. Inicialmente está vacío.
- `selectable`: boolean - Habilita o deshabilita la selección de elementos. Deshabilitada por defecto.
- `highlightColor`: string - Color para resaltar elementos seleccionados, por defecto 'lightblue'.
- `emptyMessage`: string - Mensaje que se muestra cuando no hay datos, por defecto 'No hay datos disponibles'.
- `isLoading`: boolean - Indica si el componente está en estado de carga. Desactivado por defecto.
- `loadingTemplate`: TemplateRef<unknown> - Plantilla personalizada para mostrar durante la carga. No tiene valor predeterminado.
- `errorMessage`: string - Mensaje de error a mostrar, inicialmente vacío.
- `pageSize`: number - Tamaño de página para la paginación, por defecto 10.
- `enablePagination`: boolean - Habilita la paginación en la grilla. Desactivada por defecto.

```

### Propiedades de Salida (`@Output`)

```typescript

- `selectEvent`: EventEmitter<unknown> - Evento emitido cuando un elemento es seleccionado, si la selección está habilitada.
- `pageChangeEvent`: EventEmitter<number> - Evento emitido cuando cambia la página en la paginación.

```

## Métodos

- `onSelect(item: unknown)`: Emite el evento `selectEvent` con el elemento seleccionado, si `selectable` está activado.
- `onPageChange(page: number)`: Cambia la página actual y emite `pageChangeEvent` con el número de página, si la página es válida.

## Propiedades Adicionales

- `currentPage`: number - Almacena la página actual en la paginación, inicialmente en 1.
- `itemTemplate`: TemplateRef<unknown> - Referencia a una plantilla personalizada para los elementos de la grilla, accesible mediante `ContentChild`.

## Condiciones de Visualización

- `showEmptyMessage`: boolean - Retorna `true` si los datos están vacíos, no está cargando y no hay mensaje de error.
- `showError`: boolean - Retorna `true` si no está cargando y hay un mensaje de error.

## Personalización

Puedes personalizar el componente utilizando `loadingTemplate` y `itemTemplate` para definir plantillas personalizadas para los estados de carga y para cada elemento en la grilla, respectivamente.

Cada uno de estos parámetros y decoradores juega un papel específico en la configuración y el comportamiento del componente FomentoGridListComponent, permitiendo una alta personalización de la lista y su funcionalidad.

Asegúrate de ajustar estas propiedades según tus necesidades para personalizar la apariencia y el contenido del componente
