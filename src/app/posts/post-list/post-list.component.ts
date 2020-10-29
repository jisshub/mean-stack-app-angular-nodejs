import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  // inject PostService instance
  constructor(public postService: PostService) { 
    
  }
  // make posts property bindable from outside thru property binding
  posts: Post[] = [];
  private postSub: Subscription;
  ngOnInit(): void {
    // call get post method here
    this.posts = this.postService.getPosts();
    this.postSub = this.postService.getPostUpdateListener()
    .subscribe((post: Post[]) => {
      // set posts property with post array received. 
      this.posts = post;
    });
  }
  ngOnDestroy(){
    // unsubscribe
      this.postSub.unsubscribe()
  }
}
