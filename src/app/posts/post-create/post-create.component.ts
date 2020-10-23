import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor() { }
  postTitle: string ="";
  postContent: string ="";
  // create ane event emitter -  add @Output to listen from outside
  @Output() postEvent = new EventEmitter<Post>();
  ngOnInit(): void {
  }
  onAddPost(form: NgForm){
    // create post object to store title and content
    const post: Post = {title: form.value.title, content: form.value.postContent};
    // emit the post object
    this.postEvent.emit(post);

    
  }

} 
