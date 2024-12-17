import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FomentoButtonToggleComponent } from './fomento.button-toggle.component';

const meta: Meta<FomentoButtonToggleComponent> = {
    title: 'Components/ButtonToggle',
    component: FomentoButtonToggleComponent,
    tags: ['autodocs'],
    parameters: { 
        docs: {
            description: {
                component: 'Componente button-toggle que permite seleccionar opciones individuales o múltiples mediante botones de alternancia.',
            },
        },
    },
    decorators: [
        moduleMetadata({
            declarations: [FomentoButtonToggleComponent],
            imports: [
                BrowserAnimationsModule,
                MatButtonToggleModule,
                // Agrega otros módulos necesarios
            ]
        })
    ],
    argTypes: {
        appearance: {
            control: 'select',
            options: ['standard', 'legacy'],
            description: 'Estilo de apariencia del grupo de botones de alternancia.',
        },
        label: {
            control: 'text',
            description: 'Etiqueta descriptiva para accesibilidad.',
        },
        disabled: {
            control: 'boolean',
            description: 'Deshabilita el grupo de botones si es verdadero.',
        },
        ariaLabel: {
            control: 'text',
            description: 'Etiqueta aria para accesibilidad.',
        },
        ariaLabelledby: {
            control: 'text',
            description: 'ID del elemento que etiqueta el grupo de botones.',
        },
        checked: {
            control: 'boolean',
            description: 'Indica si un botón de alternancia está seleccionado por defecto.',
        },
        disableRipple: {
            control: 'boolean',
            description: 'Desactiva el efecto de onda en los botones si es verdadero.',
        },
        id: {
            control: 'text',
            description: 'Identificador único para el componente.',
        },
        value: {
            control: 'text',
            description: 'Valor asignado al grupo de botones.',
        },
        name: {
            control: 'text',
            description: 'Nombre del atributo para el grupo de botones.',
        },
        multiple: {
            control: 'boolean',
            description: 'Permite selección múltiple si es verdadero.',
        },
        vertical: {
            control: 'boolean',
            description: 'Muestra los botones en orientación vertical si es verdadero.',
        },
        toggleGroup: {
            control: 'object',
            description: 'Array de configuraciones de botones de alternancia con etiquetas y atributos.',
            defaultValue: [
                { disabled: false, ariaLabel: 'Opción 1', ariaLabelledby: null, checked: false, disableRipple: false, id: 'toggle1', value: '1', name: 'grupo1', label: 'Opción 1' },
                { disabled: false, ariaLabel: 'Opción 2', ariaLabelledby: null, checked: false, disableRipple: false, id: 'toggle2', value: '2', name: 'grupo1', label: 'Opción 2' },
            ]
        },
        onclickevent: { action: 'clicked', description: 'Evento emitido cuando se hace clic en una opción del botón de alternancia' },
    },
};

export default meta;

type Story = StoryObj<FomentoButtonToggleComponent>;

export const Default: Story = {
    args: {
        appearance: 'standard',
        label: 'Seleccione una opción',
        disabled: false,
        multiple: false,
        vertical: false,
        toggleGroup: [
            { disabled: false, ariaLabel: 'Opción 1', ariaLabelledby: null, checked: false, disabledRipple: false, id: 'toggle1', value: '1', name: 'grupo1', label: 'Opción 1' },
            { disabled: false, ariaLabel: 'Opción 2', ariaLabelledby: null, checked: false, disabledRipple: false, id: 'toggle2', value: '2', name: 'grupo1', label: 'Opción 2' },
        ],
    },
};

export const Disabled: Story = {
    args: {
        appearance: 'standard',
        label: 'Seleccione una opción',
        disabled: true,
        multiple: false,
        vertical: false,
        toggleGroup: [
            { disabled: false, ariaLabel: 'Opción 1', ariaLabelledby: null, checked: false, disabledRipple: false, id: 'toggle1', value: '1', name: 'grupo1', label: 'Opción 1' },
            { disabled: false, ariaLabel: 'Opción 2', ariaLabelledby: null, checked: false, disabledRipple: false, id: 'toggle2', value: '2', name: 'grupo1', label: 'Opción 2' },
        ],
    },
};
