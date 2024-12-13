# fomento-nav

lib-fomento-nav genera la cabecera de la página. Se trata de una molécula ya que utiliza varios átomos para funcionar. Permite distinguir entre dos tipos de opciones; usar la librería `@matter`, o usar `@angular/material`

![Matter](https://i.postimg.cc/J00XLqbv/image-README.png)

## Instalación y servidor de desarrollo

Antes de comenzar, asegúrate de tener instalada la librería `@angular/material`. Si aún no lo has hecho, puedes instalarla ejecutando el siguiente comando:

```bash
npm install --save @angular/material
```

Luego, importa el módulo `MatToolbarModule` y `MatMenuModule` en tu módulo Angular:

```typescript
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
	imports: [
		// ...otros módulos
		MatToolbarModule,
		MatMenuModule,
	],
	// ...otros metadatos del módulo
})
export class AppModule {}
```

Además, asegúrate de tener la librería `@matter` instalada e importada. Puedes instalarla ejecutando:

```bash
npm install --save @matter/matter-header
```

Luego, importa el componente `MatterHeaderComponent` en tu componente o módulo Angular:

```typescript
import '@matter/matter-header/dist/matter-header';
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
   npm config set @fomento:registry=https://nexus.paas.junta-andalucia.es/repository/msd.npm-private/
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

Una vez configuradas las dependencias, puedes utilizar el componente `FomentoNav` en tu aplicación Angular. Aquí hay un ejemplo de cómo puedes integrarlo en tu plantilla:

```html
<lib-fomento-nav
	typeStyle="matter"
	perfil="PERFIL"
	data_mat="DATA_MAT"
	version="VERSION"
	urlAyuda="URLAYUDA"
	brandStyle="BRANDSTYLE"
	brandName="BRANDNAME"
	brandCaption="BRANDCAPTION"
	[mostrar_perfil]="MOSTRARPERFIL"
	[mostrarfecha]="MOSTRARFECHA"
	[mostrarhora]="MOSTRARHORA"
	data_matter="DATA_MATTER"
	opcionesAdministrador="OPCIONES_ADMINISTRADOR"
	ocultarAccesibilidadTopHeader="OCULTAR_ACCESIBILIDAD_TOP_HEADER"
	ocultarSocialTopHeader="OCULTAR_SOCIAL_TOP_HEADER"
	ocultarPopUpMiPerfil="OCULTAR_POPUP_MI_PERFIL"
	ocultarBarraVerde="OCULTAR_BARRA_VERDE"
	ocultarTextosLogos="OCULTAR_TEXTO_LOGOS"
	ocultarSecciones="OCULTAR_SECCIONES"
	ocultarSeccionMiPerfil="OCULTAR_SECCION_MI_PERFIL"
	enlaceSeccionMiPerfil="ENLACE_SECCION_MI_PERFIL"
	enlaceMiPerfil="ENLACE_MI_PERFIL"
	usuarioLogado="USUARIO_LOGADO"
	enlaceCerrarSesion="ENLACE_CERRAR_SESSION"
	isAdministrador="IS_ADMINISTRADOR"
	ultimoAcceso="ULTIMO_ACCESO"
	fechaHoy="FECHA_HOY"
	horaHoy="HORA_HOY"
	perfilIconIN="PERFIL_ICON_IN"
	perfilIcon="PERFIL_ICON"
	listaIcon="LISTA_ICON"
	perfilText="PERFIL_TEXT"
	razonSocial="RAZON_SOCIAL"
	userFuncionario="USER_FUNCIONARIO"
	nombrefuncionarioRepresentante="NOMBRE_FUNCIONARIO_REPRESENTANTE"
	listaServicios="LISTA_SERVICIOS"
	tamlistaServicio="TAM_LISTA_SERVICIOS"
	clickRealizado="CLICK_REALIZADO"
	codigoModal="CODIGO_MODAL"
	imagenModal="IMAGEN_MODAL"
	imagenModalPequeNa="IMAGEN_MODAL_PEQUEÑA"
	mostrarModal="MOSTRAR_MODAL"
	textSupModal="TEXT_SUP_MODAL"
	textInfModal="TEXT_INF_MODAL"
	[nombre_usuario]="Nombre del usuario logado"
	[privilegioUsuario]="Administrador"
	[ultimoAcceso]="fecha y hora del último acceso"
	[type]="advance"
></lib-fomento-nav>
```

## Props

| Prop                           |  Tipo   | Descripción                                                                                        |
| :----------------------------- | :-----: | :------------------------------------------------------------------------------------------------- |
| typeStyle                      | string  | Entre 'material' y 'matter' permite elegir la tecnología sobre la que se construirá el componente. |
| perfil                         | string  | Define el nombre de perfil.                                                                        |
| version                        | string  | En la cabecera es posible especificar la versión de la aplicación/sistema                          |
| urlAyuda                       | string  | página a la que redirigir al pulsar en el botón de ayuda                                           |
| brandStyle                     | string  | Puedes seleccionar entre el componente _brand_ de @matter o el que usa @angular/material           |
| brandName                      | string  | El nombre que contendrá el componente                                                              |
| brandCaption                   | string  | El subtítulo que presentará el _brand_                                                             |
| mostrar_perfil                 | boolean | Permite mostrar o esconder el perfil de usuario                                                    |
| mostrarfecha                   | boolean | Elimina de la cabecera la fecha actual                                                             |
| mostrarhora                    | boolean | Elimina de la cabecera la hora actual                                                              |
| data_mat                       |  array  | Listado de datos que se van a mostrar si tu elección de estilo fue material.                       |
| data_matter                    |  array  | Listado de datos que se van a mostrar si eleccion de estilo fue matter.                            |
| opcionesAdministrador          |  array  | Configuración opciones admin                                                                       |
| ocultarAccesibilidadTopHeader  | boolean | Oculta sección de contacto y mapa web.                                                             |
| ocultarSocialTopHeader         | boolean | Oculta sección de redes sociales.                                                                  |
| ocultarBarraVerde              | boolean | Oculta barra verde que indica el final del header.                                                 |
| ocultarTextosLogos             | boolean | Oculta el texto de los logos.                                                                      |
| ocultarSecciones               | boolean | Oculta todas las secciones.                                                                        |
| ocultarSeccionMiPerfil         | boolean | Oculta sección mi perfil.                                                                          |
| enlaceSeccionMiPerfil          | string  | Define el enlace a la sección mi perfil                                                            |
| usuarioLogado                  | boolean | Indica si el usuario esta logado o no                                                              |
| enlaceCerrarSesion             | string  | Define el enlace para cerrar sesión                                                                |
| isAdministrador                | string  | ID Administrador                                                                                   |
| ultimoAcceso                   | string  | Fecha último acceso                                                                                |
| fechaHoy                       | string  | Fecha actual                                                                                       |
| perfilIconIN                   | string  | Icono de perfil zona interior                                                                      |
| perfilIcon                     | string  | Icono perfil                                                                                       |
| perfilText                     | string  | Texto del perfil                                                                                   |
| razonSocial                    | string  | Razón social del perfil                                                                            |
| userFuncionario                | string  | Nº de funcionario                                                                                  |
| nombrefuncionarioRepresentante | string  | Nombre funcionario representante                                                                   |
| listaServicios                 |  array  | Lista de servicios                                                                                 |
| tamlistaServicio               | string  | Tamaño de la lista de servicios                                                                    |
| clickRealizado                 | boolean | Indica si ha realizado click                                                                       |
| codigoModal                    | string  | Código modal                                                                                       |
| imagenModal                    | string  | Imagen del modal                                                                                   |
| imagenModalPequeNa             | string  | Imagen del modal pequeña                                                                           |
| textSupModal                   | string  | Texto superior del modal                                                                           |
| textInfModal                   | string  | Texto inferior del modal                                                                           |
| url_ayuda                      | string  | Url que redirecciona el botón + icono de "Ayuda"                                                   |
| nombre_usuario                 | string  | Nombre del usuario logado                                                                          |
| ultimoAcceso                   | string  | Muestra la fecha y hora del último acceso del usuario logado                                       |
| privilegioUsuario              | string  | Indica los privilegios que tiene el usuario logado                                                 |
| type                           | string  | Indica con 'advance' o 'basic' el tipo de desplegable que tendrá el botón user de la navegación    |

## Anexo

Versión Material

```json
data_mat = {
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

Ejemplo opciones administrador (versión MATTER)

```json
opcionesAdministrador: {
    "listOpcionesAdministrador":
    [
      {
        "name":"Gestión de entidades",
        "icon":"edit","familyIcon":"fas",
        "href":"/carpetades/#/entity","size":"md"
      },
      {
        "name":"Gestión de usuarios",
        "icon":"user","familyIcon":"fas",
        "href":"/carpetades/#/cc-impersonate",
        "size":"md"
      },
      {
        "name":"Envío de avisos",
        "icon":"bell",
        "familyIcon":"far",
        "href":"/carpetades/#/envioAvisos",
        "size":"md"
      },
      {
        "name":"Métricas",
        "icon":"tachometer-alt",
        "familyIcon":"fas",
        "href":"/carpetades/#/cc-metrics",
        "size":"md"
      },
      {
        "name":"Salud",
        "icon":"heart",
        "familyIcon":"fas",
        "href":"/carpetades/#/cc-health",
        "size":"md"
      },
      {
        "name":"Configuración",
        "icon":"list",
        "familyIcon":"fas",
        "href":"/carpetades/#/cc-configuration",
        "size":"md"
      },
      {
        "name":"Logs",
        "icon":"tasks",
        "familyIcon":"fas",
        "href":"/carpetades/#/logs",
        "size":"md"
      }
    ]
  }
```
