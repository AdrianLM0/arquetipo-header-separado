import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBottomSheetModule, MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FomentoBottomSheetComponent } from './fomento.bottom-sheet.component';
import { Component } from '@angular/core';
import { BottomSheetOverviewExampleComponent } from './bottom-sheet.component';

@Component({
  selector: 'storybook-bottom-sheet-wrapper',
  template: `
    <lib-fomento-bottom-sheet
      [label]="label"
      [theme]="theme"
      [icon]="icon"
      [disabled]="disabled"
      [aria_label]="aria_label"
      [disableRipple]="disableRipple"
      (bottomSheet)="openBottomSheet($event)">
    </lib-fomento-bottom-sheet>
  `,
})
class BottomSheetWrapperComponent {
  label = 'Abrir Bottom Sheet';
  theme = 'primary';
  icon = 'home';
  disabled = false;
  disableRipple = true;
  aria_label = 'Abrir Bottom Sheet';

  links = [
    { title: 'Ayudas Plan EcoVivienda', url: 'https://example.com/plan-eco-vivienda', subtitle: 'Add to a note' },
    { title: 'Programa Garantía de Vivienda Joven', url: 'https://example.com/garantia-vivienda-joven', subtitle: 'Embed in a document' },
    { title: 'Bono Alquiler Joven en Andalucía', url: 'https://example.com/bono-alquiler' },
    { title: 'Info.vivienda', url: 'https://example.com/info-vivienda', subtitle: 'Show to your coworkers' }
  ];

  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetOverviewExampleComponent, {
      data: { links: this.links }
    });
  }
}

const meta: Meta<BottomSheetWrapperComponent> = {
  title: 'Components/BottomSheet',
  component: BottomSheetWrapperComponent,
  decorators: [
    moduleMetadata({
      declarations: [FomentoBottomSheetComponent, BottomSheetOverviewExampleComponent, BottomSheetWrapperComponent],
      imports: [
        BrowserAnimationsModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatIconModule,
        MatListModule
      ],
    }),
  ],
  tags: ['autodocs'], // Habilita la generación automática de documentación
  parameters: {
    docs: {
      description: {
        component: '`lib-fomento-bottom-sheet` es un componente Angular que simplifica la creación de desplegables inferiores.'
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto del botón que aparece en el bottom sheet',
      defaultValue: 'Abrir Bottom Sheet',
    },
    theme: {
      control: 'select',
      options: ['primary', 'warn', 'accent'],
      description: 'Especifica el color del botón, valores permitidos: "primary", "warn", "accent".',
      defaultValue: 'primary',
    },
    icon: {
      control: 'text',
      description: 'Nombre del ícono que se va a usar, usando la clase de FontAwesome',
      defaultValue: 'home',
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilita el botón',
      defaultValue: false,
    },
    aria_label: {
      control: 'text',
      description: 'Descripción accesible para tecnologías de asistencia',
      defaultValue: 'Abrir Bottom Sheet',
    },
    disableRipple: {
      control: 'boolean',
      description: 'Desactiva la animación de ripple del botón',
      defaultValue: true,
    }
  },
};

export default meta;

type Story = StoryObj<BottomSheetWrapperComponent>;

export const Default: Story = {
  args: {
    label: 'Abrir Bottom Sheet',
    theme: 'primary',
    icon: 'home',
    disabled: false,
    disableRipple: true,
  },
};

export const SecondaryTheme: Story = {
  args: {
    label: 'Abrir Bottom Sheet',
    theme: 'warn',
    icon: 'user',
    disabled: false,
    disableRipple: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Bottom Sheet Deshabilitado',
    theme: 'accent',
    icon: 'lock',
    disabled: true,
    disableRipple: true,
  },
};
