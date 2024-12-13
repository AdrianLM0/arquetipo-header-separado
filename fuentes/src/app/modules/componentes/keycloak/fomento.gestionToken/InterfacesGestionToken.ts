export interface IRecurso {
	codigo: string;
	nombre?: string; // Opcional, dependiendo de si necesitas más información del recurso
	subsistema?: string;
	id?: number;
}

export interface IPermisoToken {
	recurso: IRecurso;
	acciones: number; // Representa un conjunto de acciones permitidas como un bitmap
	privilegio: string;
}

export interface IPermisoGuardado {
	recurso: IRecurso;
	valor: number; // Bitmap de los permisos específicos
	codigo: string; // Código único del permiso guardado
	id?: number;
	privilegio: string;
}

export interface IPermisoContrastado {
	recurso: IRecurso;
	permisosPrivilegio: string[];
	privilegio: string;
}
