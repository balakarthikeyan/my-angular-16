import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-book-form',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

    bookForm: FormGroup = new FormGroup({});

    constructor(
        private formBuilder: FormBuilder,
        private bookService: BookService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {

    }

    ngOnInit(): void {

        this.bookForm = this.formBuilder.group({
            title: ['', Validators.required],
            author: ['', Validators.required]
        })

        let id = this.activatedRoute.snapshot.paramMap.get('id');

        if (id) {
            let book = this.bookService.getBook(Number(id))

            if (book)
                this.bookForm.patchValue(book)
        }
    }

    onSubmit() {
        if (this.bookForm.valid) {
            // console.log('Valid');

            let book: Book = this.bookForm.value;
            let id = this.activatedRoute.snapshot.paramMap.get('id');

            if (id) {
                // Update
                this.bookService.updateBook(Number(id), book)
            } else {
                // New
                this.bookService.addBook(book);
            }

            this.router.navigate(['/list'])
        }
    }
}
