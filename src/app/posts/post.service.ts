import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './post.model';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(public http: HttpClient) { }
  // create a private property of type Post array 
  private posts: Post[] = [];
  // create an instance of Subject with generic type as Post array.
  private postUpdated = new Subject<Post[]>();

  getPosts(){
    // return copy of post array, use spread operator, so changes only affected on its copy, 
    // not the original array
    this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts')
      .subscribe((postData) => {
        this.posts = postData.posts;
        console.log(this.posts);

        this.postUpdated.next([...this.posts]);
        
      })
  }

  getPostUpdateListener(){
    // call asObservable method on postUpdated. which in turn returns an object.
    return this.postUpdated.asObservable();
  }
    // adding new post
  addPost(title: string, content: string){
    const post: Post = {id: null, title: title, content: content};
    this.posts.push(post);
    // call next() on subject - pass copy of posts array as argument.
    this.postUpdated.next([...this.posts]);
  }
}  
