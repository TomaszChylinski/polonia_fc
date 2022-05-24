import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  UpcomingGames,
  PastGames,
} from 'src/app/components/shared/data/schedule-data';

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss'],
})
export class ScheduleItemComponent implements OnInit, OnChanges {
  upcomingGames = UpcomingGames;
  pastGames = PastGames;

  @Input() displaySchedule: boolean;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {}
}
