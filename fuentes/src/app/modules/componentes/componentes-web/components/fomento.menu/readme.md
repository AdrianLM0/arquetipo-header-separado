# fomento-menu

El componente menú es una de las piezas que conforman la barra de navegación de esta librería. Consiste en un conglomerado de elementos que permiten, listar secciones que contengan enlaces, el componente _lib-fomento-user_...

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

Una vez configuradas las dependencias, puedes utilizar el componente `FomentoMenu` en tu aplicación Angular. Aquí hay un ejemplo de cómo puedes integrarlo en tu plantilla:

    ```html
    <lib-fomento-menu
    [DATA]="data"
    [mostramenu_usuario]="true"
    nombre_usuario="Nombre Apellido"
    privilegioUsuario=""
    ultimoAcceso=""
    type="basic"
    ></lib-fomento-menu>
    ```

## Props

| Prop                |       Tipo       | Descripción                                                                   |
| :------------------ | :--------------: | :---------------------------------------------------------------------------- |
| data                |      string      | JSON que contiene la información de las distintas secciones                   |
| nombre_usuario      |      string      | nombre del usuario                                                            |
| mostrarmenu_usuario |     boolean      | Esconde o muestra el perfil según se especifique                              |
| type                | advance // basic | Permite cambiar entre los dos tipos de componente de usuario                  |
| ultimoAcceso        |      string      | Una fecha que representa el último acceso del usuario                         |
| privilegioUsuario   |      string      | Especifica el privilegio del usuario para mostrarlo en la barra de navegación |

## Anexo

Versión Material

```json
data_mat = `{
    "secciones": [{
            "name": "La Junta",
            "url": "",
            "id": "iconos_Junta",
            "icon": "jda",
            "familyIcon": "fac",
            "subSecciones": [{"url":"", "titulo": "La Junta"}]
        }, {
            "name": "Servicios",
            "url": "",
            "id": "iconos_Servicios",
            "icon": "laptop",
            "familyIcon": "fas",
            "subSecciones": []
        }, {
            "name": "Noticias",
            "url": "",
            "id": "iconos_Noticias",
            "icon": "newspaper",
            "familyIcon": "fas",
            "subSecciones": []
        }, {
            "name": "Noticias",
            "url": "",
            "id": "iconos_Noticias",
            "icon": "newspaper",
            "familyIcon": "fas",
            "subSecciones": []
        }
    ],
    "perfil": [{"url":"","titulo":"Ir a mi perfil"}, {"url":"","titulo":"Cerrar Sesión"}]
    }
