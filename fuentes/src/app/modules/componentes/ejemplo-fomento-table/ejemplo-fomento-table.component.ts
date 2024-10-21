import { Component, OnInit } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';

// Declaración del componente
@Component({
  selector: 'app-ejemplo-fomento-table', // Nombre del selector para usar este componente en otros templates
  templateUrl: './ejemplo-fomento-table.component.html', // Ruta del archivo HTML asociado
  styleUrls: ['./ejemplo-fomento-table.component.scss'], // Ruta del archivo de estilos CSS/SCSS asociado
})
export class EjemploFomentoTableComponent implements OnInit {
  
  // Propiedad para almacenar los datos que serán mostrados en la tabla
  element_data = [];

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
  }
}
