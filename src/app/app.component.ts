import { Component } from '@angular/core';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CreateTicketComponent], // Import standalone komponenty
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }

