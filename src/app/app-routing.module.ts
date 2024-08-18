import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'calc', component: CalculatorComponent },
    { path: 'book', component: BookComponent },
    { path: 'new', component: BookFormComponent },
    { path: 'list', component: BookListComponent },
    { path: "edit/:id", component: BookFormComponent },
    { path: "products", component: ProductListComponent },
    { path: "books", component: BooksComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
