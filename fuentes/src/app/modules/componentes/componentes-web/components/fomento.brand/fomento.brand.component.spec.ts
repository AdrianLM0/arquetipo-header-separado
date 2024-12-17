import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FomentoBrandComponent } from './fomento.brand.component';
import { By } from '@angular/platform-browser';

describe('FomentoBrand', () => {
	let brandComponent: FomentoBrandComponent;
	let fixture: ComponentFixture<FomentoBrandComponent>;
	let compiled: HTMLElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FomentoBrandComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FomentoBrandComponent);
		brandComponent = fixture.componentInstance;
	});

	describe('MatterBrand', () => {
		describe('Test about display', () => {
			it("should be hidden when 'BrandStyle' is 'material'", () => {
				brandComponent.brandStyle = 'matter';
				fixture.detectChanges();
				expect(fixture.debugElement.query(By.css('.logo'))).toBeNull();
			});

			it("should appear when 'BrandStyle' is 'matter'", () => {
				brandComponent.brandStyle = 'matter';
				fixture.detectChanges();
				expect(
					fixture.debugElement.query(By.css('matter-brand')),
				).not.toBeNull();
			});
		});
	});

	describe('MaterialBrand', () => {
		describe('Test about display', () => {
			it("should appear when 'BrandStyle' is 'material'", () => {
				brandComponent.brandStyle = 'material';
				fixture.detectChanges();
				expect(fixture.debugElement.query(By.css('.logo'))).not.toBeNull();
			});

			it("should be hidden when 'Brandstyle' is 'matter'", () => {
				brandComponent.brandStyle = 'material';
				fixture.detectChanges();
				expect(fixture.debugElement.query(By.css('matter-brand'))).toBeNull();
			});

			describe('Input params test', () => {
				it('should modify font-size style', () => {
					brandComponent.fontSize = '20px';
					brandComponent.brandStyle = 'material';
					fixture.detectChanges();
					compiled = fixture.debugElement.query(
						By.css('.site-name'),
					).nativeElement;
					expect(compiled.style.fontSize).toEqual('20px');
				});
			});
		});
	});
});
