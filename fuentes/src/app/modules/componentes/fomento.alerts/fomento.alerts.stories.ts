import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { FomentoAlertsComponent } from './fomento.alerts.component';
import { Component, ViewChild } from '@angular/core';

// Configuración personalizada de NotifierOptions
const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'middle',
      distance: 12
    },
    vertical: {
      position: 'top',
      distance: 0,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: false,
    stacking: 1
  },
  animations: {
    enabled: true,
    show: {
      preset: 'fade',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@Component({
  selector: 'storybook-fomento-alerts-wrapper',
  template: `
    <div class="flex-container" style="padding: 20px;">
      <div class="item">
        <h2 class="title">Ejemplo del componente de alertas del sistema</h2>
      </div>
      <div class="item-alert">
        <lib-fomento-alerts
          #alertaComponent
          [type]="type"
          [labelFirstButton]="labelFirstButton"
          [labelSecondButton]="labelSecondButton"
          [notifications]="notifications"
          [showActionButtons]="showActionButtons"
          [currentIndex]="currentIndex">
        </lib-fomento-alerts>
      </div>

      <div class="flex-container">
      <button
      (click)="showNotification(type,showActionButtons,labelFirstButton,labelSecondButton)">
      Mostrar Notificación</button>
      </div>
    
    </div>
  `,
})
class StorybookFomentoAlert {
  @ViewChild('alertaComponent')
  alerta: FomentoAlertsComponent;

  type
  labelFirstButton = 'Cancelar';
  labelSecondButton = 'Aceptar';
  showActionButtons = false;

  themesuccess = 'primary';
  themeinfo = 'accent';
  themewarning = 'warn';
  themeerror = 'warn';

  labelsuccess = 'Mostrar Notificación Success';
  labelinfo = 'Mostrar Notificación Info';
  labelwarning = 'Mostrar Notificación Warning';
  labelerror = 'Mostrar Notificación Error';

  currentIndex = 0;
  onPrimaryButtonClick: any;
  onSecondaryButtonClick: any;
  successevent = {
    eventname: 'success',
    data: {
      title: 'Título mensaje de aviso Error de sistema',
      body: 'Cuerpo de texto del mensaje de aviso del sistema. Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    },
  };

  infoevent = {
    eventname: 'info',
    data: {
      title: 'Título mensaje de aviso Error de sistema',
      body: 'Cuerpo de texto del mensaje de aviso del sistema. Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    },
  };

  warningevent = {
    eventname: 'warning',
    data: {
      title: 'Título mensaje de aviso Error de sistema',
      body: 'Cuerpo de texto del mensaje de aviso del sistema. Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    },
  };

  errorevent = {
    eventname: 'error',
    data: {
      title: 'Título mensaje de aviso Error de sistema',
      body: 'Cuerpo de texto del mensaje de aviso del sistema. Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    },
  };
  //Alerts con Paginación
  notifications = [
    {
      title: 'Primera notificación',
      message: 'Este es el contenido de la primera notificación',
    },
    {
      title: 'Segunda notificación',
      message: 'Este es el contenido de la segunda notificación',
    },
    {
      title: 'Tercera notificación',
      message: 'Este es el contenido de la tercera notificación',
    },
    {
      title: 'Cuarta notificación',
      message: 'Este es el contenido de la cuarta notificación',
    },
  ];
  //Para alert sin Paginación
  notificationsSimple = [
    {
      title: 'Notificación simple',
      message: 'Este es el contenido de la notificacion simple',
    },
  ];

  showPagedNotification(
    type: string,
    labelFirstButton: string,
    labelSecondButton: string,
    showActionButtons: boolean
  ) {
    this.alerta.showPagedNotification(
      this.notifications,
      type,
      showActionButtons,
      () => this.logicaPrimerBoton(),
      () => this.logicaSegundoBoton(),
      labelFirstButton,
      labelSecondButton
    );
  }
  showNotification(
    tipo: string,
    showActionButtons?: boolean,
    labelFirstButton?: string,
    labelSecondButton?: string,
  ) {
    this.alerta.showPagedNotification(
      this.notificationsSimple,
      tipo,
      showActionButtons,
      () => this.logicaPrimerBoton(),
      () => this.logicaSegundoBoton(),
      labelFirstButton,
      labelSecondButton,
    );
  }

  displayNotification(type: string) {
  }
  logicaPrimerBoton() {
    // Lógica específica para la acción primaria
    console.log('logicaPrimerBoton');
  }

  logicaSegundoBoton() {
    // Lógica específica para la acción secundaria
    console.log('logicaSegundoBoton');
  }

}

// Definición del Storybook Meta
const meta: Meta<StorybookFomentoAlert> = {
  title: 'Components/Alerts',
  component: StorybookFomentoAlert,
  tags: ['autodocs'],
  decorators: [
      moduleMetadata({
          declarations: [FomentoAlertsComponent, StorybookFomentoAlert],
          imports: [
              BrowserAnimationsModule,
              NotifierModule.withConfig(customNotifierOptions)
          ]
      })
  ],
  parameters: {
      docs: {
          description: {
              component: 'Este componente muestra alertas con estilos específicos para cada tipo: success, warning, error, info.'
          }
      },
      jsonschema: {
          schema: {
              $schema: "http://json-schema.org/draft-07/schema#",
              $id: "https://example.com/fomento-alerts.schema.json",
              type: "object",
              title: "FomentoAlertsComponent Schema",
              description: "Esquema JSON para el componente FomentoAlertsComponent",
              properties: {
                  notifications: {
                      type: "array",
                      description: "Array de notificaciones que se mostrarán al usuario.",
                      items: {
                          type: "object",
                          properties: {
                              title: {
                                  type: "string",
                                  description: "Título de la notificación",
                                  default: "Título de la notificación"
                              },
                              message: {
                                  type: "string",
                                  description: "Mensaje de la notificación",
                                  default: "Este es el mensaje de la notificación"
                              },
                              eventname: {
                                type: "string",
                                description: "Tipo de evento que representa esta notificación (success, warning, info, error).",
                                enum: ["success", "warning", "info", "error"],
                                default: "info"
                            }
                            
                          },
                          required: ["title", "message"]
                      }
                  },
                  showActionButtons: {
                      type: "boolean",
                      description: "Define si se mostrarán los botones de acción en la alerta.",
                      default: false
                  },
                  labelFirstButton: {
                      type: "string",
                      description: "Texto del primer botón de acción",
                      default: "Cancelar"
                  },
                  labelSecondButton: {
                      type: "string",
                      description: "Texto del segundo botón de acción",
                      default: "Aceptar"
                  }
              },
              required: ["notifications"]
          }
      }
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'warning', 'info', 'error'],
      description: 'Tipo de alert',
      defaultValue: 'success',
    },
    labelFirstButton: {
      control: 'text',
      description: 'Texto del primer botón de acción (por defecto es "Cancelar")',
      defaultValue: 'Cancelar'
    },
    labelSecondButton: {
      control: 'text',
      description: 'Texto del segundo botón de acción (por defecto es "Aceptar")',
      defaultValue: 'Aceptar'
    },
    notifications: {
      control: 'object',
      description: 'Array de notificaciones que se mostrarán al usuario.'
    },
    showActionButtons: {
      control: 'boolean',
      description: 'Define si se mostrarán los botones de acción en la alerta.'
    },
    currentIndex: {
      control: { type: 'number', min: 0 },
      description: 'Índice actual de la notificación que se muestra en la lista.'
    },
    notificationsSimple: {
      control: 'object',
      description: 'Array de notificaciones que se mostrarán al usuario (para alert sin paginación).'
    },
  }
};



export default meta;

type Story = StoryObj<StorybookFomentoAlert>;

export const Default: Story = {
  args: {
    type: "success",
    showActionButtons: false,
    labelFirstButton: "Cancelar",
    labelSecondButton: 'Aceptar',
    notifications: [{
      title: 'Notificación simple',
      message: 'Este es el contenido de la notificación simple',
    }],
    currentIndex: 0
  },
  render: (args) => ({
    props: args,
  }),
  parameters: {
    docs: {
      source: {
        code: `
            <lib-fomento-alerts
              [type]="type"
              [labelFirstButton]="labelFirstButton"
              [labelSecondButton]="labelSecondButton"
              [notifications]="notifications"
              [showActionButtons]="showActionButtons"
              [currentIndex]="currentIndex">
            </lib-fomento-alerts>
        `,
      },
    },
  },
};
export const SimpleActions: Story = {
  render: Default.render,
  parameters: Default.parameters,
  args: {
    type: "success",
    labelFirstButton: 'Cancelar',
    labelSecondButton: 'Aceptar',
    showActionButtons: true,
    notifications: [{
      title: 'Notificación simple',
      message: 'Este es el contenido de la notificacion simple',
    }],
    currentIndex: 0
  }
};
export const Info: Story = {
  render: Default.render,
  parameters: Default.parameters,
  args: {
    type: "info",
    showActionButtons: false,
    notifications: [{
      title: 'Informacion',
      message: 'Este es el contenido de un alert informativo',
    }],
    currentIndex: 0
  }
};
export const Warning: Story = {
  render: Default.render,
  parameters: Default.parameters,
  args: {
    type: "warning",
    showActionButtons: false,
    notifications: [{
      title: 'Aviso',
      message: 'Este es el contenido de un aviso',
    }],
    currentIndex: 0
  }
};
export const Error: Story = {
  render: Default.render,
  parameters: Default.parameters,
  args: {
    type: "error",
    showActionButtons: false,
    notificationsSimple: [{
      title: 'Error',
      message: 'Este es el contenido de un error',
    }],
    currentIndex: 0
  }
};
export const PagedSimple: Story = {
  render: Default.render,
  parameters: Default.parameters,
  args: {
    type: "success",
    showActionButtons: false,
    notifications: [{
      title: 'Alert Paginado',
      message: 'Este es un ejemplo de un alert paginado',
    }, {
      title: 'Primera notificación',
      message: 'Este es el contenido de la primera notificación',
    },
    {
      title: 'Segunda notificación',
      message: 'Este es el contenido de la segunda notificación',
    },
    {
      title: 'Tercera notificación',
      message: 'Este es el contenido de la tercera notificación',
    },
    {
      title: 'Cuarta notificación',
      message: 'Este es el contenido de la cuarta notificación',
    },],
    currentIndex: 0
  }
};
export const PagedActions: Story = {
  render: Default.render,
  parameters: Default.parameters,
  args: {
    type: "success",
    showActionButtons: true,
    labelFirstButton: 'Cancelar',
    labelSecondButton: 'Aceptar',
    notifications: [{
      title: 'Alert Paginado',
      message: 'Este es un ejemplo de un alert paginado',
    }, {
      title: 'Primera notificación',
      message: 'Este es el contenido de la primera notificación',
    },
    {
      title: 'Segunda notificación',
      message: 'Este es el contenido de la segunda notificación',
    },
    {
      title: 'Tercera notificación',
      message: 'Este es el contenido de la tercera notificación',
    },
    {
      title: 'Cuarta notificación',
      message: 'Este es el contenido de la cuarta notificación',
    },],
    currentIndex: 0
  }
};