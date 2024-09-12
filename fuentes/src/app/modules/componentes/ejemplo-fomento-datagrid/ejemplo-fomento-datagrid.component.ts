import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/config/constants';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ejemplo-fomento-datagrid',
  templateUrl: './ejemplo-fomento-datagrid.component.html',
  styleUrls: ['./ejemplo-fomento-datagrid.component.scss'],
})
export class EjemploFomentoDatagridComponent implements OnDestroy, OnInit {
  @Input() apiContent: string = 'content'; 
  @Input() tipoTratamiento: string; 

  api_name = 'Listado de ejemplo de formularios';
  table_headers = [
    { header: 'id', field: 'id', visible: true },
    { header: 'codigo', field: 'codigo', visible: true }
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
  paginator_length: number;
  displayedColumns: string[] = this.table_headers.map(header => header.field);
  tipoChurrera = 'c1';
  hostApi = 'http://localhost:8080';
  isLoading = false;
  useGetMethod = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.endpoint = `api/${this.tipoChurrera}/v1/formularios/list`;
    this.displayedColumns = this.table_headers.map(header => header.field);
    this.consumeApi();
  }

  consumeApi() {
    this.isLoading = true;
    const page_endpoint = `${this.hostApi}/${this.endpoint}?${this.sizePageParam}=10&${this.nPageParam}=0`;

    const apiCall = this.useGetMethod
      ? this.http.get(page_endpoint)
      : this.http.post(page_endpoint, {});

    const subscription = apiCall.subscribe({
      next: (data: any) => {
        console.log('Datos recibidos:', data);
        this.processApiResponse(data);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error en consumeApi:', err);
        this.dataSource.data = [];
        this.isLoading = false;
      }
    });

    this.subscription.add(subscription);
  }

  private processApiResponse(data: any) {
    if (Array.isArray(data)) {
      this.dataSource.data = data;
      this.paginator_length = data.length;
    } else if (data && typeof data === 'object') {
      if (data.content && Array.isArray(data.content)) {
        this.dataSource.data = data.content;
        this.paginator_length = data.totalElements || data.content.length;
      } else if (this.apiContent && data[this.apiContent]) {
        this.dataSource.data = data[this.apiContent];
        this.paginator_length = data.totalElements || data[this.apiContent].length;
      } else {
        this.dataSource.data = [data];
        this.paginator_length = 1;
      }
    } else {
      this.dataSource.data = [];
      this.paginator_length = 0;
    }

    console.log('Datos procesados:', this.dataSource.data);
    console.log('Longitud del paginador:', this.paginator_length);
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