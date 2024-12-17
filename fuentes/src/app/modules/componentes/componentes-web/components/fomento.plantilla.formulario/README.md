# fomento.plantilla.formulario

`fomento.plantilla.formulario` es un componente Angular que proporciona una plantilla para un forumlario general, con los diferentes campos que este pueda necesitar, como inputs, checkbox, select, etc.

## Instalación y servidor de desarrollo

Antes de comenzar, asegúrate de tener instalada la librería `@angular/material`. Si aún no lo has hecho, puedes instalarla ejecutando el siguiente comando:

```bash
npm install --save @angular/material
```

Luego, importa el módulo `MatFormFieldModule` en tu módulo Angular:

```typescript
import { MatFormFieldModule } from '@angular/material/formField';

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

Una vez configuradas las dependencias, puedes utilizar el componente `FomentoPlantilla-Formulario` en tu aplicación Angular. Aquí hay un ejemplo de cómo puedes integrarlo en tu plantilla:

**ESTE ELEMENTO SIEMPRE DEBE IR CONTENIDO EN UNA TABLA**

```html
<lib-fomento-plantilla-formulario
	[title]="title"
	[form_config]="form_config"
	[reset_button]="reset_button"
	[submit_button]="submit_button"
	[showSubmit]="showSubmit"
	[showReset]="showReset"
>
</lib-fomento-plantilla-formulario>
```

## Props

| Prop        | Tipo | Descripción                                          |
| :---------- | :--: | :--------------------------------------------------- |
| form_config | JSON | Permite modificar el tamaño y formato del formulario |

### Propiedades de Entrada (`@Input`)

#### Atributos de `lib-fomento-Plantilla-Formulario`

- **title:** Establece un titulo principal al formulario.
- **form_config:** Configura la estructura del formulario y los campos que este contendrá.
- **reset_button (string):** Dará no al botón "Tramitar".
- **submit_button (string):** Dará nombre al botón "Guardar".
- **showSubmit (boolean):** Se establece en true por defecto, para que el botón Tramitar sea siempre visible.
- **showReset (boolean):** Se establece en true por defecto, para que el botón Guardar sea siempre visible.

Ajusta estas propiedades según tus necesidades para personalizar la apariencia y el comportamiento de la plantilla formulario.

¡Disfruta utilizando `Fomento-plantilla-formulario` en tu aplicación Angular!

## Anexo

Para utilizar el breadcrum de la plantilla

```ts

  @ViewChild(FomentoPlantillaConsultaComponent) componentePlantilla!: FomentoPlantillaConsultaComponent;
  constructor(private router: Router){}

  ngAfterViewInit() {
    this.componentePlantilla?.gestionBreadcrumb(this.router.url)
  }
```
