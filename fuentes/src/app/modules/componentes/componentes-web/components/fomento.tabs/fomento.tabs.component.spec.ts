import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomentoTabsComponent } from './fomento.tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import '@matter/matter-tabs/dist/matter-tabs';
import { Component, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
	template: `
		<lib-fomento-tabs orientation="horizontal">
			<ng-template><p class="prueba">Hola</p></ng-template>
			<ng-template>Adiós</ng-template>
		</lib-fomento-tabs>
	`,
})
class WrapperComponent {
	@ViewChild(FomentoTabsComponent, { static: true }) appComponentRef:
		| FomentoTabsComponent
		| undefined;
}

describe('FomentoTabsComponent', () => {
	let component: FomentoTabsComponent;
	let fixture: ComponentFixture<WrapperComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FomentoTabsComponent, WrapperComponent],
			imports: [MatTabsModule, BrowserAnimationsModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(WrapperComponent);
		const app = fixture.debugElement.componentInstance;
		component = app.appComponentRef;
		fixture.detectChanges();
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	describe('Version display', () => {
		describe('Choose matter version', () => {
			it('should show matter-input-group', () => {
				component.typeStyle = 'matter';
				fixture.detectChanges();
				expect(
					fixture.debugElement.query(By.css('matter-tabs')),
				).not.toBeNull();
			});

			it('should hide material input-group', () => {
				component.typeStyle = 'matter';
				fixture.detectChanges();
				expect(fixture.debugElement.query(By.css('.mdc-tab'))).toBeNull();
			});
		});

		describe('Choose material version', () => {
			it('should show material input-group', () => {
				component.typeStyle = 'material';
				fixture.detectChanges();
				expect(fixture.debugElement.query(By.css('.mdc-tab'))).not.toBeNull();
			});

			it('should hide matter-input-group', () => {
				component.typeStyle = 'material';
				fixture.detectChanges();
				expect(fixture.debugElement.query(By.css('matter-tabs'))).toBeNull();
			});
		});
	});

	describe('Tabs <ng-template> system is working correctly', () => {
		it('should display tab component correctly', () => {
			component.typeStyle = 'material';
			expect(fixture.debugElement.query(By.css('.prueba'))).toBeTruthy();
		});
	});
});
