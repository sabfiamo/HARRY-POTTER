# **Harry Potter characters**

## ¿Qué esHarry Potter characters?

En este proyecto hemos realizado una aplicación web que permite obtener el listado de personajes de Harry Potter. Para eso, vamos a utilizar el servicio de https://hp-api.onrender.com/ que nos devuelve información sobre los personajes de
Harry Potter filtrados por la casa a la que pertenece y por el nombre del personaje.

## **¿Qué partes la conforman?**

El proyecto consta de 2 páginas:

- Una página landing donde se muestra el listado de personajes.
- Una página con el detalle del personaje seleccionado.

La aplicación funciona siguiendo estos pasos:

1. La aplicación carga por defecto los personajes de la casa Gryffindor.
1. Permite al usuario elegir una de las cuatro casas de Hogwarts mediante un input de tipo Select.
1. Permite al usuario filtrar mediante un input de tipo Text por nombre del personaje.
1. Permite borrar los valores introcidos mediente un botón de Reset.
1. Al seleccionar uno de los personajes se carga una nueva página con el detalle: nombre del personaje, estatus, genero, especie y casa a la que pertece junto con su escudo.

## Construido con 🛠️

- **REACT** - Framework de JavaScript
- **HTML / CSS /JAVASCRIPT** - Lenguajes de programación
- **SASS** - Preprocesador CSS
- **AJAX / APIS** - Peticiones al servidor
- **NPM** - Gestor de dependencias
- **Git** - Control de verisones
- **Starter Kit** - Kit

## Objectivos

- Comenzar a trabajar con React JS.
- Uso avanzado de formularios HTML.
- Maquetación usando CSS avanzado, como flex y grid.
- Usar SASS
- Trabajar con arrays y objetos
- Uso de mediaqueries para que el diseño sea adaptable al dispositivo usando la estrategia mobile first
- Usar funciones para estructurar el código
- Modificar la información del DOM para añadir contenido dinámico
- Escuchar eventos del DOM
- Crear peticiones con fetch y promesas
- Recuperar la respuesta del servidor y gestionar información en formato JSON
- Usar DOM avanzado

## Guía de inicio rápido

> **NOTA:** Necesitas tener instalado [Node JS](https://nodejs.org/) para trabajar con el Starter Kit.

### Pasos para arrancar el proyecto:

- **Clona el repositorio.**
- **Instala las dependencias locales.** Ejecutando en la terminal el comando:

```bash
npm install react-router-dom
```

- **Arranca el proyecto.** Ejecuta el comando:

```bash
npm start
```

Este comando:

- **Abre una ventana de Chrome y muestra tu página web**, al igual que hace el plugin de VS Code Live Server (Go live).
- También **procesa los ficheros** REACT, HTML, SASS / CSS y JS y los **genera y guarda en la carpeta `public/`**.

### Pasos para publicar el proyecto en GitHub Pages:

- Añadir al package.json la línea "homepage": "./".
- Añadir a los scripts del package.json la línea:
  "githubpages": "rm -rf build && rm -rf docs && npm run build && mv build docs && git add docs/\* && git commit -m \"Publish in GitHub Pages\" && git push"
- Ejecutar en la terminal npm run githubpages

Sube a tu repo, en el apartado de GitHub Pages, la carpeta `docs/` que se te acaba de generar.

## Autor ✒️

- [Mónica Saborido](https://github.com/sabfiamo)
