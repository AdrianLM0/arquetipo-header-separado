import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, Injectable } from '@angular/core';
import { FomentoDatagridComponent } from './fomento.datagrid.component';

// Importar módulos de Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

// Importar componentes personalizados y sus módulos
import { FomentoCheckboxComponent } from '../fomento.checkbox/fomento.checkbox.component';
import { FomentoButtonComponent } from '../fomento.button/fomento.button.component';
import { FomentoPaginatorComponent } from '../fomento.paginator/fomento.paginator.component';
import { FomentoSelectComponent } from '../fomento.select/fomento.select.component';
import { FomentoTooltipComponent } from '../fomento.tooltip/fomento.tooltip.component';
import { FomentoFiltroColumnasTablaComponent } from '../fomento.filtro-columnas-tabla/fomento.filtro-columnas-tabla.component';
import { FomentoFormularioComponent } from '../fomento.formulario/fomento.formulario.component';

// Importar módulos necesarios para los componentes personalizados
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Importar servicios y utilidades
import { ApiEndpointsService, RequestApiService, FomentoGestionFiltrosService } from '@fomento/i-rf-logic-component-node-lib';
import { Observable, of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GestionTokenService } from '@fomento/i-rf-security-component-node-lib';

@Component({
  selector: 'storybook-fomento-datagrid-wrapper',
  template: `
    <div class="flex-container" style="padding: 20px;">
      <div class="item">
        <h2 class="title">{{ name }}</h2>
      </div>
      <div class="flex-container">
        <lib-fomento-datagrid
          [name]="name"
          [table_headers]="table_headers"
          [table_data]="table_data"
          [filter]="filter"
          [show_download]="show_download"
          [show_clean]="show_clean"
          [show_fcolumnas]="show_fcolumnas"
          [show_ayuda]="show_ayuda"
          [multicheck]="multicheck"
          [showMulti]="showMulti"
          [universal_filter]="universal_filter"
          [pageSize]="pageSize"
          [pageIndex]="pageIndex"
          [length]="paginator_length"
          [paginator_version]="paginator_version"
          [actions]="actions"
          [show_actions]="show_actions"
          [form]="form"
          [expansion_form]="expansion_form"
          [rowsPerPageOptions]="rowsPerPageOptions"
          (selectionChange)="onSelectionChange($event)"
          (page)="changePage($event)"
        ></lib-fomento-datagrid>
      </div>
    </div>
  `,
})
class StorybookFomentoDatagridWrapper {
  name = 'Ejemplo de DataGrid';
  table_headers = [
    { header: 'ID', field: 'id', visible: true },
    { header: 'Nombre', field: 'nombre', visible: true },
    { header: 'Descripción', field: 'descripcion', visible: true },
  ];
  table_data = [
    { id: 1, nombre: 'Elemento 1', descripcion: 'Descripción del elemento 1' },
    { id: 2, nombre: 'Elemento 2', descripcion: 'Descripción del elemento 2' },
    { id: 3, nombre: 'Elemento 3', descripcion: 'Descripción del elemento 3' },
    { id: 4, nombre: 'Elemento 4', descripcion: 'Descripción del elemento 4' },
    { id: 5, nombre: 'Elemento 5', descripcion: 'Descripción del elemento 5' },
    { id: 6, nombre: 'Elemento 6', descripcion: 'Descripción del elemento 6' },
    { id: 7, nombre: 'Elemento 7', descripcion: 'Descripción del elemento 7' },
    { id: 8, nombre: 'Elemento 8', descripcion: 'Descripción del elemento 8' },
  ];
  
  filter = 'none';
  show_download = true;
  show_clean = true;
  show_fcolumnas = true;
  show_ayuda = true;
  multicheck = true;
  showMulti = true;
  universal_filter = false;
  pageSize = 5;
  pageIndex = 0;
  paginator_length = 3;
  paginator_version = 'api';
  actions = true;
  show_actions = true;
  form = null; // Proporciona una configuración de formulario si es necesario
  expansion_form = false;
  rowsPerPageOptions = [5, 10, 15];

  onSelectionChange(selectedRows: any[]) {
    console.log('Filas seleccionadas:', selectedRows);
  }

  changePage(event: any) {
    console.log('Página cambiada:', event);
  }
}

// Mocks de los servicios
@Injectable()
class MockApiEndpointsService {
  createUrl(hostApi: string, endpoint: string): string {
    return `${hostApi}/${endpoint}`;
  }

  createUrlWithQueryParameters(hostApi: string, endpoint: string, params: any): string {
    return `${hostApi}/${endpoint}`;
  }
}
@Injectable()
class MockRequestApiService {
  get(url: string): Observable<any> {
    // Retorna datos simulados
    return of({ data: [] });
  }

  post(url: string, body: any): Observable<any> {
    // Retorna datos simulados
    return of({ data: [] });
  }
}
@Injectable()
class MockFomentoGestionFiltrosService {
  constructor(private apiEndpoints: ApiEndpointsService) {}

  obtenerFiltrosGuardados(hostApi: string, endpoint: string): Observable<any> {
    // Retorna datos simulados
    return of([]);
  }

  guardarFiltro(hostApi: string, endpoint: string, filtro: any): Observable<any> {
    // Retorna datos simulados
    return of({});
  }
}
@Injectable()
class MockKeycloakService {
  init(): Promise<boolean> {
    return Promise.resolve(true);
  }

