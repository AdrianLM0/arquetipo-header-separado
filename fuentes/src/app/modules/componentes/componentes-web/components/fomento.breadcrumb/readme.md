# Fomento-breadcrumb

`lib-fomento-breadcrumb` es un componente Angular que genera un breadcrumb que muestra la linea de navegación de la aplicación.

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

Para integrar el componente `lib-fomento-breadcrumb` en tu aplicación Angular aquí tienes un ejemplo de cómo realizarla:

```html
<lib-fomento-breadcrumb></lib-fomento-breadcrumb>
```

En el .ts del componente habrá que añadir las siguientes líneas:

```ts
@ViewChild(FomentoBreadcrumbComponent, { static:true}) breadCrumb: FomentoBreadcrumbComponent

constructor(private router: Router) {}

ngAfterViewInit(fullPath: string ){
    this.breadCrumb.gestionBreadcrumbs(this.router.url)
  }
```
