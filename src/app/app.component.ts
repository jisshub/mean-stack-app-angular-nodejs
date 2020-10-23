import { Component } from '@angular/core';
import { Post } from './posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-stack-app';
  // empty array
  storedPosts:Post[] = [];
  // define function, get post 
  onPostAdded(post){
    // push the received post object to posts Array
    this.storedPosts.push(post);
  }
}
