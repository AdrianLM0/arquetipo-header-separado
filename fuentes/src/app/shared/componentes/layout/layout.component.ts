import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionTokenService } from '@fomento/i-rf-security-component-node-lib';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
	//Atributo tipo de desplegable en boton usuario
	typeTemplate = 'advance';

	//Atributo de estilo
	brandStyle = 'material';

	// Atributos matter-brand
	logo = true;
	src: string = null;
	brandName = 'Arquetipo Fomento';
	brandCaption =
		'Consejería de Fomento, Articulación del Territorio y Vivienda';
	brandSrc = '';
	fontSize = '22px';
	version = '';
	mostrarfecha = true;
	mostrarhora = true;
	nombre_usuario = 'default';
	mostrarmenu_usuario = true;
	urlAyuda = '';
	lista = [];

	navTypeStyle = 'material';

	data_matter = '';
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
            "name": "Componentes",
            "url": "",
            "id": "iconos_Componentes",
            "icon": "book",
            "familyIcon": "fas",
            "subSecciones": [
              { "url": "/components/brand", "titulo": "Logo"},
              { "url": "/components/button", "titulo": "Boton"},
              { "url": "/components/nav", "titulo": "Navigator"},
              { "url": "/components/input", "titulo": "Input"},
              { "url": "/components/alert", "titulo": "Alert"},
              { "url": "/components/card", "titulo": "Card"},
              { "url": "/components/stepper", "titulo": "Stepper"},
              { "url": "/components/checkbox", "titulo": "Checkbox"},
              { "url": "/components/dialog", "titulo": "Dialog"},
              { "url": "/components/icon", "titulo": "Icon"},
              { "url": "/components/input-group", "titulo": "Input-Group"},
              { "url": "/components/select", "titulo": "Select"},
              { "url": "/components/spinner", "titulo": "Spinner"},
              { "url": "/components/filtro-columnas", "titulo": "Filtro Columnas"},
              { "url": "/components/progress", "titulo": "Progress"},
              { "url": "/components/tabs", "titulo": "Tabs"},
              { "url": "/components/table", "titulo": "Table"},
              { "url": "/components/chips", "titulo": "Chips"},
              { "url": "/components/divider", "titulo": "Divider"},
              { "url": "/components/ripple", "titulo": "Ripple"},
              { "url": "/components/expansion-panel", "titulo": "Expansion Panel"},
              { "url": "/components/sidenav", "titulo": "Sidenav"},
              { "url": "/components/autocomplete", "titulo": "Autocomplete"},
              { "url": "/components/badge", "titulo": "Badge"},
              { "url": "/components/toolbar", "titulo": "Toolbar"},
              { "url": "/components/grid-list", "titulo": "Grid List"},
              { "url": "/components/tooltip", "titulo": "Tooltip"},
              { "url": "/components/buttonToggle", "titulo": "Button Toggle"},
              { "url": "/components/bottomSheet", "titulo": "Bottom Sheet"},
              { "url": "/components/form-field", "titulo": "Form Field"},
              { "url": "/components/form", "titulo": "Formulario"},
              { "url": "/components/snackbar", "titulo": "Snackbar" },
              { "url": "/components/slider", "titulo": "Slider" },
              { "url": "/components/tree", "titulo": "Tree" },
              { "url": "/components/slide-toggle", "titulo": "Slide Toggle" },
              { "url": "/components/datagrid", "titulo": "Datagrid" },
              { "url": "/components/jsondatagrid", "titulo": "Datagrid - JSON"},
              { "url": "/components/disclaimer", "titulo": "Disclaimer" },
              { "url": "/components/api-service", "titulo": "Api Service" },
              { "url": "/components/changeprivileges", "titulo": "Propagar privilegios" },
              { "url": "/components/notifications", "titulo": "Notificaciones" },
              { "url": "/components/plantilla-form", "titulo": "Plantilla formulario" },
              { "url": "/components/gestion-token", "titulo": "Gestion Token Lib Seguridad" },
              { "url": "/components/plantilla-listado", "titulo": "Plantilla listado" },
              { "url": "/components/plantilla-consulta", "titulo": "Plantilla consulta"},
              { "url": "/components/plantilla-accesoDenegado", "titulo": "Plantilla acceso denegado"},               
              { "url": "/components/ejemplo-auth-guard", "titulo": "Auth Guard"}, 
              { "url": "/components/notifications", "titulo": "Notificaciones" },
              { "url": "/components/changeprivileges", "titulo": "Propagar Seguridad" }
            ]            
        }
    ],
    "perfil": [
      {
        "url": "",
        "iconChangeRol": "fas fa-exchange-alt",
        "labelBotonCambiaRol": "CAMBIAR DE ROL",
        "iconLogOut": "fas fa-sign-out-alt",
        "labelBotonLogOut": "CERRAR SESIÓN"
      }
    ]}`;

	footerStyle = 'material';
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
	ocultarSecciones = false;
	ocultarSeccionSocial = false;

	constructor(
		public router: Router,
		private gestionTokenService: GestionTokenService,
	) {
		localStorage.setItem('privilegio_actual', 'USU_EIT');
		this.gestionTokenService
			.getPrivilegiosUsuarioLogueado(
				'http://192.168.0.81:8081',
				'francisco.rodriguez.mu.ext',
				'10190668',
				'/plda/api/v1/privilegios-usuarios/ldap/',
			)
			.subscribe((data) => {
				this.lista = data;
			});
	}
	async ngOnInit() {
		await this.getTokenInfo();
	}
	loggedIn;
	token;
	decodedPayload;
	userProfile;
	username;

	async getTokenInfo() {
		try {
			this.nombre_usuario = (
				await this.gestionTokenService.getUserProfile()
			).firstName;
		} catch (error) {
			console.error('Error al mostrar la información del token:', error);
		}
	}
}
