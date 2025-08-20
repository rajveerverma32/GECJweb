import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-honour-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="honour-detail-container">
      <h2 class="honour-detail-title">{{ honourName }}</h2>
      <div class="honour-detail-gallery">
        <img *ngFor="let img of images" [src]="img" class="honour-detail-img" alt="Sport photo" />
      </div>
    </div>
  `,
  styles: [`
    .honour-detail-container {
      max-width: 900px;
      margin: 2.5rem auto;
      padding: 2rem 1.5rem;
      background: #232b3e;
      border-radius: 18px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.12);
      text-align: center;
    }
    .honour-detail-title {
      color: #ff6b6b;
      font-size: 2.2rem;
      font-weight: 800;
      margin-bottom: 2rem;
    }
    .honour-detail-gallery {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      justify-content: center;
    }
    .honour-detail-img {
      width: 220px;
      height: 150px;
      object-fit: cover;
      border-radius: 12px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.10);
      background: #fff;
    }
    @media (max-width: 700px) {
      .honour-detail-img { width: 120px; height: 80px; }
    }
  `]
})
export class HonourDetailComponent {
  honourName = '';
  images: string[] = [];
  private static honourImages: Record<string, string[]> = {
    'Sporion': [
      'https://images.unsplash.com/photo-1505843276871-1b43c1d982c9?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
    ],
    'Sporion 1': [
      'https://images.unsplash.com/photo-1505843276871-1b43c1d982c9?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80'
    ],
    'Sporion 2': [
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80'
    ],
    'Sporion 3': [
      'https://images.unsplash.com/photo-1505843276871-1b43c1d982c9?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
    ]
  };

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.honourName = decodeURIComponent(params['name'] || 'Honour');
      this.images = HonourDetailComponent.honourImages[this.honourName] || [];
    });
  }
}
