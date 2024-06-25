import { Validators } from '@angular/forms';

export class Constants {
	static API_ENDPOINTS = 'api.endpoints';

	static API_RMDVP = 'RMDVP';
	static API_EIT = 'EIT';
	static API_POKEMON = 'POKEAPI';
	static API_DATOSABIERTOS_JDA = 'OPENDATA_JDA';

	static GET_MOCK_LIST_1 = 'mock.endpoint.list.1';
	static GET_MOCK_FORMFIELD_1 = 'mock.endpoint.formfield.1';
	static GET_MOCK_DETAILS_FORM_1 = 'mock.endpoint.datails.form.1';

	// CONSTANTES PARA EVITAR LA DUPLICACIÓN DE CÓDIGO

	static EJEMPLO_FORMULARIO = {
		sections: [
			{
				label: 'Información usuario',
				groups: [
					{
						label: 'Expediente',
						rows: [
							{
								filters: [
									{
										header: 'Prueba de validacion maxLength',
										formControlName: 'validacionMaxLength',
										type: 'input',
										validations: [
											{
												validator: Validators.maxLength(2),
												message: 'No se permiten más de dos caracteres',
											},
										],
									},
									{
										header: 'Prueba de validacion email',
										formControlName: 'validacionEmail',
										type: 'input',
										validations: [
											{
												validator: Validators.email,
												message: 'El email introducido no es válido',
											},
										],
									},
									{
										header: 'Prueba de validacion required',
										formControlName: 'validacionRequired',
										type: 'input',
										validations: [
											{
												validator: Validators.required,
												message: 'El campo es obligatorio',
											},
										],
									},
									{
										header: 'Prueba de validacion minLength',
										formControlName: 'validacionMinLength',
										type: 'input',
										validations: [
											{
												validator: Validators.minLength(3),
												message: 'El campo debe tener minimo tres carácteres',
											},
										],
									},

									{
										header: 'Código territorial',
										formControlName: 'codigoTerritorial',
										type: 'select',
										selectOptions: [
											{ value: '0', description: 'SÍ' },
											{ value: '1', description: 'NO' },
										],
									},
									{
										header: 'Identificador interesado',
										label: 'NIF',
										formControlName: 'nifInteresado',
										type: 'checkbox',
									},
									{
										header: 'Fecha de creación - Mínimo',
										formControlName: 'fechaCreacionMin',
										type: 'date',
									},
								],
							},
						],
					},
					{
						label: 'Dirección',
						rows: [
							{
								filters: [
									{
										header: 'Provincia',
										formControlName: 'provincia',
										type: 'select',
										selectOptions: [
											{ value: '0', description: 'Sevilla' },
											{ value: '0', description: 'Córdoba' },
											{ value: '0', description: 'Málaga' },
											{ value: '0', description: 'Granada' },
											{ value: '0', description: 'Almeria' },
											{ value: '0', description: 'Jaén' },
											{ value: '0', description: 'Huelva' },
											{ value: '0', description: 'Cádiz' },
										],
									},
									{
										header: 'Municipio',
										formControlName: 'municipio',
										type: 'select',
										selectOptions: [{ value: '0', description: 'Sevilla' }],
									},
									{
										header: 'Economía',
										formControlName: 'economia',
										type: 'radio',
										radioOptions: [
											{ label: 'Opción 1', value: 'true' },
											{ label: 'Opción 2', value: 'false' },
										],
									},
								],
							},
						],
					},
				],
			},
			{
				label: 'Solicitante',
				groups: [
					{
						rows: [
							{
								filters: [
									{
										header: 'Referencia de la liquidación',
										formControlName: 'referenciaLiquidacion',
										type: 'input',
									},
									{
										header: 'Código territorial',
										formControlName: 'codigoTerritorial',
										type: 'select',
										selectOptions: [
											{ value: '0', description: 'SÍ' },
											{ value: '1', description: 'NO' },
										],
									},
								],
							},
						],
					},
				],
			},
		],
	};

	static EJEMPLO_TABLE_HEADER = [
		{ header: 'Nombre', field: 'nombre', visible: true },
		{ header: 'Primer apellido', field: 'apellido1', visible: true },
		{ header: 'Segundo Apellido', field: 'apellido2', visible: true },
		{ header: 'Usuarios Ldap', field: 'usuarioLDAP', visible: true },
		{ header: '¿Activo?', field: 'usuarioBaja', visible: true },
	];

	static EJEMPLO_LISTADO_ACCIONES_AUX = [
		{
			nombre: 'Funcion 1',
			funcion: () => {
				console.log('FUNCIÓN 1');
			},
			tooltip: 'Esto es un tooltip',
			icono: 'fas fa-eye',
		},
		{
			nombre: 'Funcion 2',
			funcion: () => {
				console.log('FUNCIÓN 2');
			},
			icono: 'fas fa-eye',
		},
		{
			nombre: 'Funcion 3',
			funcion: () => {
				console.log('FUNCIÓN 3');
			},
			icono: 'fas fa-eye',
		},
		{
			nombre: 'Funcion 4',
			funcion: () => {
				console.log('FUNCIÓN 4');
			},
			icono: 'fas fa-eye',
		},
	];

	static EJEMPLO_FORMULARIO_TABLA = {
		sections: [
			{
				label: 'Filtro avanzado',
				groups: [
					{
						label: 'Filtrar usuarios',
						rows: [
							{
								filters: [
									{
										header: 'Nombre',
										formControlName: 'nombre',
										type: 'input',
									},
									{
										header: 'Primer Apellido',
										formControlName: 'apellido1',
										type: 'input',
									},
								],
							},
						],
					},
				],
			},
		],
	};
}
