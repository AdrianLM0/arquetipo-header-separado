import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { EjemploFomentoPlantillaAccesoDenegadoComponent } from './ejemplo-fomento-plantilla-acceso-denegado.component';

class MockRouter {
	getCurrentUrl(): string {
		return '/some/url'; // Simulamos el método para obtener la URL actual
	}
}

describe('EjemploFomentoPlantillaAccesoDenegadoComponent', () => {
	let component: EjemploFomentoPlantillaAccesoDenegadoComponent;
	let fixture: ComponentFixture<EjemploFomentoPlantillaAccesoDenegadoComponent>;
	let router: MockRouter;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoPlantillaAccesoDenegadoComponent],
			imports: [RouterTestingModule],
			providers: [
				{ provide: Router, useClass: MockRouter }, // Proporcionamos nuestro servicio simulado como el enrutador para las pruebas
			],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(
			EjemploFomentoPlantillaAccesoDenegadoComponent,
		);
		component = fixture.componentInstance;
		router = TestBed.inject(Router) as unknown as MockRouter; // Convertimos el enrutador a nuestro tipo simulado
		fixture.detectChanges(); // Esto inicializa el componente y sus componentes hijos
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
