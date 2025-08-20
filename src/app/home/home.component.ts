import { Component } from '@angular/core';
import { AboutSectionComponent } from './about-section.component';
import { FicSectionComponent } from './fic-section.component';

@Component({
  selector: 'app-home',
  imports: [AboutSectionComponent, FicSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
