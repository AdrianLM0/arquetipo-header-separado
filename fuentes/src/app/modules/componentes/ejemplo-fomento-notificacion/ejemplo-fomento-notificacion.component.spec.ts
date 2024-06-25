import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjemploFomentoNotificacionComponent } from './ejemplo-fomento-notificacion.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FomentoNotificacionesComponent } from '@fomento/i-rf-web-component-node-lib';
import { NotificationWebsocketConfig } from '@fomento/i-rf-web-component-node-lib';

describe('EjemploFomentoNotificacionComponent', () => {
  let component: EjemploFomentoNotificacionComponent;
  let fixture: ComponentFixture<EjemploFomentoNotificacionComponent>;
  let mockNotificacionesComponent: Partial<FomentoNotificacionesComponent>;

  beforeEach(async () => {
	// Creamos un mock del componente FomentoNotificacionesComponent
	mockNotificacionesComponent = {
	  initialize: jest.fn(),
	  sendNotification: jest.fn(),
	};
  
	// Configuramos el TestBed con los módulos necesarios
	await TestBed.configureTestingModule({
	  declarations: [EjemploFomentoNotificacionComponent],
	  imports: [MatSnackBarModule],
	  providers: [
		// Proporcionamos el mock del componente FomentoNotificacionesComponent
		{ provide: FomentoNotificacionesComponent, useValue: mockNotificacionesComponent }
	  ]
	}).compileComponents();
  
	// Creamos una instancia del componente
	fixture = TestBed.createComponent(EjemploFomentoNotificacionComponent);
	component = fixture.componentInstance;
  
	// Inicializamos el ViewChild con el componente mockeado
	component.notificaciones = mockNotificacionesComponent as any;
  });

  it('should initialize FomentoNotificacionesComponent with correct configuration', () => {
    // Configuramos el objeto de configuración del WebSocket
    const config: NotificationWebsocketConfig = {
      broker: '/topic/notification',
      message: '/app/message',
      connectionUrl: 'ws://localhost:8085/ws',
    };

    // Llamamos al ngOnInit para inicializar el componente
    component.ngOnInit();

    // Verificamos que se haya llamado a la función initialize del componente de notificaciones
    expect(mockNotificacionesComponent.initialize).toHaveBeenCalledWith(config);
  });

  it('should send notification using FomentoNotificacionesComponent', () => {
    // Definimos un mensaje de prueba
    const testMessage = 'Test message';

    // Llamamos a la función send del componente
    component.send(testMessage);

    // Verificamos que se haya llamado a la función sendNotification del componente de notificaciones
    expect(mockNotificacionesComponent.sendNotification).toHaveBeenCalledWith(testMessage);
  });
});