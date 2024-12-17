// filtro-columnas-tabla.stories.ts

import { Meta, Story } from '@storybook/angular';
import { FomentoFiltroColumnasTablaComponent } from './fomento.filtro-columnas-tabla.component';
import { moduleMetadata } from '@storybook/angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

export default {
  title: 'Components/Filtro Columnas Tabla',
  component: FomentoFiltroColumnasTablaComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
        MatTableModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        NgxMatSelectSearchModule,
        MatOptionModule,
      ],
    }),
  ],
  argTypes: {
    appearance: {
      control: { type: 'select' },
      options: ['legacy', 'standard', 'fill', 'outline'],
      description: 'Establece la apariencia visual del campo de formulario.',
    },
    label: {
      control: 'text',
      description: 'Etiqueta que aparece encima del selector.',
    },
    placeholder: {
      control: 'text',
      description: 'Texto que aparece como placeholder en el selector.',
    },
    enableSearch: {
      control: 'boolean',
      description: 'Muestra u oculta el campo de búsqueda dentro del selector.',
    },
    columns: {
      control: 'object',
      description: 'Lista de columnas disponibles para filtrar y su estado de visibilidad.',
    },
    dataSource: {
      control: 'object',
      description: 'Conjunto de datos que se muestran en la tabla.',
    },
  },
} as Meta<FomentoFiltroColumnasTablaComponent>;

const Template: Story<FomentoFiltroColumnasTablaComponent> = (args) => ({
  props: args,
  template: `
    <div style="padding: 20px;">
      <lib-fomento-filtro-columnas-tabla
        [columns]="columns"
        [appearance]="appearance"
        [label]="label"
        [placeholder]="placeholder"
        [enableSearch]="enableSearch"
        #filtroColumnas>
      </lib-fomento-filtro-columnas-tabla>

      <br />

      <table mat-table [dataSource]="dataSource" class="mat-elevation-z8" aria-label="Table">
        <ng-container *ngFor="let column of filtroColumnas.columns" [matColumnDef]="column.field">
          <th mat-header-cell *matHeaderCellDef>{{ column.header }}</th>
          <td mat-cell *matCellDef="let element">{{ element[column.field] }}</td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="filtroColumnas.displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: filtroColumnas.displayedColumns"></tr>
      </table>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  columns: [
    { header: 'Código', field: 'codigo', visible: true },
    { header: 'Nombre', field: 'nombre', visible: true },
    { header: 'Descripción', field: 'descripcion', visible: true },
    { header: 'Fecha Creación', field: 'audAlta', visible: true },
    { header: 'Usuario Modificación', field: 'usuModifica', visible: true },
  ],
  dataSource: [
    {
      codigo: '001',
      nombre: 'Elemento 1',
      descripcion: 'Descripción del elemento 1',
      audAlta: '2021-01-01',
      usuModifica: 'Usuario1',
    },
    {
      codigo: '002',
      nombre: 'Elemento 2',
      descripcion: 'Descripción del elemento 2',
      audAlta: '2021-02-01',
      usuModifica: 'Usuario2',
    },
    {
      codigo: '003',
      nombre: 'Elemento 3',
      descripcion: 'Descripción del elemento 3',
      audAlta: '2021-03-01',
      usuModifica: 'Usuario3',
    },
  ],
  label: '',
  placeholder: 'Seleccione columnas',
  appearance: 'outline',
  enableSearch: false,
};
