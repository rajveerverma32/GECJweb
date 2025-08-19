import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTimelinesComponent } from './event-timelines.component';

describe('EventTimelinesComponent', () => {
  let component: EventTimelinesComponent;
  let fixture: ComponentFixture<EventTimelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventTimelinesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventTimelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
