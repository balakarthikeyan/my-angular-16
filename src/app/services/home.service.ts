import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    private apiURL: string = environment.apiURL;
    books: Book[] = [];

    constructor(
        private http: HttpClient
    ) { }

    getApiBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(this.apiURL + '/books');
    }
}
