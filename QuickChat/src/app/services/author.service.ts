import { Author } from '../models/author.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {
  readonly authorPath = "authors";

  public authorMapStream: FirebaseObjectObservable<Map<string, Author>>;

  constructor(private af: AngularFire) {
    this.authorMapStream = this.af.database.object(`/${this.authorPath}`);
   }

  updateAuthor(authorKey: string, displayName: string, photoUrl: string): void {
    const author = new Author({
      displayName: displayName,
      photoUrl: photoUrl
    });
    this.af.database.object(`/${this.authorPath}/${authorKey}`).set(author);
  }
}
