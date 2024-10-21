## Configuración dependiendo del tipo de endpoint:

### 1. endpoint con paginación en el body: 
Si el endpoint que se quiere utilizar tiene la paginación en el body, se debe añadir 'content' en el input del apiContent de la siguiente manera:
```TypeScript
@Input() apiContent: string = 'content';
``` 


### 2. endpoint sin paginación o con paginación en el header: 
Si este es el caso, el input de apiContent debe estar vacío, de la siguiente manera:
```TypeScript
@Input() apiContent: string = '';
``` 