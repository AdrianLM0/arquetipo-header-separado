import { Component, OnInit } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { RequestApiService } from '@fomento/i-rf-logic-component-node-lib';

// Declaración del componente
@Component({
  selector: 'app-ejemplo-fomento-table', // Nombre del selector para usar este componente en otros templates
  templateUrl: './ejemplo-fomento-table.component.html', // Ruta del archivo HTML asociado
  styleUrls: ['./ejemplo-fomento-table.component.scss'], // Ruta del archivo de estilos CSS/SCSS asociado
})
export class EjemploFomentoTableComponent implements OnInit {
  
constructor(private requestApi: RequestApiService) {}

  // Propiedad para almacenar los datos que serán mostrados en la tabla
  element_data = [];
isLoading = true;
tableDescription = "Ejemplo de table"

  // Definición de las columnas que se mostrarán en la tabla
  init_columns = [
    { id: 'codigo', name: 'Código' }, 
    { id: 'nombre', name: 'Nombre' }, 
    { id: 'descripcion', name: 'Descripción' },
    { id: 'audAlta', name: 'Fecha Creación' },
    { id: 'usuModifica', name: 'Usuario Modificación' }
  ];


  hostApi = 'http://localhost:8080';

  tipoChurrera = 'c1';
  
  // URL de la API desde la que se obtienen los datos
  apiUrl = this.hostApi + '/api/' + this.tipoChurrera + '/v1/formularios/list';

  ngOnInit(): void { 
    this.fetchData();
  }

  fetchData(): void {
    this.requestApi.get<any>(this.apiUrl).subscribe(
      (data) => {
        this.element_data = data.content || data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error al obtener datos de la API', error);
        this.isLoading = false;
      }
    );
  }
}
