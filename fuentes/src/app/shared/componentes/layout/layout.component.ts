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
  href_logo = '';
  src = 'https://emergya.myteam2go.com/images/custom/login/emergya_logo1.svg';
  brandName = 'Proxya';
  brandCaption = 'Arquetipo de componentes reutilizables';
  brandSrc = '../../../assets/images/logo-Proxya-Photoroom.png';
  fontSize = '22px';
  version = '';
  mostrarfecha = true;
  mostrarhora = true;
  nombre_usuario = 'Usuario';
  mostrarmenu_usuario = true;
  urlAyuda = '';
  lista = [];
 
  

	navTypeStyle = 'material';

	data_matter = '';
	data_mat = `{
    "secciones": [ {
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

        "iconLogOut": "fas fa-sign-out-alt",
        "labelBotonLogOut": "CERRAR SESIÓN"
      }
    ]}`;

	footerStyle = 'material';
	data_footer = `{
    "columns": [
      {
        "columna": [
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
        "image": "../../../assets/images/logo-Proxya-50.png",
        "href": ""
      }
    ]
  }`;
	ocultarSecciones = false;
	ocultarSeccionSocial = false;

	constructor(
		public router: Router,
		private gestionTokenService: GestionTokenService,
	) {
	/* 	localStorage.setItem('privilegio_actual', 'USU_EIT');
		this.gestionTokenService
			.getPrivilegiosUsuarioLogueado(
				'http://192.168.0.81:8081',
				'francisco.rodriguez.mu.ext',
				'10190668',
				'/plda/api/v1/privilegios-usuarios/ldap/',
			)
			.subscribe((data) => {
				this.lista = data;
			}); */
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
			this.nombre_usuario = (await (
        this.gestionTokenService.getUserProfile()
      )).firstName;
		} 
    catch (error) {
			console.error('Error al mostrar la información del token:', error);
		}
	} 
}
