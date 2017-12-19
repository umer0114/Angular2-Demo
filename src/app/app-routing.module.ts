import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

const routes: Routes = [
  { path: 'books', component: BookComponent },
  { path: 'book-detail/:id', component: BookDetailComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full'  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