  isLoggedIn(): Promise<boolean> {
    return Promise.resolve(true);
  }

  login(): Promise<void> {
    return Promise.resolve();
  }

  logout(): Promise<void> {
    return Promise.resolve();
  }

  getToken(): Promise<string> {
    return Promise.resolve('mock-token');
  }

  loadUserProfile(): Promise<any> {
    return Promise.resolve({ name: 'Mock User', email: 'mock@user.com' });
  }
}
@Injectable()
class MockGestionTokenService {
  constructor(private keycloakService: MockKeycloakService) {}

  getToken(): Observable<string> {
    return of('mock-token');
  }

  refreshToken(): Observable<string> {
    return of('refreshed-mock-token');
  }
}


const meta: Meta<StorybookFomentoDatagridWrapper> = {
  title: 'Plantillas/FomentoDatagrid',
  component: StorybookFomentoDatagridWrapper,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [
        FomentoDatagridComponent,
        StorybookFomentoDatagridWrapper,
        FomentoCheckboxComponent,
        FomentoButtonComponent,
        FomentoPaginatorComponent,
        FomentoSelectComponent,
        FomentoTooltipComponent,
        FomentoFiltroColumnasTablaComponent,
        FomentoFormularioComponent,
      ],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatSelectModule,
        MatDialogModule,
        HttpClientTestingModule,
      ],
      providers: [
        { provide: ApiEndpointsService, useClass: MockApiEndpointsService },
        { provide: RequestApiService, useClass: MockRequestApiService },
        { provide: FomentoGestionFiltrosService, useClass: MockFomentoGestionFiltrosService },
        { provide: MockKeycloakService, useClass: MockKeycloakService },
        { provide: GestionTokenService, useClass: MockGestionTokenService },
      ],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'El componente `FomentoDatagridComponent` es una tabla de datos con funcionalidades avanzadas como paginación, ordenamiento, filtros y selección múltiple.',
      },
    },
  },
  argTypes: {
    // Definir argTypes si deseas controlar las propiedades desde el panel de Storybook
  },
};

export default meta;

type Story = StoryObj<StorybookFomentoDatagridWrapper>;

export const Default: Story = {
  args: {
    name: 'Ejemplo de DataGrid',
    table_headers: [
      { header: 'ID', field: 'id', visible: true },
      { header: 'Nombre', field: 'nombre', visible: true },
      { header: 'Descripción', field: 'descripcion', visible: true },
    ],
    table_data: [
      { id: 1, nombre: 'Elemento 1', descripcion: 'Descripción del elemento 1' },
      { id: 2, nombre: 'Elemento 2', descripcion: 'Descripción del elemento 2' },
      { id: 3, nombre: 'Elemento 3', descripcion: 'Descripción del elemento 3' },
      { id: 4, nombre: 'Elemento 4', descripcion: 'Descripción del elemento 4' },
    ],
    filter: 'none',
    show_download: true,
    show_clean: true,
    show_fcolumnas: true,
    show_ayuda: true,
    multicheck: true,
    showMulti: true,
    universal_filter: false,
    pageSize: 5,
    pageIndex: 0,
    paginator_length: 4,
    paginator_version: 'json',
    actions: true,
    show_actions: true,
    form: null,
    expansion_form: false,
    rowsPerPageOptions: [5, 10, 15],
  },
  argTypes: {
    table_headers: {
      control: 'object',
      description: 'Define las columnas visibles en la tabla.',
    },
    table_data: {
      control: 'object',
      description: 'Define los datos que se mostrarán en la tabla.',
    },
    filter: {
      control: { type: 'select' },
      options: ['none', 'global', 'column'],
      description: 'Define el tipo de filtro que se aplica en la tabla.',
    },
    show_download: {
      control: 'boolean',
      description: 'Muestra u oculta el botón de descarga.',
    },
    show_clean: {
      control: 'boolean',
      description: 'Muestra u oculta el botón de limpiar filtros.',
    },
    pageSize: {
      control: { type: 'number', min: 1 },
      description: 'Cantidad de filas por página en la paginación.',
    },
    paginator_length: {
      control: { type: 'number', min: 0 },
      description: 'Número total de filas en la tabla.',
    },
    actions: {
      control: 'boolean',
      description: 'Define si se muestran las acciones en la tabla.',
    },
  },
  render: (args) => ({
    props: args,
  }),
  parameters: {
    docs: {
      source: {
        code: `
          <lib-fomento-datagrid
            [name]="name"
            [table_headers]="table_headers"
            [table_data]="table_data"
            [filter]="filter"
            [show_download]="show_download"
            [show_clean]="show_clean"
            [show_fcolumnas]="show_fcolumnas"
            [show_ayuda]="show_ayuda"
            [multicheck]="multicheck"
            [showMulti]="showMulti"
            [universal_filter]="universal_filter"
            [pageSize]="pageSize"
            [pageIndex]="pageIndex"
            [length]="paginator_length"
            [paginator_version]="paginator_version"
            [actions]="actions"
            [show_actions]="show_actions"
            (selectionChange)="onSelectionChange($event)"
            (page)="changePage($event)"
          ></lib-fomento-datagrid>
        `,
      },
    },
  },
};
