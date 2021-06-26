import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  arrPost: Post[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private blogServices: BlogService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params) => {
      if (params.pais !== undefined) {
        this.arrPost = await this.blogServices.getPostsByPais(params.pais);
      } else if (params.categoria !== undefined) {
        this.arrPost = await this.blogServices.getPostsByCategory(
          params.categoria
        );
      } else {
        this.arrPost = await this.blogServices.getAllPost();
      }
      console.log(this.arrPost);
    });
  }
}
