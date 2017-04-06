import { Post } from '../models/post.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css','../shared/common.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  
  constructor() { }

  ngOnInit() {
  }

}
