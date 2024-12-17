import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FomentoGestionFiltrosService } from '@fomento/i-rf-logic-component-node-lib';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DatagridBase } from './fomento.datagrid.base';
import { MatTableDataSource } from '@angular/material/table';
import { FomentoPaginatorComponent } from '../fomento.paginator/fomento.paginator.component';
import { PageEvent } from '@angular/material/paginator';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { TableColumn } from '../fomento.filtro-columnas-tabla/table-column.model';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'lib-fomento-jsondatagrid',
  templateUrl: './fomento.datagrid.component.html',
  styleUrls: ['./fomento.datagrid.component.scss'],
})
export class FomentoJsonDatagridComponent
  extends DatagridBase
  implements OnInit {
  @Input() rowsPerPageOptions: number[] = [5, 10, 15, 20]; //Almacena las opciones de tamaño de páginas
  @Input() universal_filter = false;
  @Input() pageIndex;
  @Input() endpointUrl: string; // Añadir esta propiedad para que se reciba correctamente desde el componente padre.
  @Input() filtroColumnasLabel = 'Filtrar Columnas';
  @Input() filtroColumnasAppearance: MatFormFieldAppearance = 'outline';
  @Input() filtroColumnasPlaceholder = 'Selecciona columnas';
  @Input() filtroColumnasEnableSearch = true;
  @Input() pageSize;
  paginator_length = '';
  @Input() showBotonera = true;
  @Input() showMulti = false;
  @Input() showActions: boolean = true;

  // Inputs para configurar el select
  @Input() selectData: { value: string; description: string }[] = [];
  @Input() selectLabel: string = 'Seleccione una opción';
  @Input() selectDisabled: boolean = false;
  @Input() selectDefault: string = '- Elija una opción -';
  @Input() selectAriaLabel: string = 'Filtro avanzado';
  @Input() selectIsRequired: boolean = true;
  @Input() selectReadonly: boolean = false;
  @Input() selectedOption: string = ''; // Almacena el valor seleccionado
  @Output() selectChange = new EventEmitter<string>(); // Emitir cambios al padre
  @Input() filtroColumnasColumns: TableColumn[] = []; // Columnas a mostrar

  @Output() filtroColumnasChange = new EventEmitter<TableColumn[]>(); // Output para cambios
  // Configuración para el botón "Limpiar tabla"
  @Input() cleanButtonLabel: string = 'Limpiar tabla';
  @Input() cleanButtonTheme: string = 'secondary';
  @Input() cleanButtonIcon: string = 'trash';
  @Input() cleanButtonType: 'button' | 'submit' | 'reset' = 'button';
  @Input() cleanButtonAriaLabel: string = 'Limpiar la tabla de resultados';
  @Input() cleanButtonDisableRipple: boolean = true;

  // Configuración para el botón "Exportar"
  @Input() exportButtonLabel: string = 'Exportar';
  @Input() exportButtonTheme: string = 'secondary';
  @Input() exportButtonIcon: string = 'file-download';
  @Input() exportButtonType: 'button' | 'submit' | 'reset' = 'button';
  @Input() exportButtonAriaLabel: string = 'Exportar resultados';
  @Input() exportButtonDisableRipple: boolean = true;

  //configuración adicional "select"
  @Input() selectFormControlName: string = '';
  @Input() selectAdditionalDescription: string = '';
  @Input() selectEndpoint: string = '';

   //configuración adicional para "tooltip"
   @Input() tooltipPosition: TooltipPosition = 'below';
@Input() tooltipDelayHide: number = 0;
@Input() tooltipDelayShow: number = 0;
@Input() tooltipEnabled: boolean = true;
@Input() tooltipAriaLabel: string;
@Input() tooltipAriaLive: 'off' | 'polite' | 'assertive' = 'polite';
@Input() tooltipRole: string = 'tooltip';
@Input() tooltipTabindex: string = '0';

  override paginator_version = 'json';

  constructor(
    private gestionFiltroService: FomentoGestionFiltrosService,
    public override dialog: MatDialog,
  ) {
    super(dialog);
  }

  isLoading = false;
  results;
  error;
  private subscription: Subscription = new Subscription(); // Propiedad para la subscripción

  @ViewChild(FomentoPaginatorComponent, { static: false }) override set paginator(
    val: FomentoPaginatorComponent,
  ) {
    if (val) {
      this.dataSource.paginator = val;
    }
  }

  override auxInitTable(updateFilter?) {
    if (updateFilter) {
      this.formArray.value = updateFilter;
    }

    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = this.tableFilter();
    this.getSavedFilterEvent();
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.table_data);
    this.initTable();
  }
  @Output() page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  handlePageEvent(event: PageEvent) {
    // Aquí puedes manejar cualquier lógica adicional antes de emitir el evento
    this.page.emit(event); // Emitir el evento hacia el componente padre
  }
  tableFilter(): (data, filter) => boolean {
    const filter = function (data, filter): boolean {
      let res = true;
      const values: Array<string> = Object.values(data);
      for (let i = 0; i < filter.length; i++) {
        res =
          res &&
          (filter[i].filterValue === null
            ? true
            : values[i]
              .toLowerCase()
              .includes(filter[i].filterValue.toLowerCase()));
      }
      return res;
    };

    return filter;
  }
  guardarValores(data: any) {
    // Lógica para guardar los valores o emitir un evento al componente padre
    console.log('Valores a guardar:', data);
  }

  onFormSaved() {
    // Lógica para recargar la tabla después de que se guarde el formulario
    console.log('Formulario guardado, recargando datos...');
    // Llama al método que recarga los datos
  }

  globalFilter(): (data, filter) => boolean {
    const filter = function (data, filter): boolean {
      let res = false;
      const values: Array<string> = Object.values(data);
      for (const value of values) {
        res =
          res || filter === null
            ? true
            : value.toLowerCase().includes(filter.toLowerCase());
      }

      return res;
    };

    return filter;
  }

  applyFilter() {
    this.dataSource.filterPredicate = this.tableFilter();
    this.dataSource.filter = this.formArray.value;
  }

  applyFilterG(filterEvent: Event) {
    const filterValue = filterEvent.target as HTMLInputElement;
    this.dataSource.filterPredicate = this.globalFilter();
    this.dataSource.filter = filterValue.value;
  }

  getFiltroAvanzado(data: unknown) {
    data = Object(data);
    const aux: unknown[] = [];
    Object.values(data).forEach((value) => {
      aux.push({ filterValue: value });
    });

    this.dataSource.filterPredicate = this.tableFilter();
    this.dataSource.filter = aux;
  }

  cleanFilterEvent() {
    this.formArray.value.forEach((i) => (i.filterValue = null));

    const clearinput =
      this.filter === 'column'
        ? (document.querySelectorAll(
          '.inputFilter',
        ) as unknown as HTMLInputElement[])
        : (document.querySelectorAll(
          '.input-form .l',
        ) as unknown as HTMLInputElement[]);
    clearinput.forEach((i) => {
      i.value = '';
    });

    this.applyFilter();
  }

  filterAdvanceValue;

  saveFilterEvent(data) {
    //TODO: guardado filtros
    const isSelected = document.querySelector(
      '.fomento-select',
    ) as HTMLSelectElement;
    if (
      isSelected.innerText === 'Sin filtro' ||
      isSelected.innerText === '- Elija una opción -'
    ) {
      this.filterAdvanceValue = data;
      this.openDialog();
    } else {
      const res = {};
      res[isSelected.innerText] = data;
      this.gestionFiltroService.guardarFiltro(this.name, res);
      this.getSavedFilterEvent();
    }
  }

  submitDialog() {
    const res = {};
    res[this.dialogValue] = this.filterAdvanceValue;
    this.dialog.closeAll();
    this.gestionFiltroService.guardarFiltro(this.name, res);
    this.getSavedFilterEvent();
  }

  useFilter(filter) {
    const tabla_seleccionada = this.gestionFiltroService.recuperarFiltro(
      this.name,
    );
    const filtros = Object.keys(tabla_seleccionada);
    const index = filtros.indexOf(filter);
    if (index === -1) {
      this.cleanFilterEvent();
    } else {
      this.getFiltroAvanzado(tabla_seleccionada[filter]);
    }

    this.rellenarInput(tabla_seleccionada[filter]);
  }

  rellenarInput(filtro) {
    const inputList = document.querySelectorAll('.input-form .l');
    const values = Object.values(filtro);
    for (let i = 0; i < inputList.length; i++) {
      const aux = inputList[i] as HTMLInputElement;
      aux.value = String(values[i]);
      aux.innerHTML = String(values[i]);
    }
  }

  getSavedFilterEvent() {
    if (this.name) {
      const res = Object.keys(
        this.gestionFiltroService.recuperarFiltro(this.name),
      );
      const aux = []
      res.forEach((x) => { aux.push({ value: x, description: x }) })
      aux.splice(0, 0, { value: 'Sin filtro', description: 'Sin filtro' });
      this.consultas_guardadas = aux;
    } else {
      this.consultas_guardadas = [{ value: 'Sin filtro', description: 'Sin filtro' }];
    }
  }

  changePage(event) {
    console.log(event);
  }

  onSelectedChange(selected: string): void {
    console.log('Nuevo valor seleccionado:', selected);
  }
  
}