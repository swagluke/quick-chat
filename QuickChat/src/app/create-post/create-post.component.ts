import { PostService } from './../services/post.service';
import { Post } from '../models/post.model';
import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss', '../shared/common.scss']
})
export class CreatePostComponent implements OnInit {
  [name: string]: any;
  postBody: string;

  constructor(
    public authService: AuthService,
    private postService: PostService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    try {
      const post = new Post({ 
        postBody: this.postBody, 
        authorKey: this.authService.currentUserUid 
      });
      this.postService.add(post);
      this.postBody = "";
    } catch (e) {
      console.log("Error on submit", e);
    }
  }

}
