import { PostService } from '../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss','../shared/common.scss']
})
export class PostListComponent implements OnInit {

  constructor(public postService: PostService) {
    
   }

  ngOnInit() {
  }

}
