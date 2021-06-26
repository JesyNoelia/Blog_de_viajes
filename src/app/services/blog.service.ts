import { Injectable } from '@angular/core';
import { POSTS } from '../db/posts.db';
import { CATEGORIAS } from '../db/categorias.db';
import { Post } from '../models/post.model';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  idActual: number;
  constructor() {
    this.idActual = 8;
    // meto primero el array de POSTS en el LOCALSTORAGE
    if (!localStorage.getItem('datos')) {
      localStorage.setItem('datos', JSON.stringify(POSTS));
    }

  }

  /*
   * getAllPost()
   * obtengo todo el array de publicaciones y lo devuelvo como promesa
   */
  getAllPost(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      // extraigo del localstorage el array de datos
      const arrPosts = JSON.parse(localStorage.getItem('datos'));
      resolve(arrPosts);
    });
  }

  /*
   * getAllCategories()
   * obtengo todo el array de categorias
   */
  getAllCategories(): Promise<Categoria[]> {
    return new Promise((resolve, reject) => {
      resolve(CATEGORIAS);
    });
  }

  /*
   * getPostsByCategory(pCategory)
   * le paso el nombre de la categoria string y me filtra el array de post para delvolverme un array de post de solo esa categoria.
   */
  getPostsByCategory(pCategory): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      const arrPosts = JSON.parse(localStorage.getItem('datos'));
      const arrByCategoria = arrPosts.filter((post) => {
        return post.categoria === pCategory;
      });
      resolve(arrByCategoria);
    });
  }

  /*
   *  getPostsByPais(pPais)
   * le paso un string con el pais y me devuelve un array filtrado con todas las publicaciones de ese pais.
   */
  getPostsByPais(pPais): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      const arrPosts = JSON.parse(localStorage.getItem('datos'));
      const arrByPais = arrPosts.filter((post) => {
        return post.pais === pPais;
      });
      resolve(arrByPais);
    });
  }

  /*
   * getPostById(pId)
   * le paso un number con el id de la publicacion y me devuelve un objeto de tipo post con todos los datos de dicha publicacion.
   */
  getPostById(pId): Promise<Post> {
    return new Promise((resolve, reject) => {
      const arrPosts = JSON.parse(localStorage.getItem('datos'));
      const postById = arrPosts.find((post) => {
        return post.id === pId;
      });
      resolve(postById);
    });
  }

  /*
   * getPostById(pId)
   * le paso un number con el id de la publicacion y me devuelve un objeto de tipo post con todos los datos de dicha publicacion.
   */
  getAllCities(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      const arrPosts = JSON.parse(localStorage.getItem('datos'));
      let paises = arrPosts.map((post) => post.pais);
      paises = Array.from(new Set(paises));
      resolve(paises);
    });
  }

  /*
   * getFeaturedPost():
   * me devuelve y array con las publicaciones cuyo valor de destacado es igual a true
   */
  getFeaturedPost(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      const arrPosts = JSON.parse(localStorage.getItem('datos'));
      const arrDestacados = arrPosts.filter((post) => post.destacado === true);
      resolve(arrDestacados);
    });
  }

  /*
   * getLastestPost(pCantidad)
   * le paso la cantidad de post que quiero y me devuelve dicha cantidad ordenado por fecha mas reciente con sort
   */
  getLastestPost(pCantidad): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      const arrPosts = JSON.parse(localStorage.getItem('datos'));
      const arrOrdenado = arrPosts.sort((a, b) => {
        const fecha1 = new Date(a.fecha);
        const fecha2 = new Date(b.fecha);
        return fecha1 > fecha2 ? -1 : fecha1 < fecha2 ? 1 : 0;
      });
      const arrLastestPost = arrOrdenado.slice(0, pCantidad);
      resolve(arrLastestPost);
    });
  }

  /*
   * addPost(pCantidad)
   * Añade una publicacion al array de publicaciones
   */

  addPost(pPost): Promise<string> {
    return new Promise((resolve, reject) => {
      // extraigo el array del localstorage para poder introducir en nuevo post dentro de dicho array y devolverlo al localstorage.
      const arrPosts = JSON.parse(localStorage.getItem('datos'));
      localStorage.removeItem('datos');
      pPost.id = this.idActual;
      arrPosts.push(pPost);
      this.idActual++;
      localStorage.setItem('datos', JSON.stringify(arrPosts));
      resolve('publicación guardada con exito');
    });
  }
}
