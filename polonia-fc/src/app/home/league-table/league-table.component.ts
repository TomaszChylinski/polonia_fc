
import { Component, OnInit } from '@angular/core';
import { cslStandings, over30Standings, over40Standings } from './standings-constants';



@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.scss'],


})
export class LeagueTableComponent implements OnInit {

  readonly cslLeague = cslStandings;
  readonly over30Standings = over30Standings;
  readonly over40Standings = over40Standings;

  constructor() {
  }

  ngOnInit() {
  }
}
