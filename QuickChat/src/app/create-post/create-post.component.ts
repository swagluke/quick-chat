import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss','../shared/common.scss']
})
export class CreatePostComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
