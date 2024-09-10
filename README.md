<a id="readme-top"></a>
# Índice
 <p><a href="#sobre-el-proyecto">Sobre el proyecto</a></p>
 <p><a href="#iniciar-proyecto">Iniciar proyecto</a></p>


<a id="sobre-el-proyecto"></a>
<!-- ABOUT THE PROJECT -->
## Sobre el proyecto

<!-- TODO Insertar captura del proyecto -->

El arquetipo englobado dentro de la herramienta de Reutilización es un proyecto pensado para levantar proyectos en Angular con faciliad, teniendo ya accesibles componentes y páginas predefinidas.

Principales características:
* Proyecto en Angular con las configuraciones necesarias listo para empezar a programar.
* Librería de componentes agnósticos predefinidos.
* Librería de securización de endpoints.
* Librería de lógica con código boilerplate.


<p align="right">(<a href="#readme-top">Volver arriba</a>)</p>

<a id="sobre-el-proyecto"></a>
<!-- GETTING STARTED -->
## Iniciar proyecto

Estos son los prerrequisitos y pasos a seguir para poder lanzar el proyecto

### Prerequisites
Estos prerrequisitos no serán necesarios si estás usando el Starter de Devaid, ya que vendrán ya definidos en el entorno.
* node > v18.16 
* angular CLI > v14.x
* Tener clonadas las librerías de logic-component, security-component y web-component organizados y con los siguientes nombres

```md
arquetipo-reutilizacion
├── logic-Component-lib
├── security-component-lib
├── test-component-ms
└── web-component-lib
```

### Instalación
1. Revisar los package json de los 4 componentes y eliminar todas las librerías procedentes de @fomento (@fomento/security-component-node-lib, @fomento/logic-component-node-lib y @fomento/web-component-node-lib (todo de fomento))
2. Desde la carpeta raíz de test-componet-ms lanzar.

```sh
chmod +x build-local.sh
```
3. A continuación, lanzar el siguiente script para realizar todas las instalaciones y levantar el proyecto.

```sh
./build-local.sh
```
<p align="right">(<a href="#readme-top">Volver arriba</a>)</p>


### Lanzar Proyecto

* Starter

Lanzar este comando desde fuentes:

```sh
npm start
```
* Local

Lanzar este comando desde fuentes:

```sh
ng serve
```
