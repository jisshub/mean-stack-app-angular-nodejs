import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // inject PostService instance
  constructor(public postService: PostService) { 
    
  }
  // make posts property bindable from outside thru property binding
  posts: Post[] = [];

  ngOnInit(): void {
    // call get post method here
    this.postService.getPosts();
  }

}
