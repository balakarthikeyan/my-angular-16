import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    books: Book[] = [];

    constructor(private bookService: BookService) { }

    ngOnInit(): void {
        this.books = this.bookService.getBooks();
    }

    deleteBook(id: number) {
        this.bookService.deleteBook(id);
    }
}
