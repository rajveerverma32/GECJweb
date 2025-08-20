import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-honours',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule],
  template: `
    <div class="honours-container">
      <a *ngFor="let honour of honours" [routerLink]="['/honours', honour]" class="honour-link">
        <mat-card class="honour-card">
          <div class="honour-title">{{ honour }}</div>
        </mat-card>
      </a>
    </div>
  `,
  styles: [`
    .honours-container {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      min-height: 60vh;
      padding: 2.5rem 1rem;
    }
    .honour-link {
      text-decoration: none;
      display: contents;
    }
    .honour-card {
      min-width: 220px;
      min-height: 160px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 700;
      color: #ff6b6b;
      background: #232b3e;
      border-radius: 18px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.12);
      transition: transform 0.18s, box-shadow 0.18s;
      cursor: pointer;
    }
    .honour-card:hover {
      transform: translateY(-6px) scale(1.04);
      box-shadow: 0 8px 32px rgba(255,107,107,0.18);
    }
    .honour-title {
      text-align: center;
      width: 100%;
    }
    @media (max-width: 700px) {
      .honours-container { gap: 1rem; }
      .honour-card { min-width: 140px; min-height: 100px; font-size: 1.1rem; }
    }
  `]
})
export class HonoursComponent {
  honours = ['Sporion', 'Sporion 1', 'Sporion 2', 'Sporion 3'];
}
