import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {
  ApiEndpointsService,
  RequestApiService,
  QueryStringParameters,
  FomentoGestionFiltrosService,
} from '@fomento/i-rf-logic-component-node-lib';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DatagridBase } from './fomento.datagrid.base';
import { MatTableDataSource } from '@angular/material/table';
import { GestionTokenService } from '@fomento/i-rf-security-component-node-lib';
import { HttpResponse } from '@angular/common/http';
import { FomentoFormularioComponent } from '../fomento.formulario/fomento.formulario.component';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { TooltipPosition } from '@angular/material/tooltip';


@Component({
  selector: 'lib-fomento-datagrid',
  templateUrl: './fomento.datagrid.component.html',
  styleUrls: ['./fomento.datagrid.component.scss'],
})
export class FomentoDatagridComponent extends DatagridBase implements OnInit {


/* ------------------------------------------------------------------ */
/* Configuración de paginación                                        */
/* ------------------------------------------------------------------ */
@Input() rowsPerPageOptions: number[] = [5, 10, 15, 20]; // Opciones de tamaño de página
@Input() sizePageParam = 'size'; // Nombre del parámetro que define el tamaño de página en la API
@Input() nPageParam = 'page'; // Nombre del parámetro que define el número de página en la API
@Input() pageIndex; // Índice de la página actual
@Input() pageSize; // Número de elementos por página
@Input() tipoChurrera = 'c2'; // Indica si los datos de paginación están en el body ('c1') o en las headers ('c2')
@Input() headersTotalElements = 'total-elementos'; // Nombre del header que contiene el total de elementos


/* ------------------------------------------------------------------ */
/* Configuración de la API                                            */
/* ------------------------------------------------------------------ */
@Input() hostapi = ''; // URL base de la API
@Input() endpoint = ''; // Endpoint específico de la API para obtener datos
@Input() apiContent = 'content'; // Clave en la respuesta de la API que contiene los datos
@Input() hostApiPaginator; // API del paginador
@Input() endpointPaginator; // Endpoint del paginador
@Input() hostApiFilter; // API del filtro
@Input() endpointFilter; // Endpoint del filtro
@Input() hostApiSaveFilter; // API para guardar filtros
@Input() endpointSaveFilter; // Endpoint para guardar filtros
@Input() hostApiFilterUser; // API para recuperar filtros guardados por el usuario
@Input() endpointFilterUser; // Endpoint para recuperar filtros guardados por el usuario
@Input() useGetMethod = false; // Define si el método de la API es GET o POST

/* ------------------------------------------------------------------ */
/* Configuración de la tabla y columnas                               */
/* ------------------------------------------------------------------ */
@Input() filtroColumnasAppearance: MatFormFieldAppearance = 'outline'; // Estilo del campo de filtro de columnas
@Input() filtroColumnasPlaceholder = 'Selecciona columnas'; // Placeholder para el filtro de columnas
@Input() filtroColumnasEnableSearch = true; // Activa o desactiva el buscador en el filtro de columnas
@Input() showMulti = false; // Activa la funcionalidad de selección múltiple
@Input() showBotonera = true; // Define si se muestra la botonera en la tabla

/* ------------------------------------------------------------------ */
/* Configuración del formulario dinámico                              */
/* ------------------------------------------------------------------ */
@Input() id_table; // Identificador único de la tabla
@Input() id_subsistema; // Identificador del subsistema al que pertenece la tabla
@Input() endpointUrl: string; // URL completa del endpoint para cargar datos o filtros dinámicos

/* ------------------------------------------------------------------ */
/* Configuración del selector                                         */
/* ------------------------------------------------------------------ */
@Input() selectData: { value: string; description: string }[] = []; // Opciones disponibles en el selector
@Input() selectLabel: string = 'Seleccione una opción'; // Etiqueta del selector
@Input() selectDisabled: boolean = false; // Define si el selector está deshabilitado
@Input() selectDefault: string = '- Elija una opción -'; // Placeholder predeterminado del selector
@Input() selectAriaLabel: string = 'Filtro avanzado'; // Etiqueta ARIA del selector
@Input() selectIsRequired: boolean = true; // Indica si el selector es obligatorio
@Input() selectReadonly: boolean = false; // Define si el selector es de solo lectura
@Input() selectedOption: string = ''; // Opción actualmente seleccionada en el selector
@Input() selectFormControlName: string = ''; // Nombre del control de formulario asociado al selector
@Input() selectAdditionalDescription: string = ''; // Descripción adicional que aparece debajo del selector
@Input() selectEndpoint: string = ''; // Endpoint asociado para cargar opciones dinámicas del selector
@Output() selectChange = new EventEmitter<string>(); // Emite eventos cuando cambia la selección en el selector
@Output() selectedChange: EventEmitter<string> = new EventEmitter<string>(); // Emite eventos al cambiar la opción seleccionada

/* ------------------------------------------------------------------ */
/* Configuración de botones                                           */
/* ------------------------------------------------------------------ */
@Input() cleanButtonLabel: string = 'Limpiar tabla'; // Etiqueta del botón "Limpiar tabla"
@Input() cleanButtonTheme: string = 'secondary'; // Tema del botón "Limpiar tabla"
@Input() cleanButtonIcon: string = 'trash'; // Icono del botón "Limpiar tabla"
@Input() cleanButtonType: 'button' | 'submit' | 'reset' = 'button'; // Tipo del botón "Limpiar tabla"
@Input() cleanButtonAriaLabel: string = 'Limpiar la tabla de resultados'; // Etiqueta ARIA del botón "Limpiar tabla"
@Input() cleanButtonDisableRipple: boolean = true; // Desactiva el efecto ripple en el botón "Limpiar tabla"
@Input() exportButtonLabel: string = 'Exportar'; // Etiqueta del botón "Exportar"
@Input() exportButtonTheme: string = 'secondary'; // Tema del botón "Exportar"
@Input() exportButtonIcon: string = 'file-download'; // Icono del botón "Exportar"
@Input() exportButtonType: 'button' | 'submit' | 'reset' = 'button'; // Tipo del botón "Exportar"
@Input() exportButtonAriaLabel: string = 'Exportar resultados'; // Etiqueta ARIA del botón "Exportar"
@Input() exportButtonDisableRipple: boolean = true; // Desactiva el efecto ripple en el botón "Exportar"

/* ------------------------------------------------------------------ */
/* Configuración de tooltips                                          */
/* ------------------------------------------------------------------ */
@Input() tooltipPosition: TooltipPosition = 'below'; // Posición del tooltip
@Input() tooltipDelayHide: number = 0; // Tiempo de espera para ocultar el tooltip
@Input() tooltipDelayShow: number = 0; // Tiempo de espera para mostrar el tooltip
@Input() tooltipEnabled: boolean = true; // Define si el tooltip está habilitado
@Input() tooltipAriaLabel: string; // Etiqueta ARIA del tooltip
@Input() tooltipAriaLive: 'off' | 'polite' | 'assertive' = 'polite'; // Comportamiento del tooltip en lectores de pantalla
@Input() tooltipRole: string = 'tooltip'; // Rol del elemento del tooltip
@Input() tooltipTabindex: string = '0'; // Tabindex del tooltip

/* ------------------------------------------------------------------ */
/* Outputs generales del componente                                  */
/* ------------------------------------------------------------------ */
@Output() changeOptionAction: EventEmitter<unknown> = new EventEmitter(); // Emite cambios relacionados con el selector
@Output() page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>(); // Emite cambios de paginación


/***********************************************
 * Declaraciones de propiedades en DatagridComponent
 ***********************************************/

private _selected: string = ''; // Almacena el valor seleccionado en el componente.
universal_filter = false; // Indica si el filtro global por todos los campos de la tabla está activado.
usuario; // Almacena la información del usuario autenticado.
override paginator_version = 'api'; // Especifica si se utiliza paginación basada en API o JSON.
paginator_length = 20; // Número total de elementos para paginación.
isLoading = false; // Indica si la tabla está cargando datos.
results; // Contiene los datos obtenidos de la API después de una solicitud.
error; // Almacena información sobre errores ocurridos durante las solicitudes.
private subscription: Subscription = new Subscription(); // Gestiona las suscripciones de observables para evitar pérdidas de memoria.
filterAdvanceValue: any; // Almacena los valores aplicados en los filtros avanzados.
pageConvertor = 0; // Conversión de índice de página para ciertos ajustes de paginación.
label = ''; // Texto dinámico para etiquetas o títulos en el componente.



