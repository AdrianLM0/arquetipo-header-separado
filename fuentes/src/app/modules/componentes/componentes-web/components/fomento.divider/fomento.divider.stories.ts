import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { FomentoDividerComponent } from './fomento.divider.component';

const meta: Meta<FomentoDividerComponent> = { 
    title: 'Components/Divider', 
    component: FomentoDividerComponent, 
    tags: ['autodocs'],
    parameters: { 
        docs: {
            description: {
                component: 'El componente divider muestra una línea divisoria configurable en color, orientación y estilo de sangría (inset).',
            },
        },
    },
    argTypes: { 
        inset: { control: 'boolean', description: 'Aplica una sangría al divisor desde los bordes del contenedor.' },
        vertical: { control: 'boolean', description: 'Define la orientación del divisor. `true` lo muestra en posición vertical.' },
        color: { control: 'color', description: 'Define el color del divisor.' },
    }, 
    decorators: [
        moduleMetadata({
            declarations: [FomentoDividerComponent],
            imports: [ 
                BrowserAnimationsModule,
                MatDividerModule,
            ],
        }),
    ],
};

export default meta; 

type Story = StoryObj<FomentoDividerComponent>;

export const Default: Story = { 
    args: { 
        inset: false,
        vertical: false,
        color: 'black',  // Color predeterminado
    },
};

export const Inset: Story = { 
    args: { 
        inset: true,
        vertical: false,
        color: 'black', // Color de ejemplo para ver variación
    },
};

export const Vertical: Story = { 
    args: { 
        inset: false,
        vertical: true,
        color: 'black', // Color de ejemplo para ver variación
    },
};