import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss']
})
export class ScheduleItemComponent implements OnInit {
@Input() scheduleItems;

  constructor() { }

  ngOnInit(): void {
  }

}
