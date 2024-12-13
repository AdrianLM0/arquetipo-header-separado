import { Component, OnInit, OnChanges, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-fomento-nav',
  templateUrl: './fomento.nav.component.html',
  styleUrls: ['./fomento.nav.component.scss']
})
export class FomentoNavComponent implements OnChanges {
  isMobileLayout: boolean;
  @Input() typeStyle = 'material';

  // ====================  VARIABLES PARA LA VERSIÓN MATERIAL ==================== //

  @Input() data_mat = `{
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
              "funcion": "ADMINISTRADOR INFORMÁTICO"
            },
            {
              "url": "",
              "ultimoAcceso": "último acceso: 26/02/2024 - 09:04:18"
            },
            {
              "url": "",
              "iconChangeRol": "fas fa-exchange-alt",
              "labelBotonCambiaRol": "CAMBIAR DE ROL"
            },
            {
              "url": "",
              "iconLogOut": "fas fa-sign-out-alt",
              "labelBotonlogOut": "CERRAR SESIÓN"
            }
        ]
      }`;

  @Input() version = '0.0.0';
  @Input() mostrarfecha = true;
  @Input() mostrarhora = true;
  @Input() urlAyuda = '';
  @Input() brandStyle = 'material';
  @Input() brandName = 'Junta de Andalucía';
  @Input() brandCaption = 'Gestión VP';
  @Input() brandSrc = '';
  @Input() alt_text = '';

  @Input() mostrarmenu_usuario = true;
  @Input() mostrar_menu = true;
  @Input() mostrarHeader = true;
  @Input() mostrarAyuda = true;

  // ====================  VARIABLES PARA LA VERSIÓN MATTER  ==================== //

