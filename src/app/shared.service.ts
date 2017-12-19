import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable()
export class SharedService {
  book: Book;
  add(object: Book) {
    this.book = object;
  }
  get() {
    return this.book;
  }

  constructor() { }

}
