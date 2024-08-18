import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { MatCardModule } from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    declarations: [
        ProductListComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        FlexModule,
        MatToolbarModule,
        MatButtonModule,
        MatSnackBarModule,
        MatInputModule,
        MatSelectModule
    ]
})
export class ProductModule { }
