import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormComponent } from './book-form.component';

describe('BookFormComponent', () => {
    let component: BookFormComponent;
    let fixture: ComponentFixture<BookFormComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BookFormComponent]
        });
        fixture = TestBed.createComponent(BookFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