  @Input() data_matter = `{
      "enlacesCabecera": [{
              "name": "Contacto",
              "icon": "",
              "familyIcon": "",
              "href": "/informacion/contacto.html",
              "size": "md"
          }, {
              "name": "Mapa web",
              "icon": "",
              "familyIcon": "",
              "href": "/informacion/mapaweb.html",
              "size": "md"
          }
      ],
      "socialCabecera": [{
              "name": "twitter",
              "image": "",
              "textoImage": "",
              "href": "https://twitter.com/andaluciajunta",
              "icon": "twitter",
              "familyIcon": "fab",
              "size": "lg"
          }, {
              "name": "Instagram",
              "image": "",
              "textoImage": "",
              "href": "https://www.instagram.com/andaluciajunta/",
              "icon": "instagram",
              "familyIcon": "fab",
              "size": "lg"
          }, {
              "name": "Facebook",
              "image": "",
              "textoImage": "",
              "href": "https://www.facebook.com/AndaluciaJunta",
              "icon": "facebook-f",
              "familyIcon": "fab",
              "size": "lg"
          }, {
              "name": "Youtube",
              "image": "",
              "textoImage": "",
              "href": "https://www.youtube.com/channel/UCwoAou1VZfbYfz-TysRzDCA",
              "icon": "youtube",
              "familyIcon": "fab",
              "size": "lg"
          }
      ],
      "logos": [{
          "name": "logojuntanavbar",
          "imageLogo": "https://www.juntadeandalucia.es/themes/custom/terra/logo-jda.png",
          "imageOrganismo": "https://www.juntadeandalucia.es/themes/custom/terra/logo-junta.png",
          "hrefLogo": "https://www.juntadeandalucia1.es/",
          "hrefOrganismo": "https://www.juntadeandalucia2.es/",
          "textoAltOrganismo": "CARPETA CIUDADANA"
          }
      ],
      "secciones": [{
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
              "seccionDirectoA": [{
                      "titulo": "",
                      "enlace": "",
                      "icon": "",
                      "familyIcon": ""
                  }
              ],
              "subSecciones": [{
                      "columnas": [{
                              "titulo": "Información institucional y organizativa",
                              "enlace": "/temas/estudiar/infantil.html",
                              "seccion": "Transparencia",
                              "id": "iconos_Transparencia_subseccion1",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "",
                                      "enlace": ""
                                  }
                              ]
                          }, {
                              "titulo": "Empleo público",
                              "enlace": "/temas/estudiar/primaria-eso.html",
                              "seccion": "Transparencia",
                              "id": "iconos_Transparencia_subseccion2",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "",
                                      "enlace": ""
                                  }
                              ]
                          }, {
                              "titulo": "Altos cargos",
                              "enlace": "/temas/estudiar/bachillerato.html",
                              "seccion": "Transparencia",
                              "id": "iconos_Transparencia_subseccion3",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "",
                                      "enlace": ""
                                  }
                              ]
                          }, {
                              "titulo": "Planificación, evaluación y estadística",
                              "enlace": "/temas/estudiar/fp.html",
                              "seccion": "Transparencia",
                              "id": "iconos_Transparencia_subseccion4",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "",
                                      "enlace": ""
                                  }
                              ]
                          }
                      ]
                  }, {
                      "columnas": [{
                              "titulo": "Información jurídica",
                              "enlace": "/temas/estudiar/otras.html",
                              "seccion": "Transparencia",
                              "id": "iconos_Transparencia_subseccion5",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "",
                                      "enlace": ""
                                  }
                              ]
                          }, {
                              "titulo": "Relaciones con la ciudadanía",
                              "enlace": "/temas/estudiar/universidad.html",
                              "seccion": "Transparencia",
                              "id": "iconos_Transparencia_subseccion6",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "",
                                      "enlace": ""
                                  }
                              ]
                          }, {
                              "titulo": "Contratos, convenios y subvenciones",
                              "enlace": "/temas/estudiar/adultos.html",
                              "seccion": "Transparencia",
                              "id": "iconos_Transparencia_subseccion7",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "",
                                      "enlace": ""
                                  }
                              ]
                          }, {
                              "titulo": "Información económica y presupuestaria",
                              "enlace": "/temas/estudiar/investigacion.html",
                              "seccion": "Transparencia",
                              "id": "iconos_Transparencia_subseccion8",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "",
                                      "enlace": ""
                                  }
                              ]
                          }
                      ]
                  }, {
                      "columnas": [{
                              "titulo": "Transparencia del Consejo de Gobierno",
                              "enlace": "/temas/estudiar/becas.html",
                              "seccion": "Transparencia",
                              "id": "iconos_Transparencia_subseccion9",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "",
                                      "enlace": ""
                                  }
                              ]
                          }, {
                              "titulo": "Transparencia de consejerias y entidades intrumentales",
                              "enlace": "/temas/estudiar/centros.html",
                              "seccion": "Transparencia",
                              "id": "iconos_Transparencia_subseccion10",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "",
                                      "enlace": ""
                                  }
                              ]
                          }
                      ]
                  }
              ]
          }, {
              "name": "La Junta",
              "url": "",
              "urlTitulo": "",
              "image": "",
              "textoImage": "",
              "id": "iconos_Junta",
              "icon": "jda",
              "familyIcon": "fac",
              "size": "",
              "modeloDropDownSecciones": "2",
              "seccionDirectoA": [{
                      "titulo": "",
                      "enlace": "",
                      "icon": "",
                      "familyIcon": ""
                  }
              ],
              "subSecciones": [{
                      "columnas": [{
                              "titulo": "",
                              "enlace": "/temas/estudiar/infantil.html",
                              "seccion": "Junta",
                              "id": "iconos_Junta_subseccion1",
                              "image": "https://i.postimg.cc/ZY9HQfPW/gobierno.jpg",
                              "textoImage": "Consejo de Gobierno",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "",
                                      "enlace": ""
                                  }
                              ]
                          }, {
                              "titulo": "Presidente",
                              "enlace": "/temas/estudiar/primaria-eso.html",
                              "seccion": "Junta",
                              "id": "iconos_Junta_subseccion2",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "",
                                      "enlace": ""
                                  }
                              ]
                          }, {
                              "titulo": "Vicepresidente",
                              "enlace": "/temas/estudiar/bachillerato.html",
                              "seccion": "Junta",
                              "id": "iconos_Junta_subseccion3",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "",
                                      "enlace": ""
                                  }
                              ]
                          }, {
                              "titulo": "Parlamento y otras instituciones",
                              "enlace": "/temas/estudiar/fp.html",
                              "seccion": "Junta",
                              "id": "iconos_Junta_subseccion4",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "",
                                      "enlace": ""
                                  }
                              ]
                          }, {
                              "titulo": "Transparencia",
                              "enlace": "/temas/estudiar/fp.html",
                              "seccion": "Junta",
                              "id": "iconos_Junta_subseccion4",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "",
                                      "enlace": ""
                                  }
                              ]
                          }
                      ]
                  }, {
                      "columnas": [{
                              "titulo": "Consejo de gobierno",
                              "enlace": "/temas/estudiar/otras.html",
                              "seccion": "Junta",
                              "id": "iconos_Junta_subseccion5",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "",
                                      "enlace": ""
                                  }
                              ]
                          }, {
                              "titulo": "Consejerías",
                              "enlace": "/temas/estudiar/universidad.html",
                              "seccion": "Junta",
                              "id": "iconos_Junta_subseccion6",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "Turismo, Regeneración, Justicia y Administración Local",
                                      "enlace": "#"
                                  }, {
                                      "descripciones": "Presidencia, Administración Pública e Interior",
                                      "enlace": "#"
                                  }, {
                                      "descripciones": "Empleo, Formación y Trabajo Autónomo",
                                      "enlace": "#"
                                  }, {
                                      "descripciones": "Hacienda y Financiación Europea",
                                      "enlace": "#"
                                  }, {
                                      "descripciones": "Educación y Deporte",
                                      "enlace": "#"
                                  }, {
                                      "descripciones": "Agricultura, Ganadería, Pesca y Desarrollo Sostenible",
                                      "enlace": "#"
                                  }
                              ]
                          }
                      ]
                  }, {
                      "columnas": [{
                              "titulo": "",
                              "enlace": "#",
                              "seccion": "Junta",
                              "id": "iconos_Junta_subseccion5",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "",
                                      "enlace": ""
                                  }
                              ]
                          }, {
                              "titulo": "",
                              "enlace": "/temas/estudiar/adultos.html",
                              "seccion": "Junta",
                              "id": "iconos_Junta_subseccion7",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "Transformación Económica, Industria, Conocimiento y Universidades",
                                      "enlace": "#"
                                  }, {
                                      "descripciones": "Salud y Familias",
                                      "enlace": "#"
                                  }, {
                                      "descripciones": "Igualdad, Políticas Sociales y Conciliación",
                                      "enlace": "#"
                                  }, {
                                      "descripciones": "Fomento, Infraestructuras y Ordenación del Territorio",
                                      "enlace": "#"
                                  }, {
                                      "descripciones": "Cultura y Patrimonio Histórico",
                                      "enlace": "#"
                                  }
                              ]
                          }
                      ]
                  }
              ]
          }, {
              "name": "Servicios",
              "url": "",
              "urlTitulo": "",
              "image": "",
              "textoImage": "",
              "id": "iconos_Servicios",
              "icon": "laptop",
              "familyIcon": "fas",
              "size": "md",
              "modeloDropDownSecciones": "2",
              "seccionDirectoA": [{
                      "titulo": "Pedir cita médica ",
                      "enlace": "#",
                      "icon": "heartbeat",
                      "familyIcon": "fas"
                  }, {
                      "titulo": "Renovar demanda de empleo ",
                      "enlace": "#",
                      "icon": "briefcase",
                      "familyIcon": "fas"
                  }, {
                      "titulo": "Escolarizar a tus hijos ",
                      "enlace": "#",
                      "icon": "graduation-cap",
                      "familyIcon": "fas"
                  }, {
                      "titulo": "Perfiles de contratante ",
                      "enlace": "#",
                      "icon": "users",
                      "familyIcon": "fas"
                  }, {
                      "titulo": "Presentarte a las oposiciones del Servicio Andaluz de Salud ",
                      "enlace": "#",
                      "icon": "briefcase",
                      "familyIcon": "fas"
                  }
              ],
              "subSecciones": [{
                      "columnas": [{
                              "titulo": "Trámites",
                              "enlace": "/temas/estudiar/infantil.html",
                              "seccion": "Servicios",
                              "id": "iconos_Servicios_subseccion1",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "Atención a la ciudadania",
                                      "enlace": "#"
                                  }, {
                                      "descripciones": "Presentacion de documentos",
                                      "enlace": "#"
                                  }, {
                                      "descripciones": "Catalogo de procedimientos y servicios",
                                      "enlace": "#"
                                  }, {
                                      "descripciones": "Carpeta ciudadana",
                                      "enlace": "#"
                                  }, {
                                      "descripciones": "Notificaicones electrónicas",
                                      "enlace": "#"
                                  }
                              ]
                          }
                      ]
                  }, {
                      "columnas": [{
                              "titulo": "BOJA",
                              "enlace": "/temas/estudiar/infantil.html",
                              "seccion": "Servicios",
                              "id": "iconos_Servicios_subseccion1",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "#",
                              "descripcion": [{
                                      "descripciones": "Último boletin",
                                      "enlace": "#"
                                  }, {
                                      "descripciones": "Boletines anteriores",
                                      "enlace": "#"
                                  }, {
                                      "descripciones": "Buscador avanzado",
                                      "enlace": "#"
                                  }, {
                                      "descripciones": "Sobre BOJA",
                                      "enlace": "#"
                                  }, {
                                      "descripciones": "Preguntas frecuentes",
                                      "enlace": "#"
                                  }
                              ]
                          }

                      ]
                  }, {
                      "columnas": [{
                              "titulo": "Servicios de información",
                              "enlace": "/temas/estudiar/infantil.html",
                              "seccion": "Servicios",
                              "id": "iconos_Servicios_subseccion1",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "#",
                              "descripcion": [{
                                      "descripciones": "Normativa",
                                      "enlace": "#"
                                  }, {
                                      "descripciones": "Participación",
                                      "enlace": "#"
                                  }, {
                                      "descripciones": "Estadística y cartografía",
                                      "enlace": "#"
                                  }, {
                                      "descripciones": "Catálogo de publicaciones",
                                      "enlace": "#"
                                  }, {
                                      "descripciones": "Datos abiertos",
                                      "enlace": "#"
                                  }
                              ]
                          }

                      ]
                  }
              ]
          }, {
              "name": "Noticias",
              "url": "",
              "urlTitulo": "",
              "image": "",
              "textoImage": "",
              "id": "iconos_Noticias",
              "icon": "newspaper",
              "familyIcon": "fas",
              "size": "md",
              "modeloDropDownSecciones": "2",
              "seccionDirectoA": [{
                      "titulo": "",
                      "enlace": "",
                      "icon": "",
                      "familyIcon": ""
                  }
              ],
              "subSecciones": [{
                      "columnas": [{
                              "titulo": "Portada",
                              "enlace": "/temas/estudiar/infantil.html",
                              "seccion": "Noticias",
                              "id": "iconos_Noticias_subseccion1",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "",
                                      "enlace": ""
                                  }
                              ]
                          }, {
                              "titulo": "Últimas noticias",
                              "enlace": "/temas/estudiar/primaria-eso.html",
                              "seccion": "Noticias",
                              "id": "iconos_Noticias_subseccion2",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "",
                                      "enlace": ""
                                  }
                              ]
                          }, {
                              "titulo": "Gobierno al día",
                              "enlace": "/temas/estudiar/bachillerato.html",
                              "seccion": "Noticias",
                              "id": "iconos_Noticias_subseccion3",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "",
                                      "enlace": ""
                                  }
                              ]
                          }, {
                              "titulo": "Emergencias 112",
                              "enlace": "/temas/estudiar/fp.html",
                              "seccion": "Noticias",
                              "id": "iconos_Noticias_subseccion4",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "",
                                      "enlace": ""
                                  }
                              ]
                          }, {
                              "titulo": "Economía y empleo",
                              "enlace": "/temas/estudiar/fp.html",
                              "seccion": "Noticias",
                              "id": "iconos_Noticias_subseccion4",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "",
                                      "enlace": ""
                                  }
                              ]
                          }
                      ]
                  }, {
                      "columnas": [{
                              "titulo": "Salud",
                              "enlace": "/temas/estudiar/otras.html",
                              "seccion": "Noticias",
                              "id": "iconos_Noticias_subseccion5",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "",
                                      "enlace": ""
                                  }
                              ]
                          }, {
                              "titulo": "Educación",
                              "enlace": "/temas/estudiar/universidad.html",
                              "seccion": "Noticias",
                              "id": "iconos_Noticias_subseccion6",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "",
                                      "enlace": ""
                                  }
                              ]
                          }, {
                              "titulo": "Social",
                              "enlace": "/temas/estudiar/adultos.html",
                              "seccion": "Noticias",
                              "id": "iconos_Noticias_subseccion7",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "",
                                      "enlace": ""
                                  }
                              ]
                          }, {
                              "titulo": "Infraestructuras",
                              "enlace": "/temas/estudiar/investigacion.html",
                              "seccion": "Noticias",
                              "id": "iconos_Noticias_subseccion8",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "",
                                      "enlace": ""
                                  }
                              ]
                          }, {
                              "titulo": "Turismo",
                              "enlace": "/temas/estudiar/investigacion.html",
                              "seccion": "Noticias",
                              "id": "iconos_Noticias_subseccion8",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "",
                                      "enlace": ""
                                  }
                              ]
                          }
                      ]
                  }, {
                      "columnas": [{
                              "titulo": "Tierra y mar",
                              "enlace": "/temas/estudiar/becas.html",
                              "seccion": "Noticias",
                              "id": "iconos_Noticias_subseccion9",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "",
                                      "enlace": ""
                                  }
                              ]
                          }, {
                              "titulo": "Cultura",
                              "enlace": "/temas/estudiar/centros.html",
                              "seccion": "Noticias",
                              "id": "iconos_Noticias_subseccion10",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "",
                                      "enlace": ""
                                  }
                              ]
                          }, {
                              "titulo": "Sala de prensa",
                              "enlace": "/temas/estudiar/becas.html",
                              "seccion": "Noticias",
                              "id": "iconos_Noticias_subseccion11",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "#",
                              "descripcion": [{
                                      "descripciones": "Convocatoria a medios",
                                      "enlace": ""
                                  }, {
                                      "descripciones": "Fotogaleria",
                                      "enlace": ""
                                  }, {
                                      "descripciones": "Videoteca",
                                      "enlace": ""
                                  }
                              ]
                          }, {
                              "titulo": "Buscador de noticias",
                              "enlace": "/temas/estudiar/centros.html",
                              "seccion": "Noticias",
                              "id": "iconos_Noticias_subseccion12",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
                                      "descripciones": "",
                                      "enlace": ""
                                  }
                              ]
                          }, {
                              "titulo": "Subscripción",
                              "enlace": "/temas/estudiar/centros.html",
                              "seccion": "Noticias",
                              "id": "iconos_Noticias_subseccion12",
                              "image": "",
                              "textoImage": "",
                              "descripcionSeccion": "",
                              "enlaceVerMas": "",
                              "descripcion": [{
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
      "perfil": [{
              "name": "Mis consentimientos",
              "image": "",
              "texto": "Mis consentimientos",
              "id": "consentimientos",
              "icon": "user",
              "familyIcon": "fas",
              "size": "md",
              "href": "/carpetades/#/servicios/funcionalidades/pagoTelematico"
          }, {
              "name": "Mis datos de contacto",
              "image": "",
              "texto": "Mis datos de contacto",
              "id": "datosContacto",
              "icon": "user",
              "familyIcon": "fas",
              "size": "md",
              "href": "/carpetades/#/servicios/funcionalidades/pagoTelematico"
          }, {
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
      "listOpcionesAdministrador": [{
              "name": "Gestión de entidades",
              "icon": "edit",
              "familyIcon": "fas",
              "href": "/carpetades/#/entity",
              "size": "md"
          }, {
              "name": "Gestión de usuarios",
              "icon": "user",
              "familyIcon": "fas",
              "href": "/carpetades/#/cc-impersonate",
              "size": "md"
          }, {
              "name": "Envío de avisos",
              "icon": "bell",
              "familyIcon": "far",
              "href": "/carpetades/#/envioAvisos",
              "size": "md"
          }, {
              "name": "Métricas",
              "icon": "tachometer-alt",
              "familyIcon": "fas",
              "href": "/carpetades/#/cc-metrics",
              "size": "md"
          }, {
              "name": "Salud",
              "icon": "heart",
              "familyIcon": "fas",
              "href": "/carpetades/#/cc-health",
              "size": "md"
          }, {
              "name": "Configuración",
              "icon": "list",
              "familyIcon": "fas",
              "href": "/carpetades/#/cc-configuration",
              "size": "md"
          }, {
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
    }`;

