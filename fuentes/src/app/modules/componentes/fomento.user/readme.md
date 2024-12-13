# fomento-user

El componente User es una de las piezas que conforman la barra de navegación de esta librería. Consiste en pequeño rectángulo que resume la información del perfil, además de contener un desplegable con distintos enlaces que permitan la gestión de este ámbito.

## Instalación y servidor de desarrollo

Antes de comenzar, asegúrate de tener instalada la librería `@angular/material`. Si aún no lo has hecho, puedes instalarla ejecutando el siguiente comando:

```bash
npm install --save @angular/material
```

Luego, importa el módulo `MatMenuModule` en tu módulo Angular:

```typescript
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
	imports: [
		// ...otros módulos
		MatMenuModule,
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

Una vez configuradas las dependencias, puedes utilizar el componente `FomentoUser` en tu aplicación Angular. Aquí hay un ejemplo de cómo puedes integrarlo en tu plantilla:
`html 
    <lib-fomento-user
    [data]="DATA"
    [usuario]="nombre_usuario" 
    [privilegioUsuario]="privilegioUsuario" 
    [ultimoAcceso]="ultimoAcceso" 
    [type]="type"
    width = '30%'
    height = '35%'
    privilegio = "Privilegio"
    [listaPrivilegios] = "['Administrador', 'Editor', 'Miembro', 'Invitado']"
    privilegioSeleccionado="Editor"
    label = 'Cambiar privilegio a:'
    [disabled] = "false"
    default = 'Selecciona privilegio'
    style = "material"
    labelButtonCancelar = "Cancelar"
    [disabledButtonCancelar] = "false"
    labelButtonCambiar = "Cambiar"
    [disabledButtonCambiar] = "true"
    themeButton = "secondary"
    styleButtonUser = "material"
    labelButtonCerrarSesion = "Cerrar sesión"
    [disabledButtonCerrarSesion] = "false"
    labelButtonCambiarRol = "Cambiar de rol"
    [disabledButtonCambiarRol] = "false"
    themeButtonUser = "secondary"
    [apiPLDA] = "false"
    iniciales_usuario = ""
    [errores] = "false"
    labelButtonOff = "Cerrar sesión"
    ></lib-fomento-user>
    `

## Props

| Prop                       |  Tipo   | Descripción                                                                             |
| :------------------------- | :-----: | :-------------------------------------------------------------------------------------- |
| data                       | string  | Proviene del JSON "Data" del atributo _nav_, el apartado "perfil"                       |
| usuario                    | string  | Contiene el nombre del usuario                                                          |
| privilegioUsuario          | string  | Atributo especifica el privilegio del usuario                                           |
| ultimoAcceso               | string  | Indica el último acceso del usuario                                                     |
| type                       | string  | Modifica el tipo de desplegable del botón del usuario                                   |
| width                      | string  | Indica a través de % el ancho del diálogo                                               |
| height                     | string  | Indica a través de % la altura del diálogo                                              |
| listaPrivilegios           | string  | Para poder cambiar de rol cuáles son las opciones que presentará el selector            |
| privilegioSeleccionado     | string  | De la lista de privilegio, cuál es la opción seleccionada                               |
| label                      | string  | Etiqueta del selector                                                                   |
| disabled                   | boolean | Si el selector está deshabilitado o no                                                  |
| default                    | string  | La opción por defecto, cuando no ha seleccionado ninguna opción                         |
| style                      | string  | Entre 'material' y 'matter'                                                             |
| label                      | string  | Etiqueta del selector                                                                   |
| labelButtonCancelar        | string  | Etiqueta del botón de cancelar                                                          |
| disabledButtonCancelar     | boolean | Permite deshabilitar el botón de cancelar                                               |
| labelButtonCambiar         | string  | Etiqueta del botón de cambiar                                                           |
| disabledButtonCambiar      | boolean | Permite deshabilitar el botón de cambiar                                                |
| themeButton                | string  | Permite cambiar el tema ('primary','secondary'..) del botón de dialogo                  |
| styleButtonUser            | string  | Permite cambiar la versión ('matter','material') del botón de dialogo                   |
| labelButtonCerrarSesion    | string  | Modifica la etiqueta del botón de Cerrar Sesión                                         |
| disabledButtonCerrarSesion | boolean | Permite deshabilitar el botón de cerrar sesión                                          |
| labelButtonCambiarRol      | string  | Modifica la etiqueta del botón de cambiar de rol                                        |
| disabledButtonCambiarRol   | boolean | Permite deshabilitar el botón de cambiar de rol                                         |
| themeButtonUser            | string  | Permite cambiar el tema ('primary','secondary'..) del botón de usuario                  |
| apiPLDA                    | boolean | Permite especificar si se quiere utilizar la api de PLDA                                |
| inicilades_usuario         | string  | Permite especificar las iniciales del usuario                                           |
| errores                    | boolean | Permite especificar si existen errores y por tanto no se muestra la barra de navegación |
| labelButtonOff             | string  | Permite la etiqueta del botón de 'Off'                                                  |

## Anexo

Variable data

```json
"perfil": [
    {
      "url": "",
      "iconChangeRol": "fas fa-exchange-alt",
      "labelBotonCambiaRol": "CAMBIAR DE ROL",
      "iconLogOut": "fas fa-sign-out-alt",
      "iconOff": "fas fa-power-off",
      "labelBotonLogOut": "CERRAR SESIÓN"
    }
  ]
```
