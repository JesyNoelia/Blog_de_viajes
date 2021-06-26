import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { Post } from 'src/app/models/post.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  arrCategorias: Categoria[];
  arrPostLastest: Post[];

  constructor(private blogService: BlogService) {
    this.arrCategorias = [];
    this.arrPostLastest = [];
  }

  async ngOnInit() {
    this.arrCategorias = await this.blogService.getAllCategories();
    this.arrPostLastest = await this.blogService.getLastestPost(5);
  }
}
