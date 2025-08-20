import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-council-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <div class="council-detail-bg">
      <mat-card class="council-detail-card">
        <div class="council-detail-title">Sports Coordinator </div>
        <div class="council-detail-img-wrap">
          <img class="council-detail-img" src="https://i.ibb.co/6bQ7QpK/gsport.jpg" alt="General Secretary Sports Affairs" />
        </div>
        <div class="council-detail-name">Rajveer verma </div>
        <div class="council-detail-call"><b>Call:</b> 8302186985</div>
        <div class="council-detail-icons">
          <a href="https://www.instagram.com/rajveer____.01" target="_blank" aria-label="Instagram"><img src="https://img.icons8.com/ios-filled/40/7eeaff/instagram-new.png" alt="Instagram" /></a>
          <a href="mailto:rajveerverma99830@gmail.com" aria-label="Email"><img src="https://img.icons8.com/ios-filled/40/7eeaff/new-post.png" alt="Email" /></a>
        </div>
      </mat-card>
    </div>
  `,
  styles: [`
    .council-detail-bg {
      min-height: 100vh;
      /* background will be set by theme class on body */
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem 0;
    }
    .council-detail-card {
      /* background will be set by .mat-card and theme class */
      border-radius: 32px;
      box-shadow: 0 8px 40px rgba(0,0,0,0.22);
      padding: 2.5rem 2.2rem 2.2rem 2.2rem;
      max-width: 420px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .council-detail-title {
      color: #ff5252;
      font-size: 2rem;
      font-weight: 800;
      text-align: center;
      margin-bottom: 1.5rem;
    }
    .council-detail-img-wrap {
      border-radius: 50%;
      border: 5px solid #ff5252;
      box-shadow: 0 0 32px 0 #ff525244;
      padding: 6px;
      margin-bottom: 1.5rem;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 180px;
      height: 180px;
    }
    .council-detail-img {
      width: 160px;
      height: 160px;
      object-fit: cover;
      border-radius: 50%;
      display: block;
    }
    .council-detail-name {
      /* color will be set by theme */
      font-size: 1.35rem;
      font-weight: 700;
      margin-bottom: 0.7rem;
      text-align: center;
    }
    .council-detail-call {
      /* color will be set by theme */
      font-size: 1.1rem;
      font-weight: 500;
      margin-bottom: 1.2rem;
      text-align: center;
    }
    .council-detail-call b {
      /* color will be set by theme */
      font-weight: 800;
    }
    .council-detail-icons {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      margin-top: 0.7rem;
    }
    .council-detail-icons img {
      width: 36px;
      height: 36px;
      filter: drop-shadow(0 2px 8px #2226);
      transition: transform 0.18s;
    }
    .council-detail-icons img:hover {
      transform: scale(1.13) translateY(-2px);
    }
    @media (max-width: 600px) {
      .council-detail-card { padding: 1.2rem 0.5rem; }
      .council-detail-title { font-size: 1.2rem; }
      .council-detail-img-wrap { width: 120px; height: 120px; }
      .council-detail-img { width: 100px; height: 100px; }
    }
  `]
})
export class CouncilDetailComponent {}
