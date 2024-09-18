import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Constants } from 'src/app/config/constants';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-ejemplo-fomento-datagrid',
  templateUrl: './ejemplo-fomento-datagrid.component.html',
  styleUrls: ['./ejemplo-fomento-datagrid.component.scss'],
})
export class EjemploFomentoDatagridComponent implements OnDestroy, OnInit {
  @Input() apiContent: string = 'content';
  @Input() tipoTratamiento: string;
  @Input() table_data: any[] = [];

  api_name = 'Listado de ejemplo de formularios';
  table_headers = [
    { header: 'ID', field: 'id', visible: true },
    { header: 'Código', field: 'codigo', visible: true },
    { header: 'Nombre', field: 'nombre', visible: true },
  ];

  idTable = 1;
  actions = true;
  actions_index = -1;
  rowsPerPageOptions = [5, 10, 15];
  listadoAccionesAux = Constants.EJEMPLO_LISTADO_ACCIONES_AUX;
  show_download = true;
  multicheck = true;
  multi_check_label = 'Multiseleccion';
  multi_check_index = -1;
  multi_check_label_col = 'Botón multiselección';
  universal_filter = true;
  filter: 'column' | 'advance' | 'none' = 'advance';
  form = Constants.EJEMPLO_FORMULARIO_TABLA;
  sizePageParam = 'size';
  nPageParam = 'page';
  expansion_form = true;
  show_ayuda = true;
  show_clean = true;
  show_fcolumnas = true;
  id_table = 1;
  id_subsistema = '';
  endpoint: string;
  hostapiPaginator = '';
  endpointPaginator = '';
  hostapiFilter = '';
  endpointFilter = '';
  hostapiSaveFilter = '';
  endpointSaveFilter = '';
  hostapiFiltroUsuarioApi = '';
  endpointFiltroUsuarioApi = '';
  reset_button_form = 'CANCELAR';
  submit_button_form = 'CONFIRMAR';
  showSubmitForm = false;
  showResetForm = false;
  validate_form = false;
  alt_form = false;
  alt_label_form = 'ETIQUETA';
  private subscription: Subscription = new Subscription();
  dataSource = new MatTableDataSource<any>();
  results: any[] = [];
  paginator_length: number = 0;
  pageSize: number = 10;
  pageIndex: number = 0;
  displayedColumns: string[] = this.table_headers.map(header => header.field);
  tipoChurrera = 'c1';
  hostApi = 'http://localhost:8080';
  isLoading = false;
  useGetMethod = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.endpoint = `api/${this.tipoChurrera}/v1/formularios/listbyquerydsl`;
    this.consumeApi();
  }

  consumeApi() {
    this.isLoading = true;
    const page_endpoint = `${this.hostApi}/${this.endpoint}?${this.sizePageParam}=${this.pageSize}&${this.nPageParam}=${this.pageIndex}`;

    const apiCall = this.useGetMethod
      ? this.http.get<any>(page_endpoint, { observe: 'response' })
      : this.http.post<any>(page_endpoint, {}, { observe: 'response' });

    const subscription = apiCall.subscribe({
      next: (response: HttpResponse<any>) => {
        const data = response.body;
        const headers = response.headers;
        this.isLoading = false;

        // Asignar los datos
        this.dataSource.data = Array.isArray(data) ? data : [data];
        this.table_data = this.dataSource.data;

        // Obtener la paginación
        this.paginator_length = Number(headers.get('X-Total-Count')) || this.dataSource.data.length;
      },
      error: (err) => {
        console.error('Error en consumeApi:', err);
        this.dataSource.data = [];
        this.table_data = [];
        this.isLoading = false;
      }
    });

    this.subscription.add(subscription);
  }

  changePage(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.consumeApi();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  descargar(datosTabla: any) {
    console.log('DESCARGAR TABLA: ', datosTabla);
  }

  iconoAyuda() {
    console.log('BOTÓN DE AYUDA FUNCIONA CORRECTAMENTE');
  }

  check(datosSeleccionados: any) {
    console.log('LAS LÍNEAS SELECCIONADAS SON: ', datosSeleccionados);
  }
}
