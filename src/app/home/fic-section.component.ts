import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fic-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="fic-section">
      <div class="fic-content">
        <h2 class="fic-title">From FIC</h2>
        <div class="fic-underline"></div>
        <p class="fic-para">
          The Office of Training & Placement (OTP) works tirelessly, ensuring fruitful career for students, across various industries and helping individual’s endeavour to be a successful entrepreneur. Our students are provided with good facilities and enjoy a healthy environment so that they fully imbibe the concepts and thereby manifest their knowledge in the real world. I sincerely thank all the companies/ industries that visited our campus for recruitment and internship. We in OTP, will continue its efforts in this direction by facilitating industrial training/ internships, and inviting companies/institutions/ organizations of repute for placement.
        </p>
      </div>
      <div class="fic-image-wrap">
        <img class="fic-image" src="https://i.ibb.co/6bQ7QpK/gsport.jpg" alt="FIC Logo" />
      </div>
    </section>
  `,
  styles: [`
    .fic-section {
      max-width: 900px;
      margin: 3rem auto 2rem auto;
      padding: 2rem 1.5rem;
      background: #fff;
      border-radius: 18px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.08);
      text-align: center;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 2.5rem;
    }
    .fic-content {
      flex: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .fic-title {
      color: #00bcd4;
      font-size: 2.2rem;
      font-weight: 800;
      text-align: center;
      margin-bottom: 1rem;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    .fic-underline {
      width: 180px;
      height: 6px;
      background: #00bcd4;
      border-radius: 4px;
      margin-bottom: 2.5rem;
      margin-left: auto;
      margin-right: auto;
    }
    .fic-para {
      color: #222;
      font-size: 1.15rem;
      text-align: center;
      line-height: 1.7;
      margin: 0 auto 1.5rem auto;
      max-width: 900px;
    }
    .fic-image-wrap {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      border-radius: 18px;
      padding: 0;
      min-width: 180px;
      min-height: 180px;
      max-width: 200px;
      max-height: 200px;
    }
    .fic-image {
      width: 100%;
      height: auto;
      max-width: 140px;
      max-height: 140px;
      display: block;
      border-radius: 12px;
    }
    @media (max-width: 900px) {
      .fic-section {
        flex-direction: column;
        padding: 1.2rem 0.5rem;
        gap: 1.5rem;
      }
      .fic-title { font-size: 2rem; }
      .fic-image-wrap { min-width: 120px; min-height: 120px; max-width: 140px; max-height: 140px; }
      .fic-image { max-width: 100px; max-height: 100px; }
      .fic-para { font-size: 1rem; }
    }
  `]
})
export class FicSectionComponent {}
