import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slideOptions: any;
  arrDestinos: Post[];

  constructor(
    private blogService: BlogService
  ) {
    this.slideOptions = {
      items: 1,
      center: true,
      loop: true,
      nav: true,
      dots: false,
      mouseDrag: false,
      margin: 10,
      stagePadding: 50,
      navText: ['<svg class="svg-icon align-middle"><use xlink:href="#arrow-left-1"> </use></svg> <span class="align-middle">Prev</span', '<span class="align-middle">Next</span ><svg class="svg-icon align-middle"><use xlink:href="#arrow-right-1"> </use></svg>'],
      responsive: {
          551: {
              items: 2
          },
          991: {
              items: 3
          },
          1200: {
              items: 4,
              stagePadding: 80,
          },
          1700: {
              items: 5,
              stagePadding: 80,
          }
      }
    }
   }

  async ngOnInit() {
    this.arrDestinos = await this.blogService.getFeaturedPost();
    console.log(this.arrDestinos);
  }

}
