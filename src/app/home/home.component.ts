import { Component } from '@angular/core';
import { AboutSectionComponent } from './about-section.component';

@Component({
  selector: 'app-home',
  imports: [AboutSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
