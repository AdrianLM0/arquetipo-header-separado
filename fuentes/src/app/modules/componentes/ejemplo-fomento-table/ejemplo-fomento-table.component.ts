import { Component } from '@angular/core';

@Component({
	selector: 'app-ejemplo-fomento-table',
	templateUrl: './ejemplo-fomento-table.component.html',
	styleUrls: ['./ejemplo-fomento-table.component.scss'],
})
export class EjemploFomentoTableComponent {
	constructor() {
		const nombres: string[] = [
			'Andrés',
			'María',
			'Juan',
			'Ana',
			'Pedro',
			'Laura',
			'Diego',
			'Sofía',
			'Carlos',
			'Elena',
		];
		const apellidos: string[] = [
			'Fernández',
			'García',
			'Martínez',
			'López',
			'Pérez',
			'González',
			'Rodríguez',
			'Sánchez',
			'Romero',
			'Díaz',
		];

		// Generar un array de nombres aleatorios
		const cantidadNombres = 50; // Puedes ajustar esta cantidad según tus necesidades
		const arrayNombres: { nombre: string; apellido: string }[] = [];
		for (let i = 0; i < cantidadNombres; i++) {
			arrayNombres.push(this.generarNombreCompleto(nombres, apellidos));
		}
		this.element_data = arrayNombres;
	}

	// Función para generar un nombre aleatorio
	generarNombreCompleto(
		nombres,
		apellidos,
	): { nombre: string; apellido: string } {
		const nombre: string = nombres[this.getSecureData(nombres.length)];
		const apellido: string = apellidos[this.getSecureData(apellidos.length)];
		return { nombre: nombre, apellido: apellido };
	}

	element_data = [
		/*
    { "nombre": "Andrés", "apellido": "Fernández" },
    { "nombre": "Iker", "apellido": "Muñoz" },
    { "nombre": "Francisco", "apellido": "Gutiérrez" },
    { "nombre": "Amapola", "apellido": "Gil" },
    { "nombre": "Rosa", "apellido": "Gómez" },
    { "nombre": "Andrés", "apellido": "Fernández" },
    { "nombre": "Iker", "apellido": "Muñoz" },
    { "nombre": "Francisco", "apellido": "Gutiérrez" },
    { "nombre": "Amapola", "apellido": "Gil" },
    { "nombre": "Rosa", "apellido": "Gómez" },
    { "nombre": "Andrés", "apellido": "Fernández" },
    { "nombre": "Iker", "apellido": "Muñoz" },
    { "nombre": "Francisco", "apellido": "Gutiérrez" },
    { "nombre": "Amapola", "apellido": "Gil" },
    { "nombre": "Rosa", "apellido": "Gómez" },
    { "nombre": "Andrés", "apellido": "Fernández" },
    { "nombre": "Iker", "apellido": "Muñoz" },
    { "nombre": "Francisco", "apellido": "Gutiérrez" },
    { "nombre": "Amapola", "apellido": "Gil" },
    { "nombre": "Rosa", "apellido": "Gómez" },
    { "nombre": "Andrés", "apellido": "Fernández" },
    { "nombre": "Iker", "apellido": "Muñoz" },
    { "nombre": "Francisco", "apellido": "Gutiérrez" },
    { "nombre": "Amapola", "apellido": "Gil" },
{ "nombre": "Rosa", "apellido": "Gómez" }*/
	];

	init_columns = [
		{ id: 'nombre', name: 'Nombre' },
		{ id: 'apellido', name: 'Apellidos' },
	];

	getSecureData(longitud) {
		const array = new Uint8Array(1);
		crypto.getRandomValues(array);
		const randomValue = array[0];
		const randomNumber = randomValue / 255;
		return Math.floor(randomNumber * longitud);
	}
}
