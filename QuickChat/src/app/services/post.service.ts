import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Post } from '../models/post.model';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
  readonly postsPath = "posts";
  private postsStream: FirebaseListObservable<Post[]>;

  constructor(private af: AngularFire) { 
    this.postsStream = this.af.database.list(this.postsPath);
  }

  add(post: Post) {
    this.postsStream.push(post);
  }
}
