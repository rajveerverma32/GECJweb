// src/app/home/about-section.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero">
      <div class="overlay">
        <h2 class="subtitle">WELCOME TO</h2>
        <h1 class="title">GECJ SPORTS</h1>
        <p class="tagline">Where Passion Meets Performance</p>
        <button class="cta-btn">Explore More</button>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      height: 80vh;
      min-height: 350px;
      background: url('https://i.pinimg.com/1200x/fb/bc/4a/fbbc4a14de7d7a1e4d6c1a7aec93d7f0.jpg') no-repeat center center/cover;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: #fff;
      overflow: hidden;
      border-radius: 0 0 40px 40px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.18);
      transition: transform 0.5s cubic-bezier(.4,2,.6,1);
    }
    .hero:hover {
      transform: scale(1.025);
      box-shadow: 0 12px 40px rgba(0,0,0,0.25);
    }
    .hero::before {
      content: "";
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: linear-gradient(120deg, rgba(0,0,0,0.55) 60%, rgba(0,230,255,0.18) 100%);
      backdrop-filter: blur(3px);
      z-index: 0;
      transition: background 0.4s;
    }
    .hero:hover::before {
      background: linear-gradient(120deg, rgba(0,0,0,0.7) 60%, rgba(255,152,0,0.22) 100%);
    }
    .overlay {
      position: relative;
      z-index: 1;
      padding: 0 1.5rem;
      animation: fadeInUp 1.1s cubic-bezier(.4,2,.6,1) forwards;
    }
    .subtitle {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      letter-spacing: 4px;
      text-transform: uppercase;
      opacity: 0.92;
      text-shadow: 0 2px 8px rgba(0,0,0,0.18);
    }
    .title {
      font-size: 3.8rem;
      font-weight: 900;
      text-transform: uppercase;
      background: linear-gradient(90deg, #00e6ff 30%, #ff9800 70%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 0.5rem;
      letter-spacing: 2px;
      text-shadow: 0 4px 24px rgba(0,0,0,0.18);
    }
    .tagline {
      font-size: 1.3rem;
      font-weight: 400;
      opacity: 0.88;
      margin-bottom: 2rem;
      text-shadow: 0 2px 8px rgba(0,0,0,0.12);
    }
    .cta-btn {
      background: linear-gradient(135deg, #00e6ff, #ff9800);
      border: none;
      padding: 0.9rem 2.2rem;
      border-radius: 50px;
      font-size: 1.08rem;
      font-weight: 700;
      color: #fff;
      cursor: pointer;
      transition: all 0.25s cubic-bezier(.4,2,.6,1);
      box-shadow: 0 6px 18px rgba(0,0,0,0.22);
      letter-spacing: 1px;
    }
    .cta-btn:hover {
      background: linear-gradient(135deg, #ff9800, #00e6ff);
      transform: translateY(-4px) scale(1.04);
      box-shadow: 0 10px 28px rgba(0,0,0,0.28);
    }
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(30px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @media (max-width: 900px) {
      .hero { height: 45vh; }
      .title { font-size: 2.3rem; }
      .subtitle { font-size: 1.1rem; }
      .tagline { font-size: 1.05rem; }
      .cta-btn { padding: 0.7rem 1.3rem; font-size: 0.95rem; }
    }
    @media (max-width: 600px) {
      .hero { height: 32vh; min-height: 180px; border-radius: 0 0 18px 18px; }
      .title { font-size: 1.3rem; }
      .subtitle { font-size: 0.8rem; }
      .tagline { font-size: 0.8rem; }
      .cta-btn { padding: 0.5rem 0.8rem; font-size: 0.8rem; }
    }
  `]
})
export class AboutSectionComponent {}
