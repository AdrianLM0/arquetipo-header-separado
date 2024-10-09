import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionTokenService } from '@fomento/i-rf-security-component-node-lib';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  // Atributo tipo de desplegable en botón usuario
  typeTemplate = 'advance';

  // Atributo de estilo
  brandStyle = 'material';

  // Atributos matter-brand
  logo = true;
  href_logo = '';
  src = '';
  brandName = 'Proxya';
  brandCaption = 'Arquetipo de componentes reutilizables';
  brandSrc = '../../../assets/images/logo-Proxya-solo.png';
  fontSize = '22px';
  version = '';
  mostrarfecha = true;
  mostrarhora = true;
  nombre_usuario = 'Usuario';
  mostrarmenu_usuario = true;
  mostrar_menu = false;
  urlAyuda = '';
  lista = [];
  alt_text = 'Test';


  navTypeStyle = 'material';

  data_matter = '';
  
  //para el componente de auth guard si se quiere implementar. Se ha eliminado porque da error.
  //{ "url": "/components/ejemplo-auth-guard", "titulo": "Auth Guard"}, 
  data_mat = `{
    "secciones": [ {
            "name": "Componentes",
            "url": "",
            "id": "iconos_Componentes",
            "icon": "book",
            "familyIcon": "fas",
            "subSecciones": [
              { "url": "/components/alert", "titulo": "Alert"},
              { "url": "/components/autocomplete", "titulo": "Autocomplete"},
              { "url": "/components/badge", "titulo": "Badge"},
              { "url": "/components/button", "titulo": "Boton"},
              { "url": "/components/bottomSheet", "titulo": "Bottom Sheet"},
              { "url": "/components/buttonToggle", "titulo": "Button Toggle"},
              { "url": "/components/card", "titulo": "Card"},
              { "url": "/components/checkbox", "titulo": "Checkbox"},
              { "url": "/components/chips", "titulo": "Chips"},
              { "url": "/components/jsondatagrid", "titulo": "Datagrid - JSON"},
              { "url": "/components/dialog", "titulo": "Dialog"},
              { "url": "/components/disclaimer", "titulo": "Disclaimer"},
              { "url": "/components/divider", "titulo": "Divider"},
              { "url": "/components/expansion-panel", "titulo": "Expansion Panel"},
              { "url": "/components/filtro-columnas", "titulo": "Filtro Columnas"},
              { "url": "/components/form", "titulo": "Formulario"},
              { "url": "/components/form-field", "titulo": "Form Field"},
              { "url": "/components/gestion-token", "titulo": "Gestion Token Lib Seguridad"},
              { "url": "/components/grid-list", "titulo": "Grid List"},
              { "url": "/components/icon", "titulo": "Icon"},
              { "url": "/components/input", "titulo": "Input"},
              { "url": "/components/input-group", "titulo": "Input-Group"},
              { "url": "/components/brand", "titulo": "Logo"},
              { "url": "/components/nav", "titulo": "Navigator"},
              { "url": "/components/notifications", "titulo": "Notificaciones"},
              { "url": "/components/progress", "titulo": "Progress"},
              { "url": "/components/propagar-privilegios", "titulo": "Propagar privilegios"},
              { "url": "/components/propagar-seguridad", "titulo": "Propagar Seguridad"},
              { "url": "/components/ripple", "titulo": "Ripple"},
              { "url": "/components/select", "titulo": "Select"},
              { "url": "/components/sidenav", "titulo": "Sidenav"},
              { "url": "/components/slider", "titulo": "Slider"},
              { "url": "/components/slide-toggle", "titulo": "Slide Toggle"},
              { "url": "/components/snackbar", "titulo": "Snackbar"},
              { "url": "/components/spinner", "titulo": "Spinner"},
              { "url": "/components/stepper", "titulo": "Stepper"},
              { "url": "/components/table", "titulo": "Table"},
              { "url": "/components/tabs", "titulo": "Tabs"},
              { "url": "/components/toolbar", "titulo": "Toolbar"},
              { "url": "/components/tooltip", "titulo": "Tooltip"},
              { "url": "/components/tree", "titulo": "Tree"},
              { "url": "/components/plantilla-accesoDenegado", "titulo": "Plantilla acceso denegado"},
              { "url": "/components/datagrid", "titulo": "Plantilla datagrid"},
              { "url": "/components/plantilla-form", "titulo": "Plantilla formulario"},
              { "url": "/components/plantilla-listado", "titulo": "Plantilla listado"}              
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
          {
            "title": "Información:",
            "array": [
              {
                "image": "../../../assets/images/logo-Proxya-Photoroom-100.png"
              },

              {
                "title": "Protección de datos",
                "href": "#",
                "image": "https://i.postimg.cc/Bv48wTjj/JdA.png"
              }
            ]
          }
        ]
      },
   { 
    "logos": [
     {
        "image": "https://i.postimg.cc/Bv48wTjj/JdA.png",
        "href": "https://sede.administracion.gob.es/carpeta/clave.html"
      }

      ]},
      {
        "columna": [
          {
            "title": "Síguenos en: ",
            "array": [
              {
                "title": "twitter",
                "href": "https://www.ejemplo1.com/",
                "icon": "twitter"
              },
              {
                "title": "Instagram",
                "href": "https://www.ejemplo2.com/",
                "icon": "instagram"
              },
              {
                "title": "Facebook",
                "href": "https://www.ejemplo3.com/",
                "icon": "facebook-f"
              },
              {
                "title": "youtube",
                "href": "https://www.ejemplo4.com/",
                "icon": "youtube"
              }
            ]
          }
        ]
      }
    ],
    "links": [],
    "logos": []
  }`;
  
  
  
  
  ocultarSecciones = false;
  ocultarSeccionSocial = false;

  constructor(
    public router: Router,
    private gestionTokenService: GestionTokenService,
  ) {
  /*  localStorage.setItem('privilegio_actual', 'USU_EIT');
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