  OPCIONES_ADMINISTRADOR = `
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
  }`;
  OCULTAR_ACCESIBILIDAD_TOP_HEADER = 'true';
  OCULTAR_SOCIAL_TOP_HEADER = 'true';
  OCULTAR_POPUP_MI_PERFIL = 'true';
  OCULTAR_BARRA_VERDE = 'true';
  OCULTAR_TEXTO_LOGOS = 'true';
  OCULTAR_SECCIONES = 'true';
  OCULTAR_SECCION_MI_PERFIL = 'true';

  @Input() nombre_usuario = 'Nombre Usuario';
  @Input() PERFIL = 'Nombre Usuario';
  @Input() listaPrivilegios = [];
  @Input() ultimoAcceso = '';
  @Input() type = '';

  ENLACE_SECCION_MI_PERFIL: string = '';
  ENLACE_MI_PERFIL: string = '';
  USUARIO_LOGADO = 'true';
  ENLACE_CERRAR_SESSION: string = '';
  IS_ADMINISTRADOR: string = '';
  ULTIMO_ACCESO: string = '';
  FECHA_HOY: string = '';
  HORA_HOY: string = '';
  PERFIL_ICON_IN: string = '';
  PERFIL_ICON: string = '';
  LISTA_ICON: string = '';
  PERFIL_TEXT = 'Ejemplo de texto';
  RAZON_SOCIAL = 'Buscar la paz';
  USER_FUNCIONARIO = '33';
  NOMBRE_FUNCIONARIO_REPRESENTANTE = 'Nombre Representante';
  LISTA_SERVICIOS: Array<string> = [];
  TAM_LISTA_SERVICIOS: string = '0';
  CLICK_REALIZADO = 'true';
  CODIGO_MODAL = 'Código modañ';
  IMAGEN_MODAL: string = '';
  IMAGEN_MODAL_PEQUENA: string = '';
  MOSTRAR_MODAL = 'true';
  TEXT_SUP_MODAL = 'Texto Modal';
  TEXT_INF_MODAL = 'Texto Información';

  constructor() {
    this.isMobileLayout = window.innerWidth < 768;
  }

  ngOnChanges() {
    console.log('Changes detected in FomentoNavComponent');
  }

  ngOnInit() {
    window.addEventListener('resize', this.onResize.bind(this));
  }

  onResize() {
    this.isMobileLayout = window.innerWidth < 768;
  }

  mostrarDesplegable(event: Event) {
    const desplegable = event.target as HTMLDivElement;
    const bg = document.getElementsByClassName('barraH')[0] as HTMLDivElement;
    const parentElement = desplegable.parentElement;

    if (!parentElement) {
      console.error('Parent element not found');
      return;
    }

    const menuElement = parentElement.querySelector('lib-fomento-menu');
    if (!menuElement) {
      console.error('Menu element not found');
      return;
    }

    const lista_desplegable = menuElement.classList;
    if (lista_desplegable.contains('responsive')) {
      lista_desplegable.remove('responsive');
      bg.style.display = 'none';
    } else {
      lista_desplegable.add('responsive');
      const esquema = JSON.parse(this.data_mat);
      bg.style.display = 'block';
      bg.style.height = esquema.secciones.length * 40 + 25 + 'px';
    }
  }
}
