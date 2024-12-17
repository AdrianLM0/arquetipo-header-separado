import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'; // Asegúrate de importar el módulo de botón
import { MatBadgeModule } from '@angular/material/badge'; // Importar el módulo de badge
import { FomentoButtonComponent } from './fomento.button.component';

const meta: Meta<FomentoButtonComponent> = {
  title: 'Components/Button',
  component: FomentoButtonComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Este es el botón de Fomento con varios estilos y temas.',
      },
    },
  },
  decorators: [
    moduleMetadata({
      declarations: [FomentoButtonComponent],
      imports: [
        BrowserAnimationsModule, 
        MatButtonModule, 
        MatBadgeModule, 
      ],
    }),
  ],
  argTypes: {
    label: { control: 'text', description: 'Texto que se muestra dentro del botón.' },
    theme: {
      control: 'radio',
      options: ['primary', 'secondary'],
      description: 'Tema visual del botón (colores).',
    },
    href: { control: 'text', description: 'Enlace de botón.' },
    target: { control: 'text', description: 'Forma de abrir el enlace' },
    icon: { control: 'text', description: 'Icono que se muestra dentro del botón (font-awesome).' },
    disabled: { control: 'boolean', description: 'Deshabilitar el botón.' },
    aria_label: { control: 'text', description: 'Etiqueta accesible para lectores de pantalla.' },
    disableRipple: { control: 'boolean', description: 'Deshabilitar la animación de ripple del botón' },
  },
};

export default meta;

type Story = StoryObj<FomentoButtonComponent>;

export const Default: Story = {
  args: {
    label: 'Botón Fomento',
    theme: 'primary',
    href : 'https://www.juntadeandalucia.es/',
    target : '_blank',
    icon: '',
    disabled: false,
    aria_label: 'Botón de Fomento',
    disableRipple : true,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Botón Secundario',
    theme: 'secondary',
    href : 'https://www.juntadeandalucia.es/',
    target : '_blank',
    icon: 'check',
    disabled: false,
    aria_label: 'Botón secundario con icono',
    disableRipple : true,
  },
};

export const SoloIcon: Story = {
  args: {
    label: '',
    theme: 'primary',
    href : 'https://www.google.es/',
    target : '_blank',
    icon: 'bell',
    disabled: false,
    aria_label: 'Botón icono',
    disableRipple : true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Botón Desactivado',
    theme: 'primary',
    href : 'https://www.google.es/',
    target : '_self',
    icon: '',
    disabled: true,
    aria_label: 'Botón desactivado',
    disableRipple : true,
  },
};

