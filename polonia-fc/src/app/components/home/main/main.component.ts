import { Component, OnInit } from '@angular/core';
import { TeamLogos } from '../../shared/data/teamLogoData';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  teamLogos = TeamLogos;
  constructor() {}

  ngOnInit() {}
}
