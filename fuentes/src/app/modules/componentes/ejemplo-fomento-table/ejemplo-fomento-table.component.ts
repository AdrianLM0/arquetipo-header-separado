import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ejemplo-fomento-table',
  templateUrl: './ejemplo-fomento-table.component.html',
  styleUrls: ['./ejemplo-fomento-table.component.scss'],
})
export class EjemploFomentoTableComponent implements OnInit {
  
  element_data = [];
  init_columns = [
    { id: 'codigo', name: 'Código' },
    { id: 'nombre', name: 'Nombre' },
    { id: 'descripcion', name: 'Descripción' },
    { id: 'audAlta', name: 'Fecha Creación' },
    { id: 'usuModifica', name: 'Usuario Modificación' }
  ];

  private apiUrl = 'http://localhost:8080/api/c1/v1/formularios/listbyquerydsl';
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.http.get<any>(this.apiUrl).subscribe(
      (data) => {
        // Asigna los datos traídos del backend
        this.element_data = data.content || data; // 'content' si es la estructura usada como en el datagrid
      },
      (error) => {
        console.error('Error fetching data from API', error);
      }
    );
  }
}
