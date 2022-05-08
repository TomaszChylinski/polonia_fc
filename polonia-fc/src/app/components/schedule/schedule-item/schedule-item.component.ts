import { Component, Input, OnInit } from '@angular/core';
import {
  UpcomingGames,
  PastResults,
} from 'src/app/components/shared/data/schedule-data';

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss'],
})
export class ScheduleItemComponent implements OnInit {
  upcomingGames = UpcomingGames;
  pastResults = PastResults;

  @Input() scheduleItems;

  displayUpcomingFixtures: boolean = true;

  constructor() {}

  ngOnInit() {}
}
