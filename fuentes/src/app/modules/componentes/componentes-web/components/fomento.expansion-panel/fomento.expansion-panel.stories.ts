import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { FomentoExpansionPanelComponent } from './fomento.expansion-panel.component';

const meta: Meta<FomentoExpansionPanelComponent> = {
  title: 'Components/Expansion Panel',
  component: FomentoExpansionPanelComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Este es el componente Expansion Panel de Fomento.',
      },
    },
  },
  decorators: [
    moduleMetadata({
      declarations: [FomentoExpansionPanelComponent],
      imports: [
        BrowserAnimationsModule,
        MatExpansionModule,
      ],
    }),
  ],
  argTypes: {
    panelTitle: {
      control: 'text',
      description: 'Texto que aparece como título del panel.',
    },
    panelDescription: {
      control: 'text',
      description: 'Texto que aparece como descripción en el encabezado.',
    },
    panelContent: {
      control: 'text',
      description: 'Contenido principal del panel.',
    },
    collapsedHeight: {
      control: 'text',
      description: 'Altura del encabezado cuando el panel está colapsado (en px).',
    },
    expandedHeight: {
      control: 'text',
      description: 'Altura del encabezado cuando el panel está expandido (en px).',
    },
    hideToggle: {
      control: 'boolean',
      description: 'Ocultar el ícono de expansión.',
    },
    expanded: {
      control: 'boolean',
      description: 'Define si el panel debe estar expandido por defecto.',
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilita el panel de expansión.',
    },
    multi: {
      control: 'boolean',
      description: 'Permite que múltiples paneles estén abiertos simultáneamente en un acordeón.',
    },
    displayMode: {
      control: 'radio',
      options: ['default', 'flat'],
      description: 'Modo de visualización del panel: `default` o `flat`.',
    },
    togglePosition: {
      control: 'radio',
      options: ['before', 'after'],
      description: 'Posición del ícono de expansión: `before` o `after`.',
    },
    id: {
      control: 'text',
      description: 'Identificador único del componente.',
    },
  },
};

export default meta;

type Story = StoryObj<FomentoExpansionPanelComponent>;

export const Default: Story = {
  args: {
    panelTitle: 'Título del Panel',
    panelDescription: 'Descripción del Panel',
    panelContent: 'Este es el contenido del Expansion Panel.',
    collapsedHeight: '48px',
    expandedHeight: '64px',
    hideToggle: false,
    expanded: false,
    disabled: false,
    multi: false,
    displayMode: 'default',
    togglePosition: 'after',
    id: 'default-panel',
  },
};

export const FlatMode: Story = {
  args: {
    ...Default.args,
    displayMode: 'flat',
    id: 'flat-panel',
    panelTitle: 'Panel en modo plano',
    panelDescription: 'Modo plano elimina el espacio adicional.',
  },
};

export const ToggleBefore: Story = {
  args: {
    ...Default.args,
    togglePosition: 'before',
    id: 'toggle-before-panel',
    panelTitle: 'Ícono de expansión antes del título',
    panelDescription: 'El ícono está a la izquierda.',
  },
};

export const MultiPanels: Story = {
    args: {
      multi: true,
      displayMode: 'default',
    },
    render: (args) => ({
      props: args,
      template: `
        <mat-accordion [multi]="multi">
          <lib-fomento-expansion-panel
            [id]="'panel-1'"
            [panelTitle]="'Panel 1'"
            [panelDescription]="'Descripción del Panel 1'"
            [panelContent]="'Contenido del Panel 1'"
            [collapsedHeight]="'48px'"
            [expandedHeight]="'64px'"
            [hideToggle]="false"
            [expanded]="false"
            [disabled]="false"
          ></lib-fomento-expansion-panel>
          <lib-fomento-expansion-panel
            [id]="'panel-2'"
            [panelTitle]="'Panel 2'"
            [panelDescription]="'Descripción del Panel 2'"
            [panelContent]="'Contenido del Panel 2'"
            [collapsedHeight]="'48px'"
            [expandedHeight]="'64px'"
            [hideToggle]="false"
            [expanded]="false"
            [disabled]="false"
          ></lib-fomento-expansion-panel>
        </mat-accordion>
      `,
    }),
  };

export const CustomHeights: Story = {
  args: {
    ...Default.args,
    collapsedHeight: '40px',
    expandedHeight: '80px',
    id: 'custom-heights-panel',
  },
};