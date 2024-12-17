export interface TableColumn {
	header: string; // El nombre para mostrar
	field: string; // El campo en los datos que representa
	visible: boolean; // Si la columna está visible o no
	index?;
}
