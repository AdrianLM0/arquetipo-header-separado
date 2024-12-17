import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { FomentoBadgeComponent } from './fomento.badge.component';
import { MatIconModule } from '@angular/material/icon';

const meta: Meta<FomentoBadgeComponent> = {
  title: 'Components/Badge',
  component: FomentoBadgeComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '`lib-fomento-badge` es un componente Angular que simplifica la creación de badges que se muestran sobre otros elementos.',
      },
    },
  },
  argTypes: {
    badge: {
      control: 'text',
      description: 'Contenido del badge que se muestra sobre el elemento.',
      defaultValue: '5',
    },
    badgeColor: {
      control: 'select',
      options: ['primary', 'accent', 'warn'],
      description: 'Color del badge, puede ser "primary", "accent" o "warn".',
      defaultValue: 'primary',
    },
    badgeDescripcion: {
      control: 'text',
      description: 'Descripción accesible para el badge, utilizado para aria-describedby.',
      defaultValue: 'Descripción del badge',
    },
    badgeDisabled: {
      control: 'boolean',
      description: 'Deshabilita el badge.',
      defaultValue: false,
    },
    badgeHiden: {
      control: 'boolean',
      description: 'Oculta el badge si es true.',
      defaultValue: false,
    },
    badgeOverlap: {
      control: 'boolean',
      description: 'Define si el badge se superpone al contenido.',
      defaultValue: true,
    },
    badgePosition: {
      control: 'select',
      options: ['above after', 'above before', 'below before', 'below after'],
      description: 'Posición del badge.',
      defaultValue: 'above before',
    },
    badgeSize: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del badge.',
      defaultValue: 'large',
    },
  },
  decorators: [
    moduleMetadata({
      declarations: [FomentoBadgeComponent],
      imports: [BrowserAnimationsModule, MatBadgeModule, MatButtonModule, MatIconModule],
    }),
  ],
};

export default meta;

type Story = StoryObj<FomentoBadgeComponent>;

export const Default: Story = {
  args: {
    badge: '5',
    badgeColor: 'accent',
    badgeDescripcion: 'Descripción del badge',
    badgeDisabled: false,
    badgeHiden: false,
    badgeOverlap: true,
    badgePosition: 'above before',
    badgeSize: 'small',
  },
  render: (args) => ({
    props: args,
    template: `
    <lib-fomento-badge
      [badge]="badge"
      [badgeColor]="badgeColor"
      [badgePosition]="badgePosition"
      [badgeSize]="badgeSize"
      [badgeOverlap]="badgeOverlap"
      [badgeDescripcion]="badgeDescripcion"
      [badgeDisabled]="badgeDisabled"
      [badgeHiden]="badgeHiden">
      <button>prueba</button>
    </lib-fomento-badge>
    `,
  }),
};

export const HiddenBadge: Story = {
  args: {
    ...Default.args,
    badgeHiden: true,
    badgeColor: 'warn',
  },
  render: Default.render,
};

export const LargeBadge: Story = {
  args: {
    ...Default.args,
    badgeSize: 'large',
    badge: '6',
    badgePosition: 'below after',
  },
  render: Default.render,
};

// Nuevo ejemplo: Badge sobre un icono de Font Awesome
export const BadgeOnIcon: Story = {
  args: {
    ...Default.args,
    badge: '3',
    badgeColor: 'primary',
    badgePosition: 'above after',
  },
  render: (args) => ({
    props: args,
    template: `
    <lib-fomento-badge
      [badge]="badge"
      [badgeColor]="badgeColor"
      [badgePosition]="badgePosition"
      [badgeSize]="badgeSize"
      [badgeOverlap]="badgeOverlap"
      [badgeDescripcion]="badgeDescripcion"
      [badgeDisabled]="badgeDisabled"
      [badgeHiden]="badgeHiden">
      <i class="fa fa-bell" aria-hidden="true" style="font-size: 24px;"></i>
    </lib-fomento-badge>
    `,
  }),
};
