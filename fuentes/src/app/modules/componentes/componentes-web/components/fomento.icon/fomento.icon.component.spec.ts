import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FomentoIconComponent } from './fomento.icon.component';

describe('Fomento.IconComponent', () => {
	let component: FomentoIconComponent;
	let fixture: ComponentFixture<FomentoIconComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FomentoIconComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FomentoIconComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
