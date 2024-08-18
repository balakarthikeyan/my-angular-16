import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Book } from '../models/book';
import { AddBook, RemoveBook } from './books.actions';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css']
})
export class BooksComponent {

    books$: Observable<Book[]>;

    constructor(
        // private store: Store<{ book: Book[] }>
        private store: Store<AppState>
    ) {
        this.books$ = store.pipe(select('book'));
    }

    addBook(title: string, author: string) {
        let id = Date.now();
        let date = new Date();
        this.store.dispatch(AddBook({ id, title, author, date }));
    }

    removeBook(id: number) {
        this.store.dispatch(RemoveBook({ id }));
    }
}
