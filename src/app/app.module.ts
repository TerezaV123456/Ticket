import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Import module

import { AppComponent } from './app.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTicketComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Pro použití formGroup
    CommonModule, // Pro použití *ngIf
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
