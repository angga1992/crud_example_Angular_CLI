import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DataFilterPipe} from "./data-filter.pipe";
import { AppComponent } from './app.component';
import {DataTableModule} from "angular2-datatable";
import { MaterialModule } from '@angular/material';
import { DatepickerModule } from 'angular2-material-datepicker';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DataFilterPipe
  ],
  imports: [
    MaterialModule.forRoot(),
    DatepickerModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

