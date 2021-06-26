# Blog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Material utilizado

He usado la libreria de Owl Carousel para realizar el carrusel de la home
y me he basado en este tutorial para implementarla
https://www.c-sharpcorner.com/article/how-to-use-owl-carousel-in-angular-8/

## Este proyecto es solo para fines educativos no se usará para fines lucrativos.

## Partes del proyecto

El proyecto tiene 5 componentes
_Blog_ - es el componente donde se carga la lista de publicaciones
_Post_ - es la vista individual de un post
_FormPost_ - es el componente donde se carga el formulario realizado con el modulo ReactiveForm
_sidebar_ - es un componente que se carga dentro de otras vistas y sirve para cargar el listado de los ultimos post y la lista de categorias.
_home_ - componente donde carga las publicaciones destacadas, lo hago a través de un modulo cargado por npm que se llama OWLCarrusel

El proyecto tiene dos archivos que sirven de base de datos que esta en la carpeta /db, son tan solo dos arrays con datos falsos para la ejecucion del ejercicio.

he creado dos modelos una para la estrapolar el modelo de datos de un Post y otro para el de la categoria y estan en la carpeta /models

Por ultimo he generado un unico servicio donde tengo todas las funciones de peticiones de datos a través de promesas para gestionar bien la carga de datos.
