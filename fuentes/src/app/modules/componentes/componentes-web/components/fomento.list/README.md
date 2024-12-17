# fomento-list

`lib-fomento-list` es un componente Angular diseñado para crear listas personalizadas con diversas opciones de configuración. Soporta características como temas personalizados, íconos, enlaces, desactivación de elementos, y personalización del estilo de los elementos de la lista.

## Instalación y servidor de desarrollo

Antes de comenzar, asegúrate de tener instalada la librería `@angular/material`. Si aún no lo has hecho, puedes instalarla ejecutando el siguiente comando:

```bash
npm install --save @angular/material
```

## Uso

Para utilizar FomentoListComponent, incluya el selector lib-fomento-list en su plantilla HTML.

```html
<lib-fomento-list></lib-fomento-list>
```

## Ejemplos de uso

Este ejemplo muestra un `FomentoList` con una lista de ítems, tema oscuro, ícono personalizado, y manejo de evento de clic:

```html
<lib-fomento-list
	[items]="miListaItems"
	theme="dark"
	icon="mi-icono"
	[clickable]="true"
	(itemClick)="miManejadorDeClick($event)"
>
</lib-fomento-list>

En este ejemplo, se define una lista con algunos elementos, se personalizan
estilos y se manejan ciertos comportamientos:

<lib-fomento-list
	[items]="listaElementos"
	[theme]="'dark'"
	[icon]="'star'"
	[href]="'http://ejemplo.com'"
	[target]="'_blank'"
	[disabled]="false"
	[ariaLabel]="'Etiqueta ARIA'"
	[disableRipple]="true"
	[displayProperty]="'nombre'"
	[clickable]="true"
	[selectable]="true"
	[isNavList]="false"
	[iconColor]="'blue'"
	[textColor]="'white'"
	[avatar]="'http://url-a-imagen-avatar.com/avatar.jpg'"
	[listItemStyle]="{ 'padding': '10px', 'border': '1px solid #ccc' }"
	[alignItems]="'center'"
	[justifyContent]="'space-between'"
	[rippleColor]="'green'"
	[rippleDuration]="500"
	[multiple]="true"
	(itemClick)="manejarClicEnItem($event)"
></lib-fomento-list>
```

### Propiedades de Entrada (`@Input`) y elementos de configuración:

El componente FomentoListComponent acepta los siguientes inputs:

```typescript

    itemTemplate (TemplateRef<unknown>): Decorador @ViewChild para obtener una referencia a una plantilla personalizada para los elementos de la lista. Se utiliza para mostrar contenido personalizado en la lista.

    items (any[]): Un arreglo de elementos que se mostrarán en la lista. Estos elementos pueden ser de cualquier tipo.

    theme (string): Define el tema o estilo para la lista, como 'primary'.

    icon (string): Un icono genérico que se mostrará para cada elemento de la lista, a menos que el elemento tenga su propio icono definido.

    href (string): Un enlace genérico que se aplicará a cada elemento de la lista, a menos que el elemento tenga su propio enlace definido.

    target (string): Define el atributo target para los enlaces, como '_self', '_blank', etc.

    disabled (boolean): Indica si los elementos de la lista deben estar deshabilitados.

    ariaLabel (string): Etiqueta ARIA para accesibilidad.

    disableRipple (boolean): Si está activado, desactiva el efecto visual 'ripple' en los clics.

    displayProperty (string): Define la propiedad del objeto item que se mostrará en la lista.

    clickable (boolean): Indica si los elementos de la lista son clickeables.

    selectable (boolean): Si está activado, permite la selección de elementos en la lista.

    isNavList (boolean): Define si la lista debe ser una MatNavList en lugar de una MatList regular.

    iconColor (string): Color para los iconos de la lista.

    textColor (string): Color para el texto de los elementos de la lista.

    avatar (string): URL de una imagen que se utilizará como avatar en los elementos de la lista.

    listItemStyle (any): Estilos personalizados que se aplicarán a cada elemento de la lista.

    alignItems (string): Alineación de los elementos en la lista (flex alignment).

    justifyContent (string): Justificación del contenido en la lista (flex justification).

    rippleColor (string): Color del efecto 'ripple'.

    rippleDuration (number): Duración del efecto 'ripple'.

    multiple (boolean): Permite la selección múltiple de elementos en la lista.

```

### Propiedades de Salida (`@Output`)

```typescript

itemClick (EventEmitter<unknown>): Evento que se emite cuando se hace clic en un elemento de la lista. Puede emitir un solo elemento o un arreglo de elementos seleccionados, dependiendo de si la lista es seleccionable y/o múltiple.

```

Cada uno de estos parámetros y decoradores juega un papel específico en la configuración y el comportamiento del componente FomentoListComponent, permitiendo una alta personalización de la lista y su funcionalidad.

Asegúrate de ajustar estas propiedades según tus necesidades para personalizar la apariencia y el contenido de la lista.

### Estilos y Personalización

Puede personalizar la apariencia del componente FomentoList usando las propiedades de estilo como theme, iconColor, textColor, y listItemStyle. Además, la funcionalidad del componente puede ser ajustada mediante propiedades como clickable, selectable, y multiple.

El componente es capaz de detectar y recibir elementos simples y complejos para construir la lista, mostrandolos según el caso. La mayoria de imputs de customización son opcionales, brindando la posibilidad de construir una lista sencilla, si es necesario, o customizar su complejidad según se necesite.
