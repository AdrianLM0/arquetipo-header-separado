import { ComponentFixture, TestBed } from '@angular/core/testing';
import '@matter/matter-footer/dist/matter-footer';
import { FomentoFooterComponent } from './fomento.footer.component';
import { By } from '@angular/platform-browser';

describe('FomentoFooterComponent', () => {
	let component: FomentoFooterComponent;
	let fixture: ComponentFixture<FomentoFooterComponent>;
	const data_mock = `{
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
          "title": "Nuevas tecnologias",
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
    ],"links": [{
        "title": "Accesibilidad",
        "href": "#"
      }, {
        "title": "Aviso legal",
        "href": "#"
      }, {
        "title": "Protección de datos",
        "href": "#"
      }
    ],
    "social": [{
        "title": "Síguenos en: ",
        "array": [{
            "title": "twitter",
            "href": "#",
            "image": "",
            "icon": "twitter"
          }, {
            "title": "Instagram",
            "href": "#",
            "image": "",
            "icon": "instagram"
          }, {
            "title": "Facebook",
            "href": "#",
            "image": "",
            "icon": "facebook-f"
          }, {
            "title": "youtube",
            "href": "#",
            "image": "",
            "icon": "youtube"
          }
        ]
      }
    ],
    "logos": [{
        "image": "https://i.postimg.cc/Bv48wTjj/JdA.png"
      }, {
        "image": "https://i.postimg.cc/qRQ2GmQB/Aniversario.png"
      }, {
        "image": "https://i.postimg.cc/wv9hLKXb/Andalucia.png"
      }, {
        "image": "https://i.postimg.cc/QMQQFNTT/Agenda.png",
        "href": "https://sede.administracion.gob.es/carpeta/clave.html"
      }
    ]
  }`;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FomentoFooterComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FomentoFooterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	afterEach(() => {
		jest.restoreAllMocks(); // Restaura todos los mocks después de cada prueba
	});

	describe('Ciclo de vida del componente', () => {
		describe('ngOnInit', () => {
			it('should call the procesarDATA method', () => {
				const procDataSpy = jest.spyOn(component, 'procesarDATA');
				component.ngOnInit();
				expect(procDataSpy).toHaveBeenCalledTimes(1);
			});
		});
	});

	describe('Version display', () => {
		describe('Choose matter version', () => {
			it('should show matter-footer', () => {
				component.typeStyle = 'matter';
				fixture.detectChanges();
				expect(
					fixture.debugElement.query(By.css('matter-footer')),
				).not.toBeNull();
			});

			it('should hide material footer', () => {
				component.typeStyle = 'matter';
				fixture.detectChanges();
				expect(fixture.debugElement.query(By.css('.footer'))).toBeNull();
			});
		});

		describe('Choose material version', () => {
			it('should show material footer', () => {
				component.typeStyle = 'material';
				fixture.detectChanges();
				expect(fixture.debugElement.query(By.css('.footer'))).not.toBeNull();
			});

			it('should hide matter footer', () => {
				component.typeStyle = 'material';
				fixture.detectChanges();
				expect(fixture.debugElement.query(By.css('matter-footer'))).toBeNull();
			});
		});
	});

	describe('procesarDATA method', () => {
		describe('inputValidation method call', () => {
			it('should not call the inputValidation method if data is empty', () => {
				const inputValidationSpy = jest.spyOn(component, 'inputValidation');
				component.procesarDATA();
				expect(inputValidationSpy).toHaveBeenCalledTimes(0);
			});

			it('should call the inputValidation method if data is not empty', () => {
				component.data = '{columns: [id: valor]}';
				fixture.detectChanges();
				const inputValidationSpy = jest.spyOn(component, 'inputValidation');
				component.procesarDATA();
				expect(inputValidationSpy).toHaveBeenCalledTimes(1);
			});
		});

		describe('DATA treatment', () => {
			it('should process the DATA correctly', () => {
				component.data = data_mock;
				fixture.detectChanges();
				component.procesarDATA();
				expect(component.columns).not.toEqual([]);
				expect(component.social).not.toEqual([]);
				expect(component.links).not.toEqual([]);
				expect(component.logos).not.toEqual([]);
			});

			it('show hide columns if "ocultarSecciones" is true', () => {
				component.ocultarSecciones = true;
				component.data = data_mock;
				fixture.detectChanges();
				component.procesarDATA();
				expect(component.columns).toEqual([]);
			});
		});
	});

	describe('inputValidation method', () => {
		it('should pass if everything works well', () => {
			component.data = data_mock;
			fixture.detectChanges();
			const consoleSpy = jest.spyOn(console, 'log');
			component.inputValidation();
			expect(consoleSpy).toHaveBeenCalledTimes(0);
		});
		describe('typeStyle attribute error', () => {
			it('should give an error if "typeStyle" atribute is not correct', () => {
				component.typeStyle = 'mvtter';
				fixture.detectChanges();
				const consoleSpy = jest.spyOn(console, 'log');
				component.inputValidation();
				expect(consoleSpy).toHaveBeenCalledWith(
					"Error: El tipo del componente solo puede ser 'material' o 'matter'",
				);
			});
		});
		describe('JSON.parse errors', () => {
			it('should give an error if DATA estructure is not correct', () => {
				component.data = "/hola:'{ç=='";
				fixture.detectChanges();
				const consoleSpy = jest.spyOn(console, 'log');
				try {
					component.inputValidation();
				} catch (error) {
					expect(consoleSpy).toHaveBeenCalledWith(
						'Error => SyntaxError: Unexpected token / in JSON at position 0',
					);
				}
			});
		});
	});
});
