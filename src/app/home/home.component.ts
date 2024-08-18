import { Component, OnInit, signal, effect, computed } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Book } from '../models/book';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    theme = signal('light');
    label = this.theme();
    price = 10;
    quantity = signal(1);
    totalPrice = computed(() => this.price * this.quantity())
    books: Book[] = [];

    constructor(
        private homeService: HomeService
    ) {
        effect(() => {
            this.label = this.theme();
        });
    }

    ngOnInit() {
        this.theme.set('dark');
        this.homeService.getApiBooks().subscribe(mybooks => {
            this.books = mybooks;
        });
    }

    toggleMode() {
        this.theme.update(curValue => curValue === 'light' ? 'dark' : 'light');
        // document.body.className = this.theme();
    }

    changeQuantity(event: Event) {
        this.quantity.set((event.target as HTMLInputElement).valueAsNumber)
    }

    onSubmit(event: any) {
        event.preventDefault();
        console.log(event.target.customerName.value);
    }
}
