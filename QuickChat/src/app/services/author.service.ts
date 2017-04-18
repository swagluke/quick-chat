import { Author } from '../models/author.model';
import { AngularFire } from 'angularfire2';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {
  readonly authorPath = "authors";

  constructor(private af: AngularFire) { }

  updateAuthor(authorKey: string, displayName: string, photoUrl: string): void {
    const author = new Author({
      displayName: displayName,
      photoUrl: photoUrl
    });
    this.af.database.object(`/${this.authorPath}/${authorKey}`).set(author);
  }
}
