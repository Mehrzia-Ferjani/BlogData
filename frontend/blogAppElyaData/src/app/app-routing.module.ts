import { AddBlogComponent } from './add-blog/add-blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'blogs', component: BlogListComponent},
  { path: 'addBlog', component: AddBlogComponent},
  { path: 'blogDetails/:id', component: BlogDetailsComponent},
  { path: '',   redirectTo: '/blogs' ,pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
