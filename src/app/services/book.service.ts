import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
    providedIn: 'root'
})
export class BookService {

    private books: Book[] = [];

    constructor() {
        let savedBooks = localStorage.getItem("books")
        this.books = savedBooks ? JSON.parse(savedBooks) : []
    }

    getBooks(): Book[] {
        return this.books;
    }

    getBook(id: number): Book | undefined {
        return this.books.find(res => res.id === id);
    }

    addBook(book: Book): void {
        book.id = Date.now();
        book.date = new Date();
        this.books.push(book);
        // console.log(this.books);
        localStorage.setItem("books", JSON.stringify(this.books));
    }

    deleteBook(id: number): void {
        let index = this.books.findIndex(res => res.id === id);
        this.books.splice(index, 1)
        // console.log(this.books);
        localStorage.setItem("books", JSON.stringify(this.books));
    }

    updateBook(id: number, updatedBook: Book): void {
        let index = this.books.findIndex(res => res.id === id);
        updatedBook.id = Date.now();
        updatedBook.date = new Date();
        this.books[index] = updatedBook;
        // console.log(this.books);
        localStorage.setItem("books", JSON.stringify(this.books));
    }

}