```

Versión Matter

```json
{
	"enlacesCabecera": [
		{
			"name": "Contacto",
			"icon": "",
			"familyIcon": "",
			"href": "/informacion/contacto.html",
			"size": "md"
		},
		{
			"name": "Mapa web",
			"icon": "",
			"familyIcon": "",
			"href": "/informacion/mapaweb.html",
			"size": "md"
		}
	],
	"socialCabecera": [
		{
			"name": "twitter",
			"image": "",
			"textoImage": "",
			"href": "https://twitter.com/andaluciajunta",
			"icon": "twitter",
			"familyIcon": "fab",
			"size": "lg"
		},
		{
			"name": "Instagram",
			"image": "",
			"textoImage": "",
			"href": "https://www.instagram.com/andaluciajunta/",
			"icon": "instagram",
			"familyIcon": "fab",
			"size": "lg"
		},
		{
			"name": "Facebook",
			"image": "",
			"textoImage": "",
			"href": "https://www.facebook.com/AndaluciaJunta",
			"icon": "facebook-f",
			"familyIcon": "fab",
			"size": "lg"
		},
		{
			"name": "Youtube",
			"image": "",
			"textoImage": "",
			"href": "https://www.youtube.com/channel/UCwoAou1VZfbYfz-TysRzDCA",
			"icon": "youtube",
			"familyIcon": "fab",
			"size": "lg"
		}
	],
	"logos": [
		{
			"name": "logojuntanavbar",
			"imageLogo": "https://www.juntadeandalucia.es/themes/custom/terra/logo-jda.png",
			"imageOrganismo": "https://www.juntadeandalucia.es/themes/custom/terra/logo-junta.png",
			"hrefLogo": "https://www.juntadeandalucia1.es/",
			"hrefOrganismo": "https://www.juntadeandalucia2.es/",
			"textoAltOrganismo": "CARPETA CIUDADANA"
		}
	],
	"secciones": [
		{
			"name": "Transparencia",
			"url": "",
			"urlTitulo": "",
			"image": "",
			"textoImage": "",
			"id": "iconos_Transparencia",
			"icon": "tint",
			"familyIcon": "fas",
			"size": "md",
			"modeloDropDownSecciones": "2",
			"seccionDirectoA": [
				{
					"titulo": "",
					"enlace": "",
					"icon": "",
					"familyIcon": ""
				}
			],
			"subSecciones": [
				{
					"columnas": [
						{
							"titulo": "Información institucional y organizativa",
							"enlace": "/temas/estudiar/infantil.html",
							"seccion": "Transparencia",
							"id": "iconos_Transparencia_subseccion1",
							"image": "",
							"textoImage": "",
							"descripcionSeccion": "",
							"enlaceVerMas": "",
							"descripcion": [
								{
									"descripciones": "",
									"enlace": ""
								}
							]
						},
						{
							"titulo": "Empleo público",
							"enlace": "/temas/estudiar/primaria-eso.html",
							"seccion": "Transparencia",
							"id": "iconos_Transparencia_subseccion2",
							"image": "",
							"textoImage": "",
							"descripcionSeccion": "",
							"enlaceVerMas": "",
							"descripcion": [
								{
									"descripciones": "",
									"enlace": ""
								}
							]
						},
						{
							"titulo": "Altos cargos",
							"enlace": "/temas/estudiar/bachillerato.html",
							"seccion": "Transparencia",
							"id": "iconos_Transparencia_subseccion3",
							"image": "",
							"textoImage": "",
							"descripcionSeccion": "",
							"enlaceVerMas": "",
							"descripcion": [
								{
									"descripciones": "",
									"enlace": ""
								}
							]
						},
						{
							"titulo": "Planificación, evaluación y estadística",
							"enlace": "/temas/estudiar/fp.html",
							"seccion": "Transparencia",
							"id": "iconos_Transparencia_subseccion4",
							"image": "",
							"textoImage": "",
							"descripcionSeccion": "",
							"enlaceVerMas": "",
							"descripcion": [
								{
									"descripciones": "",
									"enlace": ""
								}
							]
						}
					]
				}
			]
		}
	],
	"perfil": [
		{
			"name": "Mis consentimientos",
			"image": "",
			"texto": "Mis consentimientos",
			"id": "consentimientos",
			"icon": "user",
			"familyIcon": "fas",
			"size": "md",
			"href": "/carpetades/#/servicios/funcionalidades/pagoTelematico"
		},
		{
			"name": "Mis datos de contacto",
			"image": "",
			"texto": "Mis datos de contacto",
			"id": "datosContacto",
			"icon": "user",
			"familyIcon": "fas",
			"size": "md",
			"href": "/carpetades/#/servicios/funcionalidades/pagoTelematico"
		},
		{
			"name": "QR para acceso en app",
			"image": "",
			"texto": "QR para acceso en app",
			"id": "modalQR",
			"icon": "qrcode",
			"familyIcon": "fas",
			"size": "md",
			"href": ""
		}
	],
	"listOpcionesAdministrador": [
		{
			"name": "Gestión de entidades",
			"icon": "edit",
			"familyIcon": "fas",
			"href": "/carpetades/#/entity",
			"size": "md"
		},
		{
			"name": "Gestión de usuarios",
			"icon": "user",
			"familyIcon": "fas",
			"href": "/carpetades/#/cc-impersonate",
			"size": "md"
		},
		{
			"name": "Envío de avisos",
			"icon": "bell",
			"familyIcon": "far",
			"href": "/carpetades/#/envioAvisos",
			"size": "md"
		},
		{
			"name": "Métricas",
			"icon": "tachometer-alt",
			"familyIcon": "fas",
			"href": "/carpetades/#/cc-metrics",
			"size": "md"
		},
		{
			"name": "Salud",
			"icon": "heart",
			"familyIcon": "fas",
			"href": "/carpetades/#/cc-health",
			"size": "md"
		},
		{
			"name": "Configuración",
			"icon": "list",
			"familyIcon": "fas",
			"href": "/carpetades/#/cc-configuration",
			"size": "md"
		},
		{
			"name": "Logs",
			"icon": "tasks",
			"familyIcon": "fas",
			"href": "/carpetades/#/logs",
			"size": "md"
		}
	],
	"ocultarAccesibilidadTopHeader": "false",
	"ocultarSocialTopHeader": "false",
	"ocultarPopUpMiPerfil": "false",
	"ocultarBarraVerde": "true",
	"ocultarTextosLogos": "false",
	"ocultarSecciones": "false",
	"ocultarSeccionMiPerfil": "true",
	"perfilPrincipal": "Joe Black",
	"enlaceSeccionMiPerfil": "",
	"enlaceMiPerfil": "/carpetades/#/servicios/asistencia/SUGERENCIA_GENERAL",
	"usuarioLogado": "true",
	"enlaceCerrarSesion": "",
	"isAdministrador": "true",
	"ultimoAcceso": "06-03-1996",
	"fechaHoy": "04 de Abril de 2021",
	"horaHoy": "14:43:13",
	"perfilIconIN": "user-circle",
	"perfilIcon": "users-cog",
	"listaIcon": "caret-square-right",
	"perfilText": "Mi perfil",
	"razonSocial": "",
	"userFuncionario": "6116",
	"nombrefuncionarioRepresentante": "Anne White",
	"listaServicios": "",
	"tamlistaServicio": "",
	"clickRealizado": "true",
	"codigoModal": "ASDGHYDHGFSFGA",
	"imagenModal": "",
	"imagenModalPequeNa": "images/mano-qr.png",
	"mostrarModal": "",
	"textSupModal": "Use la aplicación móvil de Carpeta Ciudadana para iniciar sesión.",
	"textInfModal": "Escanee con su dispositivo o introduzca manualmente el siguiente código para continuar el proceso de autenticación. ",
	"mostrarBuscarResponsive": "true",
	"urlBuscarResponsive": "/enlace/buscar/responsive"
}
```
