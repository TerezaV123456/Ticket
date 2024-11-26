import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Import module

import { AppComponent } from './app.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { SeeTicketComponent } from './see-ticket/see-ticket.component'; // Přidání SeeTicketComponent
import { DashboardComponent } from './dashboard/dashboard.component'; // Přidání DashboardComponent
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CreateTicketComponent,
    SeeTicketComponent, // Deklarace SeeTicketComponent
    DashboardComponent  // Deklarace DashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Pro použití formGroup
    CommonModule, // Pro použití *ngIf
    FontAwesomeModule,
    AppRoutingModule // Pro použití routingu
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