  constructor(
    private apiEndpoints: ApiEndpointsService,
    private requestApi: RequestApiService,
    private gestionFiltroService: FomentoGestionFiltrosService,
    public override dialog: MatDialog,
    private gestionTokenService: GestionTokenService
  ) {
    super(dialog);
  }

  ngOnInit(): void {
    this.displayedColumns = this.table_headers
    .filter((header) => header.visible) // Filtra solo las columnas visibles
    .map((header) => header.field); // Extrae los campos de las columnas visibles
    this.dataSource = new MatTableDataSource();
    this.consumeApi(); // Consumir la API al inicializar el componente
   
  }
 
  changeSize(){
    if (this.tipoChurrera === "c1"){
      this.sizePageParam = 'size'
    }
    else{
      this.sizePageParam = 'pageSize'
      this.pageSize += 1;
    }
  }
  /**
   * Método para consumir la API con parámetros de paginación.
   */
  consumeApi() {
    this.isLoading = true;
    let pageIndexForEndpoint = this.tipoChurrera === 'c2' ? this.pageIndex + 1 : this.pageIndex;
    const page_endpoint = `${this.hostapi}/${this.endpoint}?${this.nPageParam}=${pageIndexForEndpoint}&${this.sizePageParam}=${this.pageSize}`;

    const apiCall = this.useGetMethod
    ? this.requestApi.get<HttpResponse<any>>(page_endpoint, { observe: 'response' })
    : this.requestApi.post<HttpResponse<any>>(page_endpoint, {}, { observe: 'response' });

    const subscription = apiCall.subscribe({
        next: (response: HttpResponse<any>) => {
            this.isLoading = false;
            const data = response.body;
            const headers = response.headers;

            if (data && data.content) {
                this.dataSource.data = Array.isArray(data.content) ? data.content : [];
            } else if (Array.isArray(data)) {
                this.dataSource.data = data;
            } else {
                this.dataSource.data = [];
            }

            if (headers.has(this.headersTotalElements)) {
                this.paginator_length = Number(headers.get(this.headersTotalElements));
            } else if (data.totalElements !== undefined) {
                this.paginator_length = data.totalElements;
            } else {
                this.paginator_length = this.dataSource.data.length;
            }

            // Llamar a initTable después de cargar los datos
            this.initTable();
        },
        error: (err) => {
            console.error('Error en consumeApi:', err);
            this.isLoading = false;
            this.dataSource.data = [];
        },
    });

    this.subscription.add(subscription);
}

