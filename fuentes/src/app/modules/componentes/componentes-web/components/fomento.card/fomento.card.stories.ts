import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { FomentoCardComponent } from './fomento.card.component';
import { FomentoButtonComponent } from 'i-rf-web-component-node-lib';
import { MatButtonModule } from '@angular/material/button';

const meta: Meta<FomentoCardComponent> = {
  title: 'Components/Card',
  component: FomentoCardComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'El componente Card muestra información en una tarjeta estilizada con opciones para botones y texto.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Título que se muestra en la parte superior de la tarjeta',
    },
    size: {
      control: 'radio',
      options: ['s', 'm', 'l', 'xl'],
      description: 'Define el tamaño de la tarjeta (small, medium, large, extra-large)',
    },
    text: {
      control: 'text',
      description: 'Texto que se muestra en el cuerpo de la tarjeta',
    },
    label: {
      control: 'text',
      description: 'Texto que aparece en el botón dentro de la tarjeta. El botón está configurado de tal manera que si el label se encuentra vacío, desaparece, por lo que si se desea ocultar el botón, simplemente habrá que dejar el label vacío.',
    },
    icon: {
      control: 'text',
      description: 'Nombre del icono para el botón en la tarjeta, utilizando la librería de iconos Font Awesome.',
    },
    iconTitle: {
      control: 'text',
      description: 'Icono que aparece junto al título de la tarjeta, si se proporciona. Utiliza la librería Font Awesome (p. ej. para fa-house el valor de icon sería simplemente house).',
    },
    enableHover: {
      control: 'boolean',
      description: 'Booleano para activar o desactivar el hover sobre el card.',
    },
  },
  decorators: [
    moduleMetadata({
      declarations: [FomentoCardComponent, FomentoButtonComponent],
      imports: [BrowserAnimationsModule, MatCardModule, MatButtonModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<FomentoCardComponent>;

export const Default: Story = {
  args: {
    title: 'Título de la tarjeta',
    size: 'm',
    text: 'Este es el texto dentro de la tarjeta que muestra información relevante.',
    label: 'Etiqueta del botón',
    icon: 'book',
    iconTitle: 'fas fa-info-circle',
    enableHover: true,
  },
};

export const LargeCard: Story = {
  args: {
    title: 'Tarjeta Grande',
    size: 'l',
    text: 'Esta es una tarjeta de tamaño grande con más espacio para contenido.',
    label: 'Ver más',
    icon: 'eye',
    iconTitle: 'fas fa-eye',
    enableHover: true, 
  },
};

export const CardWithoutButton: Story = {
  args: {
    title: 'Tarjeta sin botón',
    size: 's',
    text: 'Esta tarjeta no incluye un botón en la parte inferior.',
    label: '', 
    icon: '',
    enableHover: false,
  },
};

export const DisabledButtonCard: Story = {
  args: {
    title: 'Tarjeta con botón deshabilitado',
    size: 'm',
    text: 'Esta tarjeta tiene un botón deshabilitado.',
    label: 'Acción no disponible',
    icon: 'lock',
    iconTitle: 'fas fa-lock',
    enableHover: false, 
  },
};
