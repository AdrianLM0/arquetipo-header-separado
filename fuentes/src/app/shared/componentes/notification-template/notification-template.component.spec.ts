import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationTemplateComponent } from './notification-template.component';
import { NotifierService } from 'angular-notifier';

describe('NotificationTemplateComponent', () => {
	let component: NotificationTemplateComponent;
	let fixture: ComponentFixture<NotificationTemplateComponent>;
	let notifierServiceMock: Partial<NotifierService>;

	beforeEach(async () => {
		notifierServiceMock = {
			show: jest.fn(),
		};

		await TestBed.configureTestingModule({
			declarations: [NotificationTemplateComponent],
			providers: [{ provide: NotifierService, useValue: notifierServiceMock }],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(NotificationTemplateComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should show success notification', () => {
		const message = 'Success message';
		component.showNotification(message, 'success');
		expect(notifierServiceMock.show).toHaveBeenCalledWith({
			message: message,
			type: 'success',
			template: component.customNotificationTmplSuccess,
		});
	});
});
