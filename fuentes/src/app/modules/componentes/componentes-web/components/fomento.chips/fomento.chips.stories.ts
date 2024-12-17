import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { FomentoChipsComponent } from './fomento.chips.component';

const meta: Meta<FomentoChipsComponent> = {
    title: 'Components/Chips',
    component: FomentoChipsComponent,
    tags: ['autodocs'],
    parameters: { 
        docs: {
            description: {
              component:
                'El componente chips permite mostrar etiquetas o elementos visuales con un estilo de chip en Angular.',
            },
          },
     },
    argTypes: {
        color: {
            control: 'select',
            options: ['primary', 'accent', 'warn'],
            description: 'Define el color del chip. Los valores permitidos son: `primary`, `accent`, `warn`.',
        },
        disabled: {
            control: 'boolean',
            description: 'Deshabilita el chip si es `true`.',
        },
        selected: {
            control: 'boolean',
            description: 'Determina si el chip está seleccionado inicialmente.',
        },
        ariaLabel: {
            control: 'text',
            description: 'Etiqueta accesible para describir el contenido del chip.',
        },
        ariaDescription: {
            control: 'text',
            description: 'Descripción accesible para describir el contenido del chip.',
        },
        chips: {
            control: 'object',
            description: 'Array de chips a mostrar.',
            defaultValue: [
                { label: 'Chip 1', value: 'chip1', color: 'primary', selected: true },
                { label: 'Chip 2', value: 'chip2', color: 'accent', selected: false },
                { label: 'Chip 3', value: 'chip3', color: 'warn', disabled: true },
            ],
        },
    },
    decorators: [
        moduleMetadata({
            declarations: [FomentoChipsComponent],
            imports: [ 
                BrowserAnimationsModule,
                MatChipsModule
            ]
        })
    ]
};

export default meta;

type Story = StoryObj<FomentoChipsComponent>;

export const Default: Story = {
    args: {
        chips: [
            { label: 'Chip 1', value: 'chip1', color: 'primary', selected: true, ariaLabel: 'Etiqueta de ejemplo Default 1', ariaDescription: 'Descripción de ejemplo Default 1'},
            { label: 'Chip 2', value: 'chip2', color: 'accent', selected: false, ariaLabel: 'Etiqueta de ejemplo Default 2', ariaDescription: 'Descripción de ejemplo Default 2'},
            { label: 'Chip 3', value: 'chip3', color: 'warn', selected: false, ariaLabel: 'Etiqueta de ejemplo Default 3', ariaDescription: 'Descripción de ejemplo Default 3'},
        ],
    },
};

export const Disabled: Story = {
    args: {
        chips: [
            { label: 'Chip 1', value: 'chip1', disabled: true, color: 'primary', selected: true, ariaLabel: 'Etiqueta de ejemplo Disabled 1', ariaDescription: 'Descripción de ejemplo Disabled 1'},
            { label: 'Chip 2', value: 'chip2', disabled: true, color: 'accent', selected: false, ariaLabel: 'Etiqueta de ejemplo Disabled 2', ariaDescription: 'Descripción de ejemplo Disabled 2'},
            { label: 'Chip 3', value: 'chip3', disabled: true, color: 'warn', selected: false, ariaLabel: 'Etiqueta de ejemplo Disabled 3', ariaDescription: 'Descripción de ejemplo Disabled 3'},
        ],
    },
};
