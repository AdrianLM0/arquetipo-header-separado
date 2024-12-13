import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomentoMenuComponent } from './fomento.menu.component';
import { FomentoUserComponent } from '../fomento.user/fomento.user.component';
import { MatMenuModule } from '@angular/material/menu';
import { By } from '@angular/platform-browser';
import { MockComponent } from 'ng-mocks';

describe('FomentoMenuComponent', () => {
	let component: FomentoMenuComponent;
	let fixture: ComponentFixture<FomentoMenuComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [FomentoMenuComponent, MockComponent(FomentoUserComponent)],
			imports: [MatMenuModule],
		});
		fixture = TestBed.createComponent(FomentoMenuComponent);
		component = fixture.componentInstance;
		component.DATA = `{
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
		component.nombre_usuario = 'Hola Mundo';
		fixture.detectChanges();
	});

	afterEach(() => {
		jest.restoreAllMocks(); // Restaura todos los mocks después de cada prueba
	});

	describe('Ciclo de vida del componente', () => {
		describe('NgOnChanges', () => {
			it('should call inputValidation method', () => {
				const inputValidationSpy = jest.spyOn(component, 'inputValidation');
				component.ngOnChanges();
				expect(inputValidationSpy).toHaveBeenCalledTimes(1);
			});
		});
	});

	describe('inputValidationMethod', () => {
		it('should pass if everything works well', () => {
			const consoleSpy = jest.spyOn(console, 'log');
			component.inputValidation();
			expect(consoleSpy).toHaveBeenCalledTimes(0);
		});

		it('should give an error if DATA attribute is empty', () => {
			component.DATA = '';
			fixture.detectChanges();
			const consoleSpy = jest.spyOn(console, 'log');
			component.inputValidation();
			expect(consoleSpy).toHaveBeenCalledWith('Error => JSON no valido');
		});

		it('should give an error if DATA estructure is not correct', () => {
			component.DATA = "/hola:'{ç=='";
			fixture.detectChanges();
			const consoleSpy = jest.spyOn(console, 'log');
			component.inputValidation();
			expect(consoleSpy).toHaveBeenCalledWith('Error => JSON no valido');
		});
	});

	describe('changeFocus', () => {
		it('should change focus correctly', () => {
			component.ngOnChanges();
			fixture.detectChanges();
			component.changeFocus('Servicios');
			const el = fixture.debugElement.query(
				By.css('#header-Servicios:focus'),
			).nativeElement;
			expect(el).toBeTruthy();
		});
	});

	describe('mostrar_perfil attribute', () => {
		it("should not show fomento-user if mostrar_perfil is 'false'", () => {
			component.mostrarmenu_usuario = false;
			fixture.detectChanges();
			expect(fixture.debugElement.query(By.css('lib-fomento-user'))).toBeNull();
		});

		it("should show fomento-user if mostrar_perfil is 'true'", () => {
			component.mostrarmenu_usuario = true;
			fixture.detectChanges();
			expect(
				fixture.debugElement.query(By.css('lib-fomento-user')),
			).not.toBeNull();
		});
	});
});
