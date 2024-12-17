# Fomento-footer

Fomento-footer genera el pie de página. Se trata de una molécula ya que utiliza varios átomos para funcionar. Forma parte del catálogo corporativo de Web Components de la Junta de Andalucía.

![Matter](https://i.postimg.cc/sfwKCG4p/image-README.png)

## Instalación y servidor de desarrollo

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

## Uso

Para hacer uso de este web-component se deberá realizar dos sencillos pasos:

1. Importar el compilado del web-component en el proyecto actual:
   ```bash
   import from '@matter/matter-footer/dist/matter-footer'
   ```
2. Una vez importado, llamar a dicho web-component a partir de su etiqueta propia individual. Esta llamada se debe realizar desde el fichero .html donde se quiera mostrar el web-component:

```html
<fomento-footer
	data="URL"
	ocultarSecciones="OCULTARSECCIONES"
	ocultarSeccionSocial="OCULTARSECCIONESSOCIAL"
></fomento-footer>
```

## Props

| Prop                 |  Tipo   | Descripción                                         |
| :------------------- | :-----: | :-------------------------------------------------- |
| data                 | String  | EndPoint / JSON con los datos que se van a mostrar. |
| ocultarSecciones     | boolean | Oculta las secciones de los enlaces.                |
| ocultarSeccionSocial | boolean | Oculta sección de redes sociales.                   |

# fomento-footer

`lib-fomento-footer` es un componente web que genera el pie de página. Este componente forma parte de la librería `i-rf-web-component-node-lib` y ofrece diversas propiedades para personalizar su apariencia y comportamiento.

Instalación y servidor de desarrollo

Para incorporar `lib-fomento-footer` en tu proyecto, sigue estos pasos:

1. Instalar la librería `i-rf-web-component-node-lib`:

```
npm install i-rf-web-component-node-lib
```

2. Importar `lib-fomento-footer` en tu archivo module:

import 'i-rf-web-component-node-lib/lib-fomento-footer.js';

3. Llamar al web-component en tu archivo .html:

```html
<lib-fomento-footer
	typeStyle="MATERIAL"
	data="URL"
	ocultarSecciones="OCULTARSECCIONES"
	ocultarSeccionSocial="OCULTARSECCIONESSOCIAL"
></lib-fomento-footer>
```

## Props

| Prop                 |  Tipo   | Descripción                                         |
| :------------------- | :-----: | :-------------------------------------------------- |
| typeStyle            | String  | Establece el estilo del componente.                 |
| data                 | String  | EndPoint / JSON con los datos que se van a mostrar. |
| ocultarSecciones     | boolean | Oculta las secciones de los enlaces.                |
| ocultarSeccionSocial | boolean | Oculta sección de redes sociales.                   |

## Anexo

1.- Atributo 'data'

```json

data_footer = `{
    "columns": [
      {
        "columna": [
          {
            "title": "Temas",
            "array": [
              {
                "title": "Estudiar",
                "href": "/carpetades/#/informacion/citas/proximasCitas/#",
                "image": ""
              },
              {
                "title": "Trabajar",
                "href": "/carpetades/#/informacion/tarjetas/verTodas",
                "image": ""
              },
              {
                "title": "Tu salud",
                "href": "/carpetades/#/informacion/datos",
                "image": "null"
              },
              {
                "title": "Vivienda y consumo",
                "href": "/carpetades/#/informacion/datos",
                "image": "null"
              },
              {
                "title": "Familias e igualdad",
                "href": "/carpetades/#/informacion/datos",
                "image": "null"
              },
              {
                "title": "Atención administrativa e impuestos",
                "href": "/carpetades/#/informacion/datos",
                "image": "null"
              },
              {
                "title": "Tráfico y transporte",
                "href": "/carpetades/#/informacion/datos",
                "image": "null"
              },
              {
                "title": "Medio ambiente",
                "href": "/carpetades/#/informacion/datos",
                "image": "null"
              },
              {
                "title": "Asociaciones y voluntariado",
                "href": "/carpetades/#/informacion/datos",
                "image": "null"
              },
              {
                "title": "Turismo, cultura y ocio",
                "href": "/carpetades/#/informacion/datos",
                "image": "null"
              },
              {
                "title": "Justicia, seguridad y emergencias",
                "href": "/carpetades/#/informacion/datos",
                "image": "null"
              },
              {
                "title": "Nuevas tecnologías",
                "href": "/carpetades/#/informacion/datos",
                "image": "null"
              },
              {
                "title": "Contratación pública",
                "href": "/carpetades/#/informacion/datos",
                "image": "null"
              },
              {
                "title": "Empresas y profesionales",
                "href": "/carpetades/#/informacion/datos",
                "image": "null"
              },
              {
                "title": "Sectores de actividad",
                "href": "/carpetades/#/informacion/datos",
                "image": ""
              }
            ]
          }
        ]
      },
      {
        "columna": [
          {
            "title": "La Junta",
            "array": [
              {
                "title": "Presidente",
                "href": "/carpetades/#/tramites/notificaciones",
                "image": ""
              },
              {
                "title": "Vicepresidente",
                "href": "/carpetades/#/tramites/registros",
                "image": ""
              },
              {
                "title": "Parlamento y otras instituciones",
                "href": "/carpetades/#/tramites/compulsas",
                "image": ""
              },
              {
                "title": "Transparencia",
                "href": "/carpetades/#/tramites/expedientes",
                "image": ""
              },
              {
                "title": "Consejo de Gobierno",
                "href": "/carpetades/#/tramites/consultaPagosRecibidos",
                "image": ""
              },
              {
                "title": "Consejerías",
                "href": "/carpetades/#/tramites/consultaPagosRecibidos",
                "image": ""
              }
            ]
          },
          {
            "title": "Servicios",
            "array": [
              {
                "title": "Trámites",
                "href": "/carpetades/#/tramites/notificaciones",
                "image": ""
              },
              {
                "title": "Boja",
                "href": "/carpetades/#/tramites/registros",
                "image": ""
              },
              {
                "title": "Servicios de Información",
                "href": "/carpetades/#/tramites/compulsas",
                "image": ""
              }
            ]
          }
        ]
      },
      {
        "columna": [
          {
            "title": "Noticias",
            "array": [
              {
                "title": "Portada",
                "href": "/carpetades/#/servicios/asistencia/SUGERENCIA_GENERAL",
                "image": ""
              },
              {
                "title": "Últimas noticias",
                "href": "/carpetades/#/servicios/funcionalidades/pagoTelematico",
                "image": ""
              },
              {
                "title": "Gobierno al día",
                "href": "/carpetades/#/servicios/infoCC",
                "image": ""
              },
              {
                "title": "Emergencias 112",
                "href": "https://www.juntadeandalucia.es/servicios/cartas-servicio.html",
                "image": ""
              },
              {
                "title": "Economía y empleo",
                "href": "https://sede.administracion.gob.es/carpeta/clave.html",
                "image": ""
              },
              {
                "title": "Salud",
                "href": "/carpetades/#/servicios/asistencia/SUGERENCIA_GENERAL",
                "image": ""
              },
              {
                "title": "Educación",
                "href": "/carpetades/#/servicios/funcionalidades/pagoTelematico",
                "image": ""
              },
              {
                "title": "Social",
                "href": "/carpetades/#/servicios/infoCC",
                "image": ""
              },
              {
                "title": "Infraestructuras",
                "href": "https://www.juntadeandalucia.es/servicios/cartas-servicio.html",
                "image": ""
              },
              {
                "title": "Turismo",
                "href": "https://sede.administracion.gob.es/carpeta/clave.html",
                "image": ""
              },
              {
                "title": "Tierra y mar",
                "href": "/carpetades/#/servicios/asistencia/SUGERENCIA_GENERAL",
                "image": ""
              },
              {
                "title": "Cultura",
                "href": "/carpetades/#/servicios/funcionalidades/pagoTelematico",
                "image": ""
              },
              {
                "title": "Sala de prensa",
                "href": "/carpetades/#/servicios/infoCC",
                "image": ""
              },
              {
                "title": "Buscador de noticias",
                "href": "https://www.juntadeandalucia.es/servicios/cartas-servicio.html",
                "image": ""
              },
              {
                "title": "Suscripción",
                "href": "https://sede.administracion.gob.es/carpeta/clave.html",
                "image": ""
              }
            ]
          }
        ]
      },
      {
        "columna": [
          {
            "title": "Información general",
            "array": [
              {
                "title": "Contacto",
                "href": "#",
                "image": ""
              },
              {
                "title": "Mapa web",
                "href": "#",
                "image": ""
              },
              {
                "title": "Listas de correo",
                "href": "#",
                "image": ""
              },
              {
                "title": "Fuentes web",
                "href": "#",
                "image": ""
              }
            ]
          }
        ]
      }
    ],
    "links": [
      {
        "title": "Accesibilidad",
        "href": "#"
      },
      {
        "title": "Aviso legal",
        "href": "#"
      },
      {
        "title": "Protección de datos",
        "href": "#"
      }
    ],
    "social": [
      {
        "title": "Síguenos en: ",
        "array": [
          {
            "title": "twitter",
            "href": "https://www.ejemplo1.com/",
            "image": "",
            "icon": "twitter"
          },
          {
            "title": "Instagram",
            "href": "https://www.ejemplo2.com/",
            "image": "",
            "icon": "instagram"
          },
          {
            "title": "Facebook",
            "href": "https://www.ejemplo3.com/",
            "image": "",
            "icon": "facebook-f"
          },
          {
            "title": "youtube",
            "href": "https://www.ejemplo4.com/",
            "image": "",
            "icon": "youtube"
          }
        ]
      }
    ],
    "logos": [
      {
        "image": "https://i.postimg.cc/Bv48wTjj/JdA.png"
      },
      {
        "image": "https://i.postimg.cc/qRQ2GmQB/Aniversario.png"
      },
      {
        "image": "https://i.postimg.cc/wv9hLKXb/Andalucia.png"
      },
      {
        "image": "https://i.postimg.cc/QMQQFNTT/Agenda.png",
        "href": "https://sede.administracion.gob.es/carpeta/clave.html"
      }
    ]
  }`;

```
