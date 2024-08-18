import { Component } from '@angular/core';
import { Book } from '../models/book';
import { OnInit } from '@angular/core';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

    newBookTitle: string = "";
    newBookAuthor: string = "";
    newBookDate: Date = new Date();

    books: Book[] = []

    ngOnInit(): void {
        let savedBooks = localStorage.getItem("books")
        this.books = savedBooks ? JSON.parse(savedBooks) : []
    }

    addBook() {
        if (this.newBookTitle.trim().length && this.newBookAuthor.trim().length) {
            let newBook: Book = {
                id: Date.now(),
                title: this.newBookTitle,
                author: this.newBookAuthor,
                date: new Date()
            }

            this.books.push(newBook)

            this.newBookTitle = "";
            this.newBookAuthor = "";
            this.newBookDate = new Date();

            localStorage.setItem("books", JSON.stringify(this.books))
        }
    }

    deleteBook(index: number) {
        this.books.splice(index, 1)
        localStorage.setItem("books", JSON.stringify(this.books))
    }

}
