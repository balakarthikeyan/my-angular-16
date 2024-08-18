import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { BookModule } from './book/book.module';
import { MenuModule } from './menu/menu.module';
import { CalculatorComponent } from './calculator/calculator.component';
import { BookComponent } from './book/book.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductModule } from './product/product.module';
import { StoreModule } from '@ngrx/store';
import { BookReducer } from './books/books.reducer';
import { AppState } from './app.state';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './books/books.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
	declarations: [
		AppComponent,
		CalculatorComponent,
		BookComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		MenuModule,
		HomeModule,
		BookModule,
		ProductModule,
		HttpClientModule,
		BrowserAnimationsModule,
		StoreModule.forRoot<AppState>({ book: BookReducer }),
		EffectsModule.forRoot([BookEffects]),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
