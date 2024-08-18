import { createReducer, on } from "@ngrx/store";
import { AddBook, RemoveBook, AddBookSuccess, AddBookFailure } from "./books.actions";
import { Book } from "../models/book";

// export const initialState: ReadonlyArray<Book> = [];
export const initialState: Book[] = [];

export const BookReducer = createReducer(
    initialState,
    on(AddBook, (state) => {return state}),
    on(AddBookSuccess, (state, { id, title, author, date }) => [...state, { id, title, author, date }]),
    on(AddBookFailure, (state, { error }) => {
        console.error(error);
        return state;
    }),
    on(RemoveBook, (state, { id }) => state.filter(book => book.id !== id)),
);