import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FomentoIconComponent } from './fomento.icon.component';

const meta: Meta<FomentoIconComponent> = {
  title: 'Components/Icon',
  component: FomentoIconComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Componente de icono reutilizable con soporte para Material Icons y Font Awesome.',
      },
    },
  },
  decorators: [
    moduleMetadata({
      declarations: [FomentoIconComponent],
      imports: [BrowserAnimationsModule, MatIconModule],
    }),
  ],
  argTypes: {
    typeStyle: {
      control: 'radio',
      options: ['material', 'font-awesome'],
      description: 'Define el estilo del icono: Material Icons o Font Awesome.',
    },
    icon: {
      control: 'text',
      description: 'Nombre del icono que se desea mostrar.',
    },
    color: {
      control: 'color',
      description: 'Color del icono.',
    },
    svgIcon: {
      control: 'text',
      description: 'Nombre del icono SVG registrado en MatIconRegistry.',
    },
    fontSet: {
      control: 'text',
      description: 'Conjunto de fuentes personalizado para Material Icons.',
    },
    inline: {
      control: 'boolean',
      description: 'Define si el icono debe mostrarse inline.',
    },
    fontIcon: {
      control: 'text',
      description: 'Nombre del icono de fuente personalizada.',
    },
  },
};

export default meta;

type Story = StoryObj<FomentoIconComponent>;

export const Default: Story = {
  args: {
    typeStyle: 'material',
    icon: 'home',
    color: '#000',
    svgIcon: '',
    fontSet: 'fa',
    inline: false,
    fontIcon: '',
  },
};

export const FontAwesomeIcon: Story = {
    args: {
      typeStyle: 'font-awesome',
      icon: 'fa-coffee', 
      color: '#3f51b5',
      svgIcon: '',
      fontSet: '',
      inline: false,
      fontIcon: '',
    },
  };

export const SVGIcon: Story = {
  args: {
    typeStyle: 'material',
    svgIcon: 'custom-icon',
    color: '#4caf50',
    fontSet: '',
    inline: false,
    fontIcon: '',
  },
};
