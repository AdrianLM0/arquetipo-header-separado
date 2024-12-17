import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FomentoPaginatorComponent } from './fomento.paginator.component';
import '!style-loader!css-loader!sass-loader!./fomento.paginator.component.scss';
import { FomentoButtonComponent } from '../fomento.button/fomento.button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

const meta: Meta<FomentoPaginatorComponent> = {
    title: 'Components/Paginator',
    component: FomentoPaginatorComponent,
    tags: ['autodocs'],
    parameters: { 
        docs: {
            description: {
              component:
                'El componente paginador permite navegar entre diferentes páginas de resultados.',
            },
        },
    },
    argTypes: {
        length: { control: 'number', description: 'Número total de elementos paginables' },
        pageSize: { control: 'number', description: 'Número de elementos por página' },
        pageIndex: { control: 'number', description: 'Índice de la página actual, empieza en 0' },
        pageSizeOptions: { control: 'array', description: 'Opciones de tamaño de página disponibles' },
    },
    decorators: [
        moduleMetadata({
            declarations: [FomentoPaginatorComponent, FomentoButtonComponent],
            imports: [
                BrowserAnimationsModule,
                MatFormFieldModule,
                MatButtonModule,
                MatSelectModule,
                MatIconModule
            ],
        }),
    ],
};

export default meta;

type Story = StoryObj<FomentoPaginatorComponent>;

export const Default: Story = {
    args: {
        length: 100,
        pageSize: 10,
        pageIndex: 0,
        pageSizeOptions: [5, 10, 20],
    },
};

export const CustomPageSize: Story = {
    args: {
        length: 200,
        pageSize: 20,
        pageIndex: 1,
        pageSizeOptions: [10, 20, 50],
    },
};
