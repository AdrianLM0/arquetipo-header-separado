import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { KeycloakService } from 'keycloak-angular';
import { HttpClientModule } from '@angular/common/http';

describe('LayoutComponent', () => {
	let component: LayoutComponent;
	let fixture: ComponentFixture<LayoutComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [LayoutComponent],
			imports: [HttpClientModule],
			providers: [KeycloakService],
		});
		fixture = TestBed.createComponent(LayoutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
