import { Component } from '@angular/core';

@Component({
	selector: 'app-ejemplo-fomento-nav',
	templateUrl: './ejemplo-fomento-nav.component.html',
	styleUrls: ['./ejemplo-fomento-nav.component.scss'],
})
export class EjemploFomentoNavComponent {
	typeTemplate = 'advance';
	rolUsuario = '';
	ultimoAcceso = 'Hora y día del último acceso del usuario';
	nombre_usuario = 'Beatriz Rodriguez Bejarano';

	type = 'material';
	perfil = 'Nombre Ejemplo';
	version = '0.0.0';
	urlAyuda = '';
	brandStyle = 'material';
	brandCaption = 'Consejería de Fomento, Articulación del Territorio';
	mostrarperfil = true;
	mostrarfecha = true;
	mostrarhora = true;
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
