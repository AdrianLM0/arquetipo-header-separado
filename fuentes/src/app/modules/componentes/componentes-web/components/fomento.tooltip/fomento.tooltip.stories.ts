import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FomentoTooltipComponent } from './fomento.tooltip.component';

const meta: Meta<FomentoTooltipComponent> = {
  title: 'Components/Tooltip',
  component: FomentoTooltipComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '`lib-fomento-tooltip` es un componente Angular que muestra un tooltip personalizable sobre un elemento.',
      },
    },
  },
  argTypes: {
    description: {
      control: 'text',
      description: 'Texto que se muestra en el tooltip.',
      defaultValue: 'Este es un tooltip de ejemplo',
    },
    position: {
      control: 'select',
      options: ['above', 'below', 'left', 'right'],
      description: 'Posición del tooltip en relación al elemento.',
      defaultValue: 'below',
    },
    delay_hide: {
      control: 'number',
      description: 'Retraso en milisegundos para ocultar el tooltip.',
      defaultValue: 0,
    },
    delay_show: {
      control: 'number',
      description: 'Retraso en milisegundos para mostrar el tooltip.',
      defaultValue: 0,
    },
    tooltipEnabled: {
      control: 'boolean',
      description: 'Controla si el tooltip está visible o no.',
      defaultValue: true,
    },
    ariaLabel: {
      control: 'text',
      description: 'Etiqueta accesible para lectores de pantalla.',
      defaultValue: 'Tooltip: Este es un tooltip de ejemplo',
    },
    ariaLive: {
      control: 'select',
      options: ['off', 'polite', 'assertive'],
      description: 'Controla la prioridad de lectura en lectores de pantalla.',
      defaultValue: 'polite',
    },
    role: {
      control: 'text',
      description: 'Rol accesible para el tooltip.',
      defaultValue: 'tooltip',
    },
    tabindex: {
      control: 'text',
      description: 'Controla el foco del tooltip en la navegación.',
      defaultValue: '0',
    },
  },
  decorators: [
    moduleMetadata({
      declarations: [FomentoTooltipComponent],
      imports: [BrowserAnimationsModule, MatTooltipModule],
    }),
  ],
};

export default meta;

type Story = StoryObj<FomentoTooltipComponent>;

// Estilos personalizados aplicados directamente al tooltip y espacio alrededor del botón
export const Default: Story = {
  args: {
    description: 'Tooltip por defecto',
    position: 'below',
    delay_hide: 0,
    delay_show: 0,
    tooltipEnabled: true,
    ariaLabel: 'Tooltip: Tooltip por defecto',
    ariaLive: 'polite',
    role: 'tooltip',
    tabindex: '0',
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="tooltip-container">
        <lib-fomento-tooltip
          [description]="description"
          [position]="position"
          [delay_hide]="delay_hide"
          [delay_show]="delay_show"
          [tooltipEnabled]="tooltipEnabled"
          [ariaLabel]="ariaLabel"
          [ariaLive]="ariaLive"
          [role]="role"
          [tabindex]="tabindex"
          matTooltipClass="custom-tooltip">
          <button>Coloca el cursor aquí</button>
        </lib-fomento-tooltip>
      </div>
    `,
  }),
};

// Ejemplo con posición superior y retrasos personalizados
export const AboveWithDelays: Story = {
  args: {
    description: 'Tooltip en posición "above" con retraso',
    position: 'above',
    delay_hide: 500,
    delay_show: 200,
    tooltipEnabled: true,
    ariaLabel: 'Tooltip: Tooltip en posición "above" con retraso',
    ariaLive: 'polite',
    role: 'tooltip',
    tabindex: '0',
  },
  render: Default.render,
};

// Ejemplo con posición a la izquierda sin retrasos
export const LeftNoDelays: Story = {
  args: {
    description: 'Tooltip en posición "left" sin retraso',
    position: 'left',
    delay_hide: 0,
    delay_show: 0,
    tooltipEnabled: true,
    ariaLabel: 'Tooltip: Tooltip en posición "left" sin retraso',
    ariaLive: 'polite',
    role: 'tooltip',
    tabindex: '0',
  },
  render: Default.render,
};

// Ejemplo con texto personalizado y posición a la derecha
export const CustomTextRight: Story = {
  args: {
    description: 'Texto personalizado en posición "right"',
    position: 'right',
    delay_hide: 300,
    delay_show: 100,
    tooltipEnabled: true,
    ariaLabel: 'Tooltip: Texto personalizado en posición "right"',
    ariaLive: 'polite',
    role: 'tooltip',
    tabindex: '0',
  },
  render: Default.render,
};
