import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { FomentoSelectComponent } from './fomento.select.component';
import '!style-loader!css-loader!sass-loader!./fomento.select.component.scss';

const meta: Meta<FomentoSelectComponent> = {
    title: 'Components/Select',
    component: FomentoSelectComponent,
    tags: ['autodocs'],
    parameters: { 
        docs: {
            description: {
              component:
                'El componente select consiste en un asistente de pasos.',
            },
          },
     },
    argTypes: {
        label: { control: 'text', description: 'Etiqueta descriptiva que se colocará encima del selector' },
        disabled: { control: 'boolean', description: 'Permite deshabilitar el funcionamiento de un selector  ' },
        default: { control: 'text', description: 'La opción que aparece por defecto, antes de seleccionar alguna otra del selector' },
        data: {
            control: 'object',
            description: ' Lista de opciones que podrán seleccionarse en el selector',
            defaultValue: [
                { value: 'emperador', description: 'Pingüino emperador' },
                { value: 'papua', description: 'Pingüino Papúa' },
                { value: 'galapagos', description: 'Pingüino de las Galápagos' },
            ],
        },
        selected: { control: 'text', description: 'Opción seleccionada actualmente' },
        changeOptionAction: { action: 'changed', description: 'Evento emitido cuando cambia la opción seleccionada' },
    },
    decorators: [
        moduleMetadata({
            declarations: [FomentoSelectComponent],
            imports: [ 
                BrowserAnimationsModule,
                MatFormFieldModule,
                MatSelectModule,]
        })
    ]
};

export default meta;

type Story = StoryObj<FomentoSelectComponent>;

export const Default: Story = {
    args: {
        label: 'Elija una opción',
        disabled: false,
        default: '- Elija una opción -',
        data: [
            { value: 'emperador', description: 'Pingüino emperador' },
            { value: 'papua', description: 'Pingüino Papúa' },
            { value: 'galapagos', description: 'Pingüino de las Galápagos' },
        ],
        selected: 'emperador',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Elija una opción',
        disabled: true,
        default: '- Elija una opción -',
        data: [
            { value: 'emperador', description: 'Pingüino emperador' },
            { value: 'papua', description: 'Pingüino Papúa' },
            { value: 'galapagos', description: 'Pingüino de las Galápagos' },
        ],
        selected: 'emperador',
    },
};
