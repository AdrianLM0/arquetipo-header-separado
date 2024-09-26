import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Constants } from 'src/app/config/constants';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiEndpointsService, RequestApiService } from '@fomento/i-rf-logic-component-node-lib';

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
  show_download = true;
  show_ayuda = true;
  show_clean = true;
  actions_index = -1;
  rowsPerPageOptions = [5, 10, 15];
  listadoAccionesAux = Constants.EJEMPLO_LISTADO_ACCIONES_AUX_2;
  nPageParam = 'page';
  multicheck = false;
  multi_check_index = -1;
  multi_check_label = 'Multiseleccion';
  multi_check_label_col = 'Botón multiselección';
  multi_check_type = 'text';
  universal_filter = true;
  filter: 'column' | 'advance' | 'none' = 'advance';
  form = Constants.EJEMPLO_FORMULARIO_TABLA;
  formConfig = Constants.EJEMPLO_FORMULARIO_TABLA;
  expansion_form = true;
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
  submit_button_form = 'GUARDAR';
  sizePageParam = 'size';
  showAuxForm = false; // Botón de filtrar
  showSubmitForm = true;
  showResetForm = false;
  validate_form = false;
  showSelect = true;
  alt_form = true;
  alt_label_form = 'ETIQUETA';
  private subscription: Subscription = new Subscription();
  dataSource = new MatTableDataSource<any>();
  paginator_length: number = 0;
  isLoading = false;
  useGetMethod = true;
  headersTotalElements = 'total-elementos';

  pageSize: number = 4;
  pageIndex: number = 0;
  tipoChurrera = 'c1';
  hostApi = 'http://localhost:8080';

  // Variables para almacenar los valores de los inputs
  codigoValue: string = '';
  nombreValue: string = '';

  formu: FormGroup;

  constructor(
    private fb: FormBuilder,
    private requestApi: RequestApiService,
    private apiEndpoints: ApiEndpointsService
  ) {}
  

  ngOnInit(): void {
    this.changeSize();
    this.endpoint = 'api/' + this.tipoChurrera + '/v1/formularios/listbyquerydsl';
    this.initializeForm();
  }

  initializeForm() {
    // Inicializar el formulario con la estructura de Constants
    this.formu = this.fb.group({});
    this.formConfig.sections.forEach((section) => {
      section.groups.forEach((group) => {
        group.rows.forEach((row) => {
          row.filters.forEach((filter) => {
            this.formu.addControl(filter.formControlName, this.fb.control(''));
          });
        });
      });
    });
  }

  guardarValores(data: any) {
    // Asumiendo que 'data' contiene los valores del formulario
    this.codigoValue = data['codigo'] || '';
    this.nombreValue = data['nombre'] || '';
  
    console.log('Valores guardados:', {
      codigo: this.codigoValue,
      nombre: this.nombreValue,
    });
  
    // Llamar al método para enviar los datos al backend
    this.guardarFormulario();
  }
  
  // Método para enviar los datos al backend
  guardarFormulario() {
    const body = {
      codigo: this.codigoValue,
      nombre: this.nombreValue,
    };
  
    // Crear la URL usando el servicio ApiEndpointsService
    const endpointUrl = this.apiEndpoints.createUrl('http://localhost:8080', 'api/c1/v1/formularios/create');
  
    // Hacer la petición POST usando RequestApiService
    this.requestApi.post(endpointUrl, body).subscribe({
      next: (response) => {
        console.log('Formulario guardado con éxito:', response);
        // Aquí puedes agregar lógica adicional si es necesario, como mostrar un mensaje de éxito
      },
      error: (error) => {
        console.error('Error al guardar el formulario:', error);
      }
    });
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
