import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { PostComponent } from './components/post/post.component';
import { FormpostComponent } from './components/formpost/formpost.component';;

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'destinos', component: BlogComponent },
  { path: 'destinos/categoria/:categoria', component: BlogComponent },
  { path: 'viaje/:idDestino', component: PostComponent },
  { path: 'pais/:pais', component: BlogComponent },
  { path: 'newdestino', component: FormpostComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
