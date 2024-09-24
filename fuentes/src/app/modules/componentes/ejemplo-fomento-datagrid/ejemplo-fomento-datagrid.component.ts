import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
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
  nPageParam = 'page';
  show_download = true;
  multicheck = true;
  multi_check_label = 'Multiseleccion';
  multi_check_index = -1;
  multi_check_label_col = 'Botón multiselección';
  universal_filter = true;
  filter: 'column' | 'advance' | 'none' = 'advance';
  form = Constants.EJEMPLO_FORMULARIO_TABLA;
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
  sizePageParam = 'size';
  showSubmitForm = false;
  showResetForm = false;
  validate_form = false;
  alt_form = false;
  alt_label_form = 'ETIQUETA';
  private subscription: Subscription = new Subscription();
  dataSource = new MatTableDataSource<any>();
  paginator_length: number = 0;
  isLoading = false;
  useGetMethod = true;
  headersTotalElements = 'total-elementos'

  pageSize: number = 4;
  pageIndex: number = 0;
  tipoChurrera = 'c2';
  hostApi = 'http://localhost:8080';


  ngOnInit(): void {
    this.changeSize();
    this.endpoint = 'api/' + this.tipoChurrera + '/v1/versiones';
  }

  changeSize() {
    this.sizePageParam = this.tipoChurrera === 'c1' ? 'size' : 'pageSize';
  }

  descargar(datosTabla: any) {
    console.log('Descargar datos:', datosTabla);

  }

  iconoAyuda() {
    console.log('Icono de ayuda clicado');
  }

  check(datosSeleccionados: any) {
    console.log('Datos seleccionados:', datosSeleccionados);
  }

  changePage(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
