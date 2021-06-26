import { Component, OnInit } from '@angular/core';
import { BlogService } from './services/blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  arrDestinos: string[];

  constructor(
    private blogService: BlogService
  ) {
    this.arrDestinos = [];
  }

  async ngOnInit() {
    this.arrDestinos = await this.blogService.getAllCities();
    // console.log(this.arrDestinos);
  }
}
