import {
	ComponentFixture,
	TestBed,
	fakeAsync,
	tick,
} from '@angular/core/testing';
import { FomentoBreadcrumbComponent } from './fomento.breadcrumb.component';
import { NavigationEnd, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject } from 'rxjs';

describe('FomentoBreadcrumbComponent', () => {
	let component: FomentoBreadcrumbComponent;
	let fixture: ComponentFixture<FomentoBreadcrumbComponent>;
	let router: Router;
	let navigationEndSubject: Subject<NavigationEnd>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FomentoBreadcrumbComponent],
			imports: [RouterTestingModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FomentoBreadcrumbComponent);
		component = fixture.componentInstance;
		router = TestBed.inject(Router);

		// Mock del evento de navegación del router
		navigationEndSubject = new Subject<NavigationEnd>();
		jest
			.spyOn(router, 'events', 'get')
			.mockReturnValue(navigationEndSubject.asObservable());

		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should update breadcrumbList correctly on router navigation', fakeAsync(() => {
		const breadcrumbList = [];

		// Emitir evento de navegación simulado
		navigationEndSubject.next(new NavigationEnd(1, 'url', 'url'));

		// Esperar que se resuelvan las promesas y se actualice la vista
		tick();

		// Verificar que la propiedad breadcrumbList se haya actualizado correctamente
		expect(component.breadcrumbList).toEqual(breadcrumbList);
	}));
});
