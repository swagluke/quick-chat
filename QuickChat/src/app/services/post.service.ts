import { Author } from '../models/author.model';
import { AuthorService } from './author.service';
import { Observable } from 'rxjs';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Post, PostWithAuthor } from '../models/post.model';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
  readonly postsPath = "posts";
  public postsWithAuthorStream: Observable<PostWithAuthor[]>;
  constructor(private af: AngularFire, private authorService: AuthorService) {
    const postsStream: FirebaseListObservable<Post[]> = this.af.database.list(this.postsPath);
    this.postsWithAuthorStream = Observable.combineLatest<PostWithAuthor[]>(
      postsStream,
      this.authorService.authorMapStream,
      (posts: Array<Post>, authorMap: Map<string, Author>)  => {
        const postsWithAuthors: PostWithAuthor[] = [];
        // console.log("posts:", posts);
        // console.log("authorMap:", authorMap);
        for (let post of posts) {
          const postWithAuthor = new PostWithAuthor(post);
          postWithAuthor.author = authorMap[post.authorKey];
          postsWithAuthors.push(postWithAuthor);
        }
        return postsWithAuthors;
      }
    )
  }

  // get postsStream(): FirebaseListObservable<Post[]>{
  //   return this._postsStream;
  // }

  add(post: Post) {
    // this._postsStream.push(post);
    console.log("TODO: push the post using the standard Firebase JS API");
  }
}
