import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { AgGridModule } from 'ag-grid-angular';
import { ColorPickerModule } from 'ngx-color-picker';
import { LoadComponentDirective, UiBuilder } from 'ui-builder-library';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadComponentDirective.LoadComponentDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDnDModule.forRoot(),
    ColorPickerModule,
    AgGridModule,
    UiBuilder.AppModule,
  ],
  providers: [],
  exports:[ LoadComponentDirective.LoadComponentDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
