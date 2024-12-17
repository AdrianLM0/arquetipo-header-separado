import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, Input } from '@angular/core';
import { FomentoDisclaimerComponent } from './fomento.disclaimer.component';
import { FomentoButtonComponent } from '../fomento.button/fomento.button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// Componente utilizado en el Storybook para abrir el diálogo automáticamente
@Component({
  selector: 'storybook-fomento-disclaimer',
  template: `
    <button mat-button color="primary" (click)="openDialog()" class="custom-button" style="font-size: 16px; padding: 8px 16px;">
      Abrir Disclaimer
    </button>
  `,
  styles: [`
    .custom-button {
      background-color: green !important;
      color: white !important;
    }
  `]
})
class StorybookFomentoDisclaimer {
  @Input() titulo = 'Obligaciones para el uso del Sistema';
  @Input() parrafo = `Para la utilización de esta aplicación informática se debe tener en consideración el <a href='https://www.juntadeandalucia.es/boja/2020/208/34'>Código de Conducta</a> en el uso de las Tecnologías de la Información y la Comunicación para profesionales públicos de la Administración de la Junta de Andalucía (Boja núm. 22 de Octubre de 2020).`;
  @Input() usuario = 'Juan Pérez';
  @Input() ultimoAcceso = '01/01/2022 08:00';
  @Input() ultimoCierreSesion = '31/12/2021 18:00';
  @Input() labelAceptar = 'Aceptar';
  @Input() labelCerrar = 'Cerrar Sesión';

  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DisclaimerDialogComponent, {
      width: '65%',
      height: 'auto',
      data: {
        titulo: this.titulo,
        parrafo: this.parrafo,
        usuario: this.usuario,
        ultimoAcceso: this.ultimoAcceso,
        ultimoCierreSesion: this.ultimoCierreSesion,
        labelAceptar: this.labelAceptar,
        labelCerrar: this.labelCerrar,
      },
    });
  }
}

// Componente de diálogo que contiene el Disclaimer
@Component({
  selector: 'lib-disclaimer-dialog',
  template: `
    <lib-fomento-disclaimer
      [titulo]="data.titulo"
      [parrafo]="data.parrafo"
      [usuario]="data.usuario"
      [ultimoAcceso]="data.ultimoAcceso"
      [ultimoCierreSesion]="data.ultimoCierreSesion"
      [labelAceptar]="data.labelAceptar"
      [labelCerrar]="data.labelCerrar"
      (aceptarClick)="onAceptarClick()"
      (closeSesion)="onCloseSesion()"
    ></lib-fomento-disclaimer>
  `,
})
class DisclaimerDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DisclaimerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onAceptarClick() {
    this.dialogRef.close();
  }

  onCloseSesion() {
    this.dialogRef.close();
  }
}

// Configuración de meta para el Storybook
const meta: Meta<StorybookFomentoDisclaimer> = {
  title: 'Components/Disclaimer',
  component: StorybookFomentoDisclaimer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'El componente original **Disclaimer** no incluye ningún botón para abrir el modal, se abre inmediatamente. Es útil para mostrar avisos o condiciones que el usuario debe aceptar antes de continuar.',
      },
    },
  },
  decorators: [
    moduleMetadata({
      declarations: [
        StorybookFomentoDisclaimer,
        DisclaimerDialogComponent,
        FomentoDisclaimerComponent,
        FomentoButtonComponent,
      ],
      imports: [
        BrowserAnimationsModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
      ],
    }),
  ],
  argTypes: {
    titulo: {
      control: 'text',
      description: 'Título que se muestra en la cabecera del disclaimer',
      defaultValue: 'Obligaciones para el uso del Sistema',
    },
    parrafo: {
      control: 'text',
      description: 'Contenido del párrafo del disclaimer (puede incluir HTML)',
      defaultValue: `Para la utilización de esta aplicación informática se debe tener en consideración el <a href='https://www.juntadeandalucia.es/boja/2020/208/34'>Código de Conducta</a> en el uso de las Tecnologías de la Información y la Comunicación para profesionales públicos de la Administración de la Junta de Andalucía (Boja núm. 22 de Octubre de 2020).`,
    },
    usuario: {
      control: 'text',
      description: 'Nombre del usuario',
      defaultValue: 'Juan Pérez',
    },
    ultimoAcceso: {
      control: 'text',
      description: 'Fecha y hora del último acceso',
      defaultValue: '01/01/2022 08:00',
    },
    ultimoCierreSesion: {
      control: 'text',
      description: 'Fecha y hora del último cierre de sesión',
      defaultValue: '31/12/2021 18:00',
    },
    labelAceptar: {
      control: 'text',
      description: 'Etiqueta del botón Aceptar',
      defaultValue: 'Aceptar',
    },
    labelCerrar: {
      control: 'text',
      description: 'Etiqueta del botón Cerrar Sesión',
      defaultValue: 'Cerrar Sesión',
    },
  },
};

export default meta;

type Story = StoryObj<StorybookFomentoDisclaimer>;

// Historia por defecto que muestra el disclaimer inmediatamente
export const Default: Story = {
  args: {
    titulo: 'Obligaciones para el uso del Sistema',
    parrafo: `Para la utilización de esta aplicación informática se debe tener en consideración el <a href='https://www.juntadeandalucia.es/boja/2020/208/34'>Código de Conducta</a> en el uso de las Tecnologías de la Información y la Comunicación para profesionales públicos de la Administración de la Junta de Andalucía (Boja núm. 22 de Octubre de 2020).`,
    usuario: 'Juan Pérez',
    ultimoAcceso: '01/01/2022 08:00',
    ultimoCierreSesion: '31/12/2021 18:00',
    labelAceptar: 'Aceptar',
    labelCerrar: 'Cerrar Sesión',
  },
  render: (args) => ({
    component: StorybookFomentoDisclaimer,
    props: args,
  }),
};

// Historia con etiquetas personalizadas
export const CustomLabels: Story = {
  args: {
    ...Default.args,
    labelAceptar: 'Continuar',
    labelCerrar: 'Salir',
  },
  render: (args) => ({
    component: StorybookFomentoDisclaimer,
    props: args,
  }),
};

