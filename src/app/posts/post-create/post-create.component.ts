import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(public postService: PostService) { }
  postTitle: string ="";
  postContent: string ="";
  ngOnInit(): void {
  }
  onAddPost(form: NgForm){
    // create post object to store title and content
    const post: Post = {title: form.value.title, content: form.value.postContent};
    // emit the post object
    this.postService.addPost(post);
    form.resetForm();
  }

} 
