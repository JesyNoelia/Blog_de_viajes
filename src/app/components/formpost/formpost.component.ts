import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';
import { Categoria } from 'src/app/models/categoria.model';
import { Post } from 'src/app/models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formpost',
  templateUrl: './formpost.component.html',
  styleUrls: ['./formpost.component.css'],
})
export class FormpostComponent implements OnInit {
  formPost: FormGroup;
  arrCategorias: Categoria[];
  postEnviar: Post;

  constructor(private blogService: BlogService, private router: Router) {
    this.formPost = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      subtitulo: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      autor: new FormControl('', [Validators.required]),
      pais: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
      avatar: new FormControl('', [Validators.required]),
      imagen: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required]),
      tags: new FormControl([], [Validators.required]),
      destacado: new FormControl(false),
    });
  }

  async ngOnInit() {
    this.arrCategorias = await this.blogService.getAllCategories();
  }

  async recogerDatos() {
    this.postEnviar = this.formPost.value;
    this.postEnviar.tags = this.formPost.value.tags.split(',');
    const mensaje = await this.blogService.addPost(this.postEnviar);
    console.log(mensaje);
    this.router.navigate(['/destinos']);
  }
}
