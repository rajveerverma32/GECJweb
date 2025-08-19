
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutSectionComponent } from './home/about-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, AboutSectionComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularsports';
  constructor(private router: Router) {}
  isHomePage() {
    return this.router.url === '/home' || this.router.url === '/';
  }
}