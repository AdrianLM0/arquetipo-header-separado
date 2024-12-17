# fomento.plantilla.listado

`fomento.plantilla.listado` es un componente Angular que proporciona una plantilla para un listado de cards dinámicos y con dos vistas distintas, formato grid o formato lista.

## Instalación y servidor de desarrollo

Antes de comenzar, asegúrate de tener instalada la librería `@angular/material`. Si aún no lo has hecho, puedes instalarla ejecutando el siguiente comando:

```bash
npm install --save @angular/material
```

Luego, importa el módulo `MatFormFieldModule` en tu módulo Angular:

```typescript
import { MatPaginatorModule } from '@angular/material/formField';

@NgModule({
	imports: [
		// ...otros módulos
		MatFormFieldModule,
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

Una vez configuradas las dependencias, puedes utilizar el componente `Fomento-Plantilla-Listado` en tu aplicación Angular. Aquí hay un ejemplo de cómo puedes integrarlo en tu plantilla:

```html
<fomento-plantilla-listado
	[titlePrincipal]="title"
	[config_Card]="config_Card"
	(clickButtonEye)="buttonEye($event)"
	(clickButtonCsv)="buttonCsv($event)"
></fomento-plantilla-listado>
```

## Props

| Prop        | Tipo | Descripción                                                           |
| :---------- | :--: | :-------------------------------------------------------------------- |
| config_Card | JSON | Permite modificar la cantidad de cards que se mostrarán en el listado |

### Propiedades de Entrada (`@Input`)

#### Atributos de `Fomento-Plantilla-Listado`

- **titlePrincipal (string)** Establece un titulo principal al listado.
- **config_Card (any)** Configura la cantidad de cards que se mostrarán en el listado.
- **title (string):** Título del card.
- **data (any[]):** Alamecena los datos que se mostrarán en el select.
- **isGridContainer (boolean):** Establece los estilos al contenedor de las card en caso de ser formato grid, por defecto se establece a true.
- **isGrid (boolean):** Establece los estilos a cada card en caso de ser formato grid, por defecto está a true.
- **isRowContainer (boolean):** Establece los estilos al contenedor de las card en caso de ser formato lista, por defecto se establece a false.
- **isRow (boolean):** Establece los estilos a cada card en caso de ser formato lista, por defecto está a false.
- **iconGrid (string):** Establece el icono al botón que cambia el formato a grid.
- **iconRow (string):** Establece el icono al botón que cambia el formato a lista.
- **iconTitle (string):** Establece el icono al titulo de la card.

### Propiedades de Salida (`@Output`)

- **clickButtonEye (eventEmitter<any>):** Captura el evento que se genera al hacer click en el botón con el icono "eye".
- **clickButtonCsv (eventEmitter<any>):** Captura el evento que se genera al hacer click en el botón con el icono "fileCsv"

Ajusta estas propiedades según tus necesidades para personalizar la apariencia y el comportamiento de la plantilla listado.

¡Disfruta utilizando `Fomento-plantilla-listado` en tu aplicación Angular!

## Anexo

Para utilizar el breadcrum de la plantilla

```ts

  @ViewChild(FomentoPlantillaConsultaComponent) componentePlantilla!: FomentoPlantillaConsultaComponent;
  constructor(private router: Router){}

  ngAfterViewInit() {
    this.componentePlantilla?.gestionBreadcrumb(this.router.url)
  }
```
