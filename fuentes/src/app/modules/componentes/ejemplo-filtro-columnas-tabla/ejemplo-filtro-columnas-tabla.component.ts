import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableColumn } from '@fomento/i-rf-web-component-node-lib';
import { MatFormFieldAppearance } from '@angular/material/form-field';

// Declaración del componente
@Component({
  selector: 'app-ejemplo-filtro-columnas-tabla', // Selector del componente para usarlo en el HTML
  templateUrl: './ejemplo-filtro-columnas-tabla.component.html', // Ruta del template HTML asociado
  styleUrls: ['./ejemplo-filtro-columnas-tabla.component.scss'], // Ruta del archivo de estilos asociado
})
export class EjemploFiltroColumnasTablaComponent implements OnInit {

  // Definición de las columnas de la tabla, incluyendo si son visibles
  columns: TableColumn[] = [
    { header: 'Código', field: 'codigo', visible: true },
    { header: 'Nombre', field: 'nombre', visible: true },
    { header: 'Descripción', field: 'descripcion', visible: true },
    { header: 'Fecha Creación', field: 'audAlta', visible: true },
    { header: 'Usuario Modificación', field: 'usuModifica', visible: true },
  ];

  // Variable para almacenar los datos que se mostrarán en la tabla
  dataSource = [];

  appearance: MatFormFieldAppearance = 'outline';

  label = '';

  hostApi = 'http://localhost:8080';

  tipoChurrera = 'c1';

  placeholder = 'Seleccione columnas';

  enableSearch = true;

  // URL de la API desde la que se obtienen los datos
  private apiUrl = this.hostApi + '/api/' + this.tipoChurrera + '/v1/formularios/list';

  // Inyección de HttpClient para realizar peticiones HTTP
  constructor(private http: HttpClient) {}

  // Método que se ejecuta al iniciar el componente
  ngOnInit(): void {
    this.fetchData(); // Llama al método para obtener los datos de la API
  }

  // Método para obtener los datos de la API
  fetchData(): void {
    this.http.get<any>(this.apiUrl).subscribe(
      (data) => {
        // Asigna los datos obtenidos a dataSource
        this.dataSource = data.content || data;
      },
      (error) => {
        // Muestra un error en consola si la petición falla
        console.error('Error fetching data from API', error);
      }
    );
  }
}
