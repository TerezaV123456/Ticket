import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common'; // Import NgIf
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-create-ticket',
  standalone: true, // Označení jako standalone
  imports: [ReactiveFormsModule, NgIf, FontAwesomeModule], // Import modulu pro formuláře a *ngIf
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent {
  ticketForm: FormGroup; // Deklarace ticketForm

  constructor(private fb: FormBuilder) {
    // Inicializace formuláře
    this.ticketForm = this.fb.group({
      name: ['', Validators.required],
      description: ['']
    });
  }

  onSubmit() {
    if (this.ticketForm.valid) {
      console.log(this.ticketForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
