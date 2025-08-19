import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sport-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sport-detail-container">
      <h2>{{ sportTitle }}</h2>
      <div class="sport-detail-content">
        <img *ngIf="sportImg" [src]="sportImg" [alt]="sportTitle" class="sport-detail-img" />
        <p>{{ sportDescription }}</p>
      </div>
    </div>
  `,
  styles: [`
    .sport-detail-container {
      max-width: 700px;
      margin: 2.5rem auto;
      padding: 2rem 1.5rem;
      background: #fff;
      border-radius: 18px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.08);
      text-align: center;
    }
    .sport-detail-img {
      width: 120px;
      height: 120px;
      object-fit: contain;
      margin-bottom: 1.5rem;
    }
    .sport-detail-content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .sport-detail-container h2 {
      color: #00bcd4;
      font-size: 2rem;
      font-weight: 800;
      margin-bottom: 1.2rem;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    .sport-detail-container p {
      font-size: 1.15rem;
      color: #222;
      line-height: 1.7;
      margin: 0 auto;
      max-width: 500px;
    }
  `]
})
export class SportDetailComponent {
  sportTitle = '';
  sportImg = '';
  sportDescription = '';
  private sportData: any = {
    Basketball: {
      img: 'https://img.icons8.com/color/96/000000/basketball.png',
      desc: 'Basketball is a fast-paced team sport played on a rectangular court. Two teams of five players each try to score by shooting a ball through the opposing team’s hoop. It is known for its athleticism, teamwork, and exciting gameplay.'
    },
    Volleyball: {
      img: 'https://img.icons8.com/color/96/000000/volleyball.png',
      desc: 'Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team’s court under organized rules.'
    },
    Cricket: {
      img: 'https://img.icons8.com/color/96/000000/cricket.png',
      desc: 'Cricket is a bat-and-ball game played between two teams of eleven players. It is popular for its unique format, including Test, ODI, and T20 matches, and is known for its strategy and sportsmanship.'
    },
    'Kho-Kho': {
      img: 'https://img.icons8.com/external-flaticons-flat-flat-icons/96/external-kho-kho-indian-sports-flaticons-flat-flat-icons.png',
      desc: 'Kho-Kho is a traditional Indian tag sport played by two teams. It emphasizes speed, agility, and teamwork, with players chasing and tagging opponents in a fast-paced game.'
    },
    Kabaddi: {
      img: 'https://img.icons8.com/external-flaticons-flat-flat-icons/96/external-kabaddi-indian-sports-flaticons-flat-flat-icons.png',
      desc: 'Kabaddi is a contact team sport that originated in India. It involves two teams, where players take turns to raid the opponent’s half, tag defenders, and return safely to their own half.'
    },
    Badminton: {
      img: 'https://img.icons8.com/color/96/000000/badminton.png',
      desc: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. It can be played in singles or doubles and is known for its speed and agility.'
    },
    'Table Tennis': {
      img: 'https://img.icons8.com/color/96/000000/table-tennis.png',
      desc: 'Table Tennis, also known as ping-pong, is a sport in which two or four players hit a lightweight ball back and forth across a table using small rackets.'
    }
  };

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const name = decodeURIComponent(params['name'] || '').replace(/-/g, ' ');
      this.sportTitle = name;
      const data = this.sportData[name];
      if (data) {
        this.sportImg = data.img;
        this.sportDescription = data.desc;
      } else {
        this.sportImg = '';
        this.sportDescription = 'No details available for this sport.';
      }
    });
  }
}
