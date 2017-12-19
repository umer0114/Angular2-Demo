import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {Ng2PaginationModule} from 'ng2-pagination';
import { AppRoutingModule } from './/app-routing.module';
import { SharedService } from './shared.service';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2PaginationModule,
    AppRoutingModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
