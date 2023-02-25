import { Observable } from 'rxjs';
import { Blog } from '../Models/Blog';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apiUrl = 'http://127.0.0.1:8000/blogs/';

  constructor(private http: HttpClient) {}

  getAllBlogs(): Observable<Blog> {
    return this.http.get<Blog>(this.apiUrl);
  }

  addBlog(blog: Blog): Observable<Blog>{
    return this.http.post<Blog>(this.apiUrl, blog);
  }

  getBlog(id: string): Observable<Blog> {
    const url = `${this.apiUrl}${id}`;
    return this.http.get<Blog>(url);
  }
}
