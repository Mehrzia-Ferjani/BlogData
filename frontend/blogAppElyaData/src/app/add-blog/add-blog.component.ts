import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Blog } from '../Models/Blog';
import { BlogService } from '../Services/blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit{

  blogForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private blogService: BlogService, private router: Router){}

  ngOnInit(): void {
    this.blogForm = this.formBuilder.group({
      title: ['',Validators.required],
      author: ['',Validators.required],
      content: ['',Validators.required]
    });
  }

  onSubmit(): void{
    const formData = this.blogForm.value;
    const newBlog: Blog = {
      id: '',
      title: formData.title,
      author: formData.author,
      content: formData.content,
      upvotes: 0,
      downvotes: 0
    };

    this.blogService.addBlog(newBlog).subscribe(()=>{
      this.router.navigateByUrl('/blogs');
    });
  }



}
