import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsCouncilCardComponent } from './contact-us-council-card.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ContactUsCouncilCardComponent],
  template: `
    <app-contact-us-council-card></app-contact-us-council-card>
  `
})
export class ContactComponent {}
