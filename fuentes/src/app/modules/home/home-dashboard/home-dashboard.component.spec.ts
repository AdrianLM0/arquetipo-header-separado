import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDashboardComponent } from './home-dashboard.component';
import { KeycloakService } from 'keycloak-angular';
import { HttpClientModule } from '@angular/common/http';

describe('HomeDashboardComponent', () => {
	let component: HomeDashboardComponent;
	let fixture: ComponentFixture<HomeDashboardComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [HomeDashboardComponent],
			imports: [HttpClientModule],
			providers: [KeycloakService],
		});
		fixture = TestBed.createComponent(HomeDashboardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
