import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Post } from '../models/post.model';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
  readonly postsPath = "posts";
  private _postsStream: FirebaseListObservable<Post[]>;

  constructor(private af: AngularFire) { 
    this._postsStream = this.af.database.list(this.postsPath);
  }

  get postsStream(): FirebaseListObservable<Post[]>{
    return this._postsStream;
  }
  add(post: Post) {
    this._postsStream.push(post);
  }
}
