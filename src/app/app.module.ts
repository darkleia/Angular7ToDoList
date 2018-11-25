import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppComponent } from './app.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { ToDoItemsListComponent } from './to-do-items-list/to-do-items-list.component';
import { AddToDoItemComponent } from './add-to-do-item/add-to-do-item.component';
import { TodayToDoPipe } from './pipes/today-to-do.pipe';
import {MatNativeDateModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ToDoItemComponent,
    ToDoItemsListComponent,
    AddToDoItemComponent,
    TodayToDoPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatBottomSheetModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [MatNativeDateModule],
  bootstrap: [AppComponent],
  entryComponents: [AddToDoItemComponent]
})
export class AppModule { }
