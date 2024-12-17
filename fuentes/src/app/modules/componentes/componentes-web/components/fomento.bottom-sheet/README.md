# Fomento-bottom-sheet

`lib-fomento-bottom-sheet` es un componente Angular que simplifica la creación de desplegables inferiores. Este componente, parte de la colección de Web Components de Angular.

## Instalación

Antes de comenzar, asegúrate de tener instalada la librería `@angular/material`. Si aún no lo has hecho, puedes instalarla ejecutando el siguiente comando:

```bash
npm install --save @angular/material
```

Luego, importa el módulo `MatBottomSheetModule` en tu módulo Angular:

```typescript
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

@NgModule({
	imports: [
		// ...otros módulos
		MatBottomSheetModule,
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

Integrar el componente `lib-fomento-bottom-sheet` en tu aplicación Angular es sencillo. Aquí tienes un ejemplo de cómo utilizarlo en tu plantilla:

    ```html
<lib-fomento-bottom-sheet (bottomSheet)="procesaEventoBottomSheet()"
    [label]="label"
    [theme]="theme"
    [icon]="icon"
    [disabled]="disabled"
    [aria_label]="aria_label"
    [disableRipple]="disableRipple">
</lib-fomento-bottom-sheet>

    ```
El método `procesaEventoBottomSheet()` es responsable de abrir el componente BottomSheetOverviewExampleComponent y de pasarle los datos necesarios, como los enlaces que se deben mostrar en el desplegable. Aquí está el código que necesitas agregar en la clase que implementa la librería:

```typescript
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetOverviewExampleComponent } from '@fomento/i-rf-web-component-node-lib';

export class EjemploFomentoBottomSheetComponent {
  links = [
    { title: 'Ayudas Plan EcoVivienda', url: 'https://example.com/plan-eco-vivienda', subtitle: 'Add to a note' },
    { title: 'Programa Garantía de Vivienda Joven', url: 'https://example.com/garantia-vivienda-joven', subtitle: 'Embed in a document' },
    { title: 'Bono Alquiler Joven en Andalucía', url: 'https://example.com/bono-alquiler' },
    { title: 'Info.vivienda', url: 'https://example.com/info-vivienda', subtitle: 'Show to your coworkers' }
  ];

  constructor(private _bottomSheet: MatBottomSheet) {}

  procesaEventoBottomSheet(): void {
    console.log(this.links); // Verifica que los datos están disponibles
    this._bottomSheet.open(BottomSheetOverviewExampleComponent, {
      data: { links: this.links }
    });
  }
}

```

### Propiedades de Entrada (`@Input`)

#### Atributos de `lib-fomento-bottom-sheet`

- **label (string):** Texto del botón.
- **theme (string):**Tipo de botón que queremos mostrar, las opciones son: 'primary', 'warn', 'accent'.
- **icon (string):** Especifica el nombre del icono. Utiliza la librería Font Awesome (p. ej. para fa-house el valor de icon sería simplemente 'house').
- **disabled (boolean):** Indica si el componente está deshabilitado, por defecto habilitado.
- **aria_label (string):** Texto descriptivo para usuarios de tecnologías de asistencia.
- **disableRipple (boolean):** Desactiva la animación de ripple del botón. Por defecto a true.

### Propiedades de Salida (`@Output`)

- **bottomSheet (EventEmitter):** Evento que se emite al hacer click y que servirá para la apertura del desplegable inferior.

Ajusta estas propiedades según tus necesidades para personalizar la apariencia y el comportamiento del bottom sheet.

- **Método procesaEventoBottomSheet()**
Este método es esencial para implementar el comportamiento del desplegable inferior en la clase que lo utilice. Lo que hace es abrir el componente BottomSheetOverviewExampleComponent, pasando una lista de enlaces a través de la inyección de datos en MatBottomSheet.

```typescript
procesaEventoBottomSheet(): void {
  console.log(this.links); // Verifica que los datos están disponibles
  this._bottomSheet.open(BottomSheetOverviewExampleComponent, {
    data: { links: this.links }
  });
}
```
Este método se debe incluir en la clase que maneje el evento del botón para abrir el bottom sheet, y los datos de links se pasarán dinámicamente al componente que se despliega.

¡Disfruta utilizando `Fomento-bottom-sheet` en tu aplicación Angular!
