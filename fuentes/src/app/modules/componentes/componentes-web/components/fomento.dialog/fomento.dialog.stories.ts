import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Component, Inject, Input } from '@angular/core';

// Componente utilizado en el Storybook
@Component({
  selector: 'storybook-fomento-dialog',
  template: `
    <!-- Botón para abrir el modal con estilos específicos para Storybook -->
    <button mat-button color="primary" (click)="openDialog()" style="font-size: 16px; padding: 8px 16px; color: white; background-color: #007932;">
      Abrir modal
    </button>
  `
})
class StorybookFomentoDialog {
  @Input() width = '65%';
  @Input() height = '80%';
  @Input() closeButton = true;
  @Input() closeButtonPosition: 'left' | 'right' = 'right';
  @Input() label = 'Cerrar modal';

  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(FomentoDialogComponent, {
      width: this.width,
      height: this.height,
      data: { 
        closeButton: this.closeButton, 
        closeButtonPosition: this.closeButtonPosition, 
        label: this.label 
      },
    });
  }
}

// Componente de diálogo utilizado dentro del Storybook
@Component({
  selector: 'lib-fomento-dialog',
  template: `
    <div class="dialog-header" [ngStyle]="{'justify-content': data?.closeButtonPosition === 'left' ? 'flex-start' : 'flex-end'}">
      <!-- Botón de cerrar con icono de Angular Material y hover rojo -->
      <button mat-icon-button (click)="close()" *ngIf="data?.closeButton" class="close-button">
        <mat-icon>close</mat-icon>
      </button>
    </div>
    <mat-dialog-content class="dialog-content">
      <h1 mat-dialog-title>Contenido del modal</h1>
      <p>Este es un contenido de ejemplo dentro del modal.</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button color="primary" (click)="close()" style="color: white; background-color: #007932;">
        {{ data?.label || 'Cerrar modal' }}
      </button>
    </mat-dialog-actions>
  `,
  styles: [`
    .dialog-header {
      display: flex;
      padding: 10px;
    }

    .close-button {
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: black;
    }

    .close-button mat-icon:hover {
      color: red;
    }

    .dialog-content {
      padding: 20px;
      text-align: center;
    }

    h1 {
      font-size: 24px;
      margin-bottom: 16px;
    }

    button[mat-button] {
      font-size: 16px;
    }
  `]
})
class FomentoDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<FomentoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { closeButton: boolean, closeButtonPosition: 'left' | 'right', label?: string }
  ) {}

  close() {
    this.dialogRef.close();
  }
}

// Configuración de meta para el Storybook
const meta: Meta<StorybookFomentoDialog> = { 
  title: 'Components/Dialog',
  component: StorybookFomentoDialog,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [FomentoDialogComponent, StorybookFomentoDialog],
      imports: [
        BrowserAnimationsModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
      ],
    }),
  ],
  argTypes: {
    width: { control: 'text', description: 'Ancho del modal (ej. 65%, 500px)' },
    height: { control: 'text', description: 'Altura del modal (ej. 80%, 400px)' },
    closeButton: { control: 'boolean', description: 'Mostrar o no el botón de cerrar (X)' },
    closeButtonPosition: { control: 'radio', options: ['left', 'right'], description: 'Posición del botón de cierre (izquierda o derecha)' },
    label: { control: 'text', description: 'Texto para el botón dentro del modal' },
  },
};

export default meta;

type Story = StoryObj<StorybookFomentoDialog>;

// Definición de la historia por defecto
export const Default: Story = { 
  args: {
    width: '65%',
    height: '80%',
    closeButton: true,
    closeButtonPosition: 'right',
    label: 'Cerrar modal',
  },
  render: (args) => ({
    component: StorybookFomentoDialog,
    props: args,
  }),
};

export const SmallSizeDialog: Story = { 
  args: {
    width: '40%',
    height: '50%',
    closeButton: true,
    label: 'Cerrar',
  },
  render: (args) => ({
    component: StorybookFomentoDialog,
    props: args,
  }),
};
export const NoCloseButton: Story = { 
  args: {
    width: '65%',
    height: '80%',
    closeButton: false, // Oculta el botón de cierre
    label: 'Cerrar modal',
  },
  render: (args) => ({
    component: StorybookFomentoDialog,
    props: args,
  }),
};
export const CustomLabelDialog: Story = { 
  args: {
    width: '65%',
    height: '80%',
    closeButton: true,
    label: 'Salir',
  },
  render: (args) => ({
    component: StorybookFomentoDialog,
    props: args,
  }),
};
export const FullScreenDialog: Story = { 
  args: {
    width: '100vw',
    height: '100vh',
    closeButton: true,
    label: 'Cerrar',
  },
  render: (args) => ({
    component: StorybookFomentoDialog,
    props: args,
  }),
};
