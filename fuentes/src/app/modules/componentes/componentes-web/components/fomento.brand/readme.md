# Fomento-Brand

`lib-fomento-Brand` es un componente Angular que genera una imagen personalizada de la Junta de Andalucía. Permite distinguir entre una versión que utiliza la librería `@matter` y otra que utiliza `@angular/material`.

## Instalación

Asegúrate de tener la librería `@matter` instalada e importada. Puedes instalarla ejecutando:

```bash
npm install --save @matter/matter-brand
```

Luego, importa el componente `MatterBrandComponent` en tu componente o módulo Angular:

```typescript
import '@matter/matter-brand/dist/matter-brand';
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

Integrar el componente `lib-fomento-Brand` en tu aplicación Angular es sencillo. Aquí tienes un ejemplo de cómo utilizarlo en tu plantilla:

```html
<lib-fomento-brand
	typeStyle="material"
	[logo]="true"
	href_logo="URL_DE_LA_IMAGEN"
	href_caption="URL_DEL_TEXTO"
	name="Nombre de la Marca"
	caption="Subtítulo de la Marca"
	fontSize="16px"
></lib-fomento-brand>
```

Para no tener textos demasiados largos, el componente `Fomento-Brand` parte el texto a partir de la primera coma encontrada.

### Propiedades de entrada (`@Input`)

#### Atributo de Estilo

- **typeStyle (string):** Establece el estilo del brand, las opciones son 'material' o 'matter'.

#### Atributos de `lib-fomento-Brand`

- **logo (boolean):** Indica si se muestra el texto del logo.
- **href_logo (string):** Indica la URL de la imagen del logo.
- **name (string):** Texto que se muestra junto al logo.
- **caption (string):** Texto que se muestra junto al logo.
- **href_caption (string):** Indica la URL del texto junto al logo.
- **fontSize (string):** Tamaño del texto.

Ajusta estas propiedades según tus necesidades para personalizar la apariencia y el contenido del componente.
