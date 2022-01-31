import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Author } from '../models/author';
import { AUTHORS } from '../mockAuthors';

@Injectable()
export class AuthorsService {
  private authors: Author[];

  constructor() {
    this.authors = AUTHORS;
  }

  public getAllAuthors(): Observable<Author[]> {
    return of(this.authors);
  }

  public getAuthorsByIds(ids: number[]): Observable<Author[]> {
    const authors = this.authors.filter(author => ids.indexOf(author.id) > -1);

    return of(authors);
  }

  public excludeAuthorsByIds(ids: number[]): Observable<Author[]> {
    const authors = this.authors.filter(author => ids.indexOf(author.id) === -1);

    return of(authors);
  }

  public getAuthor(id: number): Observable<Author> {
    const author = this.authors.find(author => author.id === id);

    return of(author || ({} as Author));
  }
}
