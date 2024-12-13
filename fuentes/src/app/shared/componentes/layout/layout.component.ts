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
  version = '0.0.0';
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



	rolUsuario = '';
	ultimoAcceso = 'Hora y día del último acceso del usuario';

	type = 'material';
	perfil = 'Nombre Ejemplo';
	mostrarperfil = true;
  mostrarHeader = true;
  mostrarAyuda = true;
  
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
      "url": "#",
      "id": "iconos_Servicios",
      "icon": "laptop",
      "familyIcon": "fas",
      "subSecciones": []
    }, {
      "name": "Noticias",
      "url": "#",
      "id": "iconos_Noticias",
      "icon": "newspaper",
      "familyIcon": "fas",
      "subSecciones": []
    }
  ],
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
}`;

}
