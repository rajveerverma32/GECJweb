
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

interface EventTimeline {
  sport: string;
  events: { name: string; time: string; location: string }[];
}

@Component({
  selector: 'app-events-timeline',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './event-timelines.component.html',
  styleUrls: ['./event-timelines.component.css']
})
export class EventsTimelineComponent {
  timelines: EventTimeline[] = [
    {
      sport: 'Basketball',
      events: [
        { name: 'Quarter Finals', time: '10:00 AM - 11:30 AM', location: 'Court 1' },
        { name: 'Semi Finals', time: '12:00 PM - 1:30 PM', location: 'Court 1' },
        { name: 'Final', time: '3:00 PM - 4:00 PM', location: 'Court 1' }
      ]
    },
    {
      sport: 'Volleyball',
      events: [
        { name: 'Group Stage', time: '9:00 AM - 10:30 AM', location: 'Court 2' },
        { name: 'Final', time: '2:00 PM - 3:00 PM', location: 'Court 2' }
      ]
    },
    {
      sport: 'Cricket',
      events: [
        { name: 'League Match', time: '8:00 AM - 11:00 AM', location: 'Ground' },
        { name: 'Final', time: '1:00 PM - 4:00 PM', location: 'Ground' }
      ]
    },
    {
      sport: 'Kho-Kho',
      events: [
        { name: 'Elimination', time: '10:00 AM - 11:00 AM', location: 'Field 1' },
        { name: 'Final', time: '12:00 PM - 1:00 PM', location: 'Field 1' }
      ]
    },
    {
      sport: 'Kabaddi',
      events: [
        { name: 'Knockout', time: '11:00 AM - 12:00 PM', location: 'Field 2' },
        { name: 'Final', time: '2:00 PM - 3:00 PM', location: 'Field 2' }
      ]
    },
    {
      sport: 'Badminton',
      events: [
        { name: 'Singles', time: '9:00 AM - 10:00 AM', location: 'Indoor Hall' },
        { name: 'Doubles', time: '11:00 AM - 12:00 PM', location: 'Indoor Hall' }
      ]
    },
    {
      sport: 'Table Tennis',
      events: [
        { name: 'Round Robin', time: '10:00 AM - 11:30 AM', location: 'TT Room' },
        { name: 'Final', time: '1:00 PM - 2:00 PM', location: 'TT Room' }
      ]
    }
  ];
}
