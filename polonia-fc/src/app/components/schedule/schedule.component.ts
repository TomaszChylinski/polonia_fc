import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class MainScheduleComponent implements OnInit {
  currentFixtures: boolean = true;
  constructor() {}

  ngOnInit() {}

  switchScheduleView() {
    this.currentFixtures = !this.currentFixtures;
  }
}
