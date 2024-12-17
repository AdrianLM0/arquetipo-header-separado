# Componente Fomento Toolbar

## Descripción General

El `FomentoToolbarComponent` es un componente Angular diseñado para proporcionar una barra de herramientas personalizable. Incluye características como botones dinámicos para íconos con acciones asociadas, un título configurable y temas de color personalizables tanto para la barra de herramientas como para los íconos.

## Uso

Para usar el `FomentoToolbarComponent` en tu proyecto Angular, sigue estos pasos:

1. **Importar el Componente**: Asegúrate de que el `FomentoToolbarComponent` esté importado en el módulo relevante de tu aplicación Angular.

2. **Selector del Componente**: Incluye el selector `<lib-fomento-toolbar>` en tu plantilla HTML donde desees que aparezca la barra de herramientas.

## Entradas (Inputs)

El componente acepta las siguientes entradas:

- `title` (`string`): El título que se mostrará en la barra de herramientas.
- `iconNames` (`string[]`): Arreglo de nombres de íconos que se mostrarán como botones en la barra de herramientas.
- `iconActions` (`(() => void)[]`): Arreglo de funciones, cada una correspondiente a una acción que se ejecutará cuando se haga clic en su respectivo ícono.
- `toolbarColor` (`string`): Color de fondo de la barra de herramientas. Por defecto es `'default'`.
- `iconColor` (`string`): Color de los botones de íconos. Por defecto es `'default'`.

## Ejemplo

Aquí tienes un ejemplo de cómo implementar el `FomentoToolbarComponent`:

```html
<lib-fomento-toolbar
	[title]="'Mi Barra de Herramientas'"
	[iconNames]="['home', 'settings', 'info']"
	[iconActions]="[accionHome, accionSettings, accionInfo]"
	[toolbarColor]="'azul'"
	[iconColor]="'blanco'"
>
</lib-fomento-toolbar>

En el archivo TypeScript de tu componente, define las acciones accionHome,
accionSettings y accionInfo correspondientes a los íconos. Nota: Asegúrate de
importar todos los componentes necesarios de Material en tu proyecto para
utilizar el FomentoToolbarComponent de manera efectiva.
```
