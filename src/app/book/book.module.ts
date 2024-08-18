import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookFormComponent } from '../book-form/book-form.component';
import { BookListComponent } from '../book-list/book-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';
import { BooksComponent } from '../books/books.component';

@NgModule({
    declarations: [
        BookFormComponent,
        BookListComponent,
        BooksComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HomeModule
    ]
})
export class BookModule { }
