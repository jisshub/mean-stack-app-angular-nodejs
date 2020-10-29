import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from '@angular/core';
import { title } from 'process';
import { Subject } from 'rxjs';
import { Post } from './post.model';
@Injectable({
  providedIn: 'root'
})
export class PostService {
constructor() { }
  // create a private property of type Post array 
  private posts: Post[] = [];
  // create an instance of Subject with generic type as Post array.
  private postUpdated = new Subject<Post[]>();

  // adding new post
  addPost(post: Post){
    this.posts.push(post);
    // call next() on subject - pass copy of posts array as argument.
    this.postUpdated.next([...this.posts]);
  }
  getPosts(){
    // return copy of post array, use spread operator, so changes only affected on its copy, 
    // not the original array
    return [...this.posts];
  }

  getPostUpdateListener(){
    // call asObservable method on postUpdated. which in turn returns an object.
    return this.postUpdated.asObservable();
  }
}  
