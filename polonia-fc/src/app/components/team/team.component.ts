import { Component, OnInit } from '@angular/core';
import { playerData } from 'src/app/components/shared/data/player-data';
import { PlayerInfo } from 'src/app/components/shared/models/playerInfo';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  goalkeeperInfo: PlayerInfo[] = playerData.filter(item => item.position === 'gk');
  defenderInfo: PlayerInfo[] = playerData.filter(item => item.position === 'def');
  midfielderInfo: PlayerInfo[] = playerData.filter(item => item.position === 'mid');
  fowardInfo: PlayerInfo[] = playerData.filter(item => item.position === 'atk');
  constructor() {}

  ngOnInit() {}
}
