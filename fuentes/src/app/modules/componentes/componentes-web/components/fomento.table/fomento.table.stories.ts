import { moduleMetadata, Meta, StoryObj } from '@storybook/angular'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { FomentoTableComponent } from './fomento.table.component';
import { FomentoPaginatorComponent } from '../fomento.paginator/fomento.paginator.component';

const meta: Meta<FomentoTableComponent> = { 
    title: 'Components/Table',
    component: FomentoTableComponent, 
    tags: ['autodocs'],
    parameters: { 
        docs: {
            description: {
                component: '`lib-fomento-table` es un componente de tabla personalizable que permite visualizar y gestionar datos en formato tabular con opciones de ordenación y descripción accesible.',
            },
        },
    },
    decorators: [
        moduleMetadata({
            declarations: [FomentoTableComponent, FomentoPaginatorComponent],
            imports: [
                BrowserAnimationsModule,
                MatTableModule,
                MatSortModule,
            ],
        }),
    ],
    argTypes: { 
        element_data: {
            control: 'object',
            description: 'Datos que se mostrarán en la tabla.',
            defaultValue: [],
        },
        initColumns: {
            control: 'object',
            description: 'Define las columnas iniciales que se mostrarán en la tabla.',
            defaultValue: [],
        },
        isLoading: {
            control: 'boolean',
            description: 'Indicador de carga de datos. Cuando es `true`, muestra un indicador de carga en la tabla.',
            defaultValue: false,
        },
        tableDescription: {
            control: 'text',
            description: 'Descripción accesible para la tabla, utilizada por lectores de pantalla.',
            defaultValue: 'Tabla de ejemplo con datos mockeados.',
        },
    }, 
};

export default meta; 

type Story = StoryObj<FomentoTableComponent>;

// Ejemplo Default
export const Default: Story = { 
    args: { 
        element_data: [
            { id: 'C001', client: 'John Doe', purchases: 5, totalSpent: 500, lastVisit: '2024-07-01' },
            { id: 'C002', client: 'Jane Smith', purchases: 3, totalSpent: 300, lastVisit: '2024-07-02' },
            { id: 'C003', client: 'Michael Brown', purchases: 7, totalSpent: 700, lastVisit: '2024-07-03' },
            { id: 'C004', client: 'Emily Davis', purchases: 2, totalSpent: 200, lastVisit: '2024-07-04' },
            { id: 'C005', client: 'Chris Wilson', purchases: 6, totalSpent: 600, lastVisit: '2024-07-05' },
        ],
        initColumns: [
            { id: 'id', name: 'ID' },
            { id: 'client', name: 'Cliente' },
            { id: 'purchases', name: 'Compras' },
            { id: 'totalSpent', name: 'Total Gastado' },
            { id: 'lastVisit', name: 'Última Visita' },
        ],
        isLoading: false,
        tableDescription: 'Esta tabla muestra datos de clientes incluyendo ID, nombre, compras y total gastado.',
    },
};

// Ejemplo Loading
export const Loading: Story = {
    args: {
        ...Default.args,
        isLoading: true,
    },
};

// Ejemplo EmptyData
export const EmptyData: Story = {
    args: {
        ...Default.args,
        element_data: [],
        initColumns: [
            { id: 'project', name: 'Proyecto' },
            { id: 'manager', name: 'Gestor' },
            { id: 'budget', name: 'Presupuesto' },
        ],
        tableDescription: 'Esta tabla actualmente no contiene datos.',
    },
};

// Ejemplo CustomColumns
export const CustomColumns: Story = {
    args: {
        element_data: [
            { orderId: 'O101', product: 'Headphones', quantity: 2, price: 150, date: '2024-06-01', status: 'Shipped' },
            { orderId: 'O102', product: 'Keyboard', quantity: 1, price: 50, date: '2024-06-02', status: 'Processing' },
            { orderId: 'O103', product: 'Mouse', quantity: 3, price: 25, date: '2024-06-03', status: 'Delivered' },
            { orderId: 'O104', product: 'Webcam', quantity: 4, price: 75, date: '2024-06-04', status: 'Cancelled' },
            { orderId: 'O105', product: 'Monitor', quantity: 1, price: 200, date: '2024-06-05', status: 'Shipped' },
            { orderId: 'O106', product: 'Laptop Stand', quantity: 2, price: 40, date: '2024-06-06', status: 'Delivered' },
        ],
        initColumns: [
            { id: 'orderId', name: 'ID de Pedido' },
            { id: 'product', name: 'Producto' },
            { id: 'quantity', name: 'Cantidad' },
            { id: 'price', name: 'Precio' },
            { id: 'date', name: 'Fecha' },
            { id: 'status', name: 'Estado' },
        ],
        isLoading: false,
        tableDescription: 'Tabla personalizada con datos de pedidos.',
    },
};
