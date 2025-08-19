import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sports',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule],
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {
  sports = [
    {
      name: 'Basketball',
      img: 'https://img.icons8.com/color/96/000000/basketball.png'
    },
    {
      name: 'Volleyball',
      img: 'https://img.icons8.com/color/96/000000/volleyball.png'
    },
    {
      name: 'Cricket',
      img: 'https://img.icons8.com/color/96/000000/cricket.png'
    },
    {
      name: 'Kho-Kho',
      img: 'https://img.icons8.com/external-flaticons-flat-flat-icons/96/external-kho-kho-indian-sports-flaticons-flat-flat-icons.png'
    },
    {
      name: 'Kabaddi',
      img: 'https://img.icons8.com/external-flaticons-flat-flat-icons/96/external-kabaddi-indian-sports-flaticons-flat-flat-icons.png'
    },
    {
      name: 'Badminton',
      img: 'https://img.icons8.com/color/96/000000/badminton.png'
    },
    {
      name: 'Table Tennis',
      img: 'https://img.icons8.com/color/96/000000/table-tennis.png'
    }
  ];
}
