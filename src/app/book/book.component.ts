import { Component, OnInit } from '@angular/core';
import { MockBooks } from '../mock-books';
import { Book } from '../book';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books = MockBooks;
  constructor(private sharedService: SharedService, private router: Router) { }

  onSelect(currentBook: Book): void {
    this.sharedService.add(currentBook);
    this.router.navigate(['/book-detail', currentBook.id]);
  }
  ngOnInit() {
    this.sortBooks();
  }

  sortBooks () {
    this.books.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
  }

}
