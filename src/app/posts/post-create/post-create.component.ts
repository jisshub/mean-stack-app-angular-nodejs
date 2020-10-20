import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor() { }
  newPost = "NO CONTENT";
  postValue: string ="";
  ngOnInit(): void {
  }
  onAddPost(){
    console.log(this.postValue);
    this.newPost = this.postValue;
  }

} 
