import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-stack-app';
  // empty array
  storedPosts:Array<Object> = [];
  // define function, get post 
  onPostAdded(post: Object){
    // push the received post object to posts Array
    this.storedPosts.push(post);
  }
}
