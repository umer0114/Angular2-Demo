import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Book } from '../book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  bookDetail: Book;
  editClicked: boolean;
  editMode: boolean;
  currentBook: Book;
  constructor(private sharedService: SharedService, private router: Router) { }

  ngOnInit() {
    this.bookDetail = this.sharedService.get();
    this.currentBook = Object.assign({}, this.bookDetail);

    if (!this.bookDetail) {
      this.router.navigate(['/books']);
    }
  }

  save (book: Book) {
    this.currentBook = book;
    this.editClicked = false;
    this.editMode = false;
  }

  discard () {
    this.editClicked = false;
    this.editMode = false;
    this.bookDetail = Object.assign({}, this.currentBook);
  }

  navigateToList() {
    this.router.navigate(['/books']);
  }

}
