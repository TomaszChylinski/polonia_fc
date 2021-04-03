import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  upComingSchedule = [
    {
      id: 1,
      category: 'over30',
      homeTeam: 'O30 FC Polonia',
      guestTeam: 'Danbury United',
      date: 'Tuesday 9 March 2021',
      time: '15:00'
    },
    {
      id: 2,
      category: 'open',
      homeTeam: 'FC Polonia',
      guestTeam: 'Danbury United',
      date: 'Tuesday 9 March 2021',
      time: '15:00'
    },
    {
      id: 3,
      category: 'over30',
      homeTeam: 'O30 FC Polonia',
      guestTeam: 'Danbury United',
      date: 'Tuesday 9 March 2021',
      time: '15:00'
    },
    {
      id: 4,
      category: 'over30',
      homeTeam: 'FC Polonia',
      guestTeam: 'Danbury United',
      date: 'Tuesday 9 March 2021',
      time: '15:00'
    },
    {
      id: 5,
      category: 'polonez',
      homeTeam: 'SC Polonez',
      guestTeam: 'Danbury United',
      date: 'Tuesday 9 March 2021',
      time: '15:00'
    },
    {
      id: 6,
      category: 'polonez',
      homeTeam: 'SC Polonez',
      date: 'Tuesday 9 March 2021',
      time: '15:00'
    },
    {
      id: 7,
      category: 'polonez',
      homeTeam: 'SC Polonez',
      date: 'Tuesday 9 March 2021',
      time: '15:00'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

// schedule has to be all together wth a special identifier that i will be able to use to disnguish which team its for
