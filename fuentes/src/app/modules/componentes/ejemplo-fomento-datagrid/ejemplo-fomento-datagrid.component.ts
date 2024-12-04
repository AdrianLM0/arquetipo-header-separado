import { Component, OnDestroy, OnInit, Input, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Constants } from 'src/app/config/constants';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiEndpointsService, RequestApiService } from '@fomento/i-rf-logic-component-node-lib';
import { FomentoDatagridComponent, FomentoFormularioComponent } from '@fomento/i-rf-web-component-node-lib';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'app-ejemplo-fomento-datagrid',
  templateUrl: './ejemplo-fomento-datagrid.component.html',
  styleUrls: ['./ejemplo-fomento-datagrid.component.scss'],
})
export class EjemploFomentoDatagridComponent implements OnDestroy, OnInit {

  @ViewChild(FomentoDatagridComponent) fomentoDatagrid: FomentoDatagridComponent;

  @Input() apiContent: string = 'content';
  @Input() tipoTratamiento: string;
  @Input() table_data: any[] = [];

  api_name = 'Listado de ejemplo de formularios';
  table_headers = [
    { header: 'ID', field: 'id', visible: true },
    { header: 'Código', field: 'codigo', visible: true },
    { header: 'Nombre', field: 'nombre', visible: true },
    { header: 'Descripcion', field: 'descripcion', visible: true },
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
  //Variables de multicheck
  showMulti = true;
  multicheck = true;
  multi_check_index = 0; // Para que la columna de selección sea la primera
  multi_check_label = 'Seleccionar todos';
  multi_check_label_col = '';
  multicheck_icono = 'check-circle';
	multi_check_arialabel_col = 'Seleccionar todas las filas';
	multi_check_arialabel_row = "'Seleccionar fila con ID ' + data.id"


  pageSize: number = 4;
  pageIndex: number = 0;
  tipoChurrera = 'c1';
  hostApi = 'http://localhost:8080';

  // Variables para almacenar los valores de los inputs
  codigoValue: string = '';
  nombreValue: string = '';
  showBotonera = true;
  formu: FormGroup;
  endpointUrl: string;

  miLabelPersonalizado = 'Filtrar Columnas';
  miAppearancePersonalizado: MatFormFieldAppearance = 'outline';
  miPlaceholderPersonalizado = 'Selecciona columnas';
  miEnableSearchPersonalizado = true;

  helpButtonAriaLabel = '¿Necesitas ayuda?';
	globalFilterLabel = 'Buscar en todos los campos'; 
	dialogTitle = 'Título personalizado para el diálogo'; 

  constructor(
    private fb: FormBuilder,
    private apiEndpoints: ApiEndpointsService
  ) { }


  ngOnInit(): void {
    this.changeSize();
    this.endpoint = 'api/' + this.tipoChurrera + '/v1/formularios/listbyquerydsl';
    this.initializeForm();
    this.endpointUrl = this.apiEndpoints.createUrl('http://localhost:8080', 'api/c1/v1/formularios/create');
  }

  ngAfterViewInit() {
      const formulario = this.fomentoDatagrid.getFormularioComponent();
        formulario.formDataEvent.subscribe((formData) => {
          this.handleFormData(formData);
        });
  }


  crearBody(formData: any): any {
    // Extraer los valores del formulario de manera dinámica
    const { codigo, nombre } = formData;
    // Construir el objeto body con los valores del formulario y otros datos adicionales
    const body = {
      codigo: codigo,
      nombre: nombre,
      descripcion: 'Descripción generada en EjemploFomentoDatagridComponent', // Ejemplo de un valor adicional estático
      borrado: 0, // Otro valor estático o dinámico si se requiere
      // Puedes añadir más campos aquí según sea necesario
    };
    return body;
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
  handleFormData(formData: any): void {
    const body = this.crearBody(formData);
    // Verificamos si `fomentoDatagrid` existe y si contiene un formulario
    if (this.fomentoDatagrid && this.fomentoDatagrid.getFormularioComponent()) {
      const formulario = this.fomentoDatagrid.getFormularioComponent();
      formulario.guardarFormulario(body);

    } else {
console.error('No existe un formulario')
    }
  }
  changeSize() {
    this.sizePageParam = this.tipoChurrera === 'c1' ? 'size' : 'pageSize';
  }

  changePage(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onSelectionChange(selectedRows: any[]) {
    console.log('Filas seleccionadas:', selectedRows);
    // Puedes realizar otras acciones con los datos seleccionados aquí
  }
  
}
