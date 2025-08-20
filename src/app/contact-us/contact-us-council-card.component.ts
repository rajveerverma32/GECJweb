import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us-council-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="council-contact-section">
      <h2 class="council-title">Institute Sports Council</h2>
      <div class="council-underline"></div>
      <div class="council-card">
        <div class="council-row">
          <span class="council-icon">📧</span>
          <span class="council-text">class.of.abhi&#64;gmail.com</span>
        </div>
      </div>
      <div class="council-card">
        <div class="council-row">
          <span class="council-icon">📞</span>
          <span class="council-text">+91 9252519997</span>
        </div>
      </div>
      <div class="council-card">
  <button class="council-btn" (click)="goToCouncilDetail()">DISCOVER THE COUNCIL</button>
      </div>
    </section>
  `,
  styles: [`
    .council-contact-section {
      min-height: 100vh;
      background: #0a1224;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 1rem;
    }
    .council-title {
      color: #7eeaff;
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 0.5rem;
      text-align: center;
    }
    .council-underline {
      width: 180px;
      height: 6px;
      background: #7eeaff;
      border-radius: 4px;
      margin-bottom: 2.5rem;
    }
    .council-card {
      background: rgba(36, 49, 74, 0.85);
      border-radius: 28px;
      box-shadow: 0 6px 32px rgba(0,0,0,0.18);
      margin-bottom: 2rem;
      width: 100%;
      max-width: 700px;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 90px;
      transition: box-shadow 0.2s;
    }
    .council-row {
      display: flex;
      align-items: center;
      gap: 1.2rem;
      font-size: 1.45rem;
      color: #fff;
      font-weight: 600;
      padding: 1.2rem 2.2rem;
      width: 100%;
      justify-content: center;
    }
    .council-icon {
      font-size: 2.1rem;
      color: #7eeaff;
      display: flex;
      align-items: center;
    }
    .council-btn {
      background: linear-gradient(90deg, #3b82f6 0%, #a78bfa 100%);
      color: #fff;
      font-size: 1.25rem;
      font-weight: 700;
      border: none;
      border-radius: 16px;
      padding: 1.1rem 2.8rem;
      margin: 1.2rem 0;
      cursor: pointer;
      box-shadow: 0 4px 18px rgba(0,0,0,0.18);
      transition: background 0.2s, transform 0.2s;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    .council-btn:hover {
      background: linear-gradient(90deg, #a78bfa 0%, #3b82f6 100%);
      transform: translateY(-2px) scale(1.04);
    }
    @media (max-width: 700px) {
      .council-title { font-size: 2.1rem; }
      .council-card { min-height: 70px; }
      .council-row { font-size: 1.1rem; padding: 0.8rem 1rem; }
      .council-btn { font-size: 1rem; padding: 0.7rem 1.2rem; }
    }
  `]
})
export class ContactUsCouncilCardComponent {
  constructor(private router: Router) {}
  goToCouncilDetail() {
    this.router.navigate(['/contact-us/council-detail']);
  }
}