  // Lógica para cambiar de página
  changePage(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.page.emit(event); // Emitir el evento hacia el componente padre si es necesario
    this.consumeApi(); // Recargamos los datos de la API con la nueva página
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  handlePageEvent(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.consumeApi(); // Volver a llamar la API para obtener los datos de la nueva página
    this.page.emit(event); // Emitir el evento hacia el componente padre
  }

  // Aplicar filtro global a la tabla
  applyFilterG(filterEvent: Event) {
    const filterValue = (filterEvent.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  // Aplicar filtros avanzados
  getFiltroAvanzado(data: unknown) {
    //this.APIfiltro(data);
    //this.apiPostPrueba(data)
  }
  apiPostPrueba(data){
    const hostApi = this.hostApiFilter;
    const endpoint = this.endpointFilter;

    const page_endpoint = this.apiEndpoints.createUrl(hostApi,endpoint);

    const filtro = this.obtenerCamposFiltro(data);
    const subscription = this.requestApi.post(page_endpoint, filtro).subscribe({
      next: (data) => {
        this.results = data;
        this.isLoading = false;
        this.dataSource.data = this.results[this.apiContent];
        this.paginator_length = this.results.totalElements;
        this.initTable(filtro);
      },
      error: (err) => {
        this.error = err;
        this.dataSource.data = [];
        this.isLoading = false;
      },
    });
  }
  // Método para aplicar filtros a la API
  APIfiltro(data) {
    const hostApi = this.hostApiFilter;
    const endpoint = this.endpointFilter;

    // Crear la URL con parámetros de paginación
    const page_endpoint = this.apiEndpoints.createUrlWithQueryParameters(
      hostApi,
      endpoint,
      (qs: QueryStringParameters) => {
        qs.push(this.sizePageParam, this.pageSize);
        qs.push(this.nPageParam, this.pageIndex);
      }
    );

    const filtro = this.obtenerCamposFiltro(data);

    const subscription = this.requestApi.post(page_endpoint, filtro).subscribe({
      next: (data) => {
        this.results = data;
        this.isLoading = false;
        this.dataSource.data = this.results[this.apiContent];
        this.paginator_length = this.results.totalElements;
        this.initTable(filtro);
      },
      error: (err) => {
        this.error = err;
        this.dataSource.data = [];
        this.isLoading = false;
      },
    });

    this.subscription.add(subscription); // Añadir suscripción
  }

  // Función para obtener campos del filtro desde el formulario
  obtenerCamposFiltro(data) {
    const res = {};
    try {
      this.form.sections.forEach((section) => {
        section.groups.forEach((group) => {
          group.rows.forEach((row) => {
            row.filters.forEach((filter) => {
              res[filter.formControlName] = data[filter.formControlName];
            });
          });
        });
      });
    } catch (error) {
      console.error("VARIABLE 'FORM' NO HA SIDO RELLENADA DE MANERA ADECUADA");
    }
    return res;
  }

  // Método para limpiar los filtros
  cleanFilterEvent() {
    const aux = [];
    this.table_headers.forEach((x) => {
      const dic = {};
      dic[x.field] = '';
      aux.push(dic);
    });
    this.formArray.value = aux;
    this.APIfiltro(aux);
  }

  // Método para guardar los filtros
  saveFilterEvent(data) {
    const hostApi = this.hostApiSaveFilter;
    const endpoint = this.endpointSaveFilter;

    const isSelected = document.querySelector('.fomento-select') as HTMLSelectElement;
    if (isSelected.innerText === 'Sin filtro' || isSelected.innerText === '- Elija una opción -') {
      this.filterAdvanceValue = data;
      this.openDialog();
    } else {
      const res = {};
      res[isSelected.innerText] = data;
      this.gestionFiltroService.guardarFiltroAPI(this.id_table, res, hostApi, endpoint, this.id_subsistema);
      this.getSavedFilterEvent();
    }
  }

  // Método para abrir un diálogo personalizado
  override openDialog(): void {
    this.dialog.open(this.customTemplate, { width: '50%', height: '30%' });
  }

  // Método para usar un filtro guardado
  useFilter(filter) {
    let filtro_sel = this.consultas_guardadas.find((x) => x.codigo === filter)?.consulta;
    if (filtro_sel === undefined) {
      this.cleanFilterEvent();
      filtro_sel = '{}';
    } else {
      this.getFiltroAvanzado(JSON.parse(filtro_sel));
    }

    this.rellenarInput(JSON.parse(filtro_sel));
  }

  // Método para rellenar el formulario con un filtro guardado
  rellenarInput(filtro) {
    const inputList = document.querySelectorAll('.input-form .l');
    const values = Object.values(filtro);
    for (let i = 0; i < inputList.length; i++) {
      const aux = inputList[i] as HTMLInputElement;
      aux.value = String(values[i]);
      aux.innerHTML = String(values[i]);
      if (aux.value === 'undefined') {
        aux.value = '';
      }
      if (aux.innerHTML === 'undefined') {
        aux.innerHTML = '';
      }
    }
  }

  // Obtener filtros guardados del usuario
  getSavedFilterEvent() {
    if (this.name) {
      const hostApi = this.hostApiFilterUser;
      const endpoint = this.endpointFilterUser;
      this.recuperarFiltrosUsuarioAPI(hostApi, endpoint);
    } else {
      this.consultas_guardadas = ['Sin filtro'];
    }
  }

  // Método para recuperar filtros del usuario a través de la API
  recuperarFiltrosUsuarioAPI(hostApi, endpoint) {
    const page_endpoint = this.apiEndpoints.createUrl(hostApi, endpoint);
    const subscription = this.requestApi.get(page_endpoint).subscribe({
      next: (data) => {
        this.consultas_guardadas = data;
        this.parseConsulta();
      },
      error: () => {
        console.error('ERROR DURANTE EL ALMACENAMIENTO');
      },
    });

    this.subscription.add(subscription);
  }

  // Parsear las consultas guardadas para mostrarlas correctamente
  private parseConsulta() {
    this.consultas_parse = [{ value: 'Sin filtro', description: 'Sin filtro' }];
    this.consultas_guardadas.forEach((x) =>
      this.consultas_parse.push({ value: x.codigo, description: x.codigo })
    );
  }

  // Obtener el usuario autenticado
  async getUsuario() {
    return (await this.gestionTokenService.getUserProfile())?.id;
  }

  // Reiniciar el paginador a la primera página
  override reiniciarPaginador() {
    this.paginator.firstPage();
  }

  submitDialog() {
    console.log('Submit dialog');
    this.dialog.closeAll(); // Cierra el diálogo abierto
  }
  

  onFormSaved() {
    this.consumeApi(); // Llama a la función que recarga los datos en la tabla
  }
  @ViewChild(FomentoFormularioComponent) fomentoFormulario: FomentoFormularioComponent;

  // Método para exponer `fomentoFormulario` al componente padre
  public getFormularioComponent(): FomentoFormularioComponent {
    return this.fomentoFormulario;
  }

  selectEvent(option: string) {
    this.selected = option; // Actualizar y emitir cambios
    this.changeOptionAction.emit(option);
  }

  get selected(): string {
    return this._selected;
  }
  set selected(value: string) {
    this._selected = value;
    this.selectedChange.emit(value); // Emitir el cambio
  }
  
  onSelectedChange(selected: string): void {
    console.log('Nuevo valor seleccionado:', selected);
  }
  
}