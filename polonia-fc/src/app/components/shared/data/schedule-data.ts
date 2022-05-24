import { GameInfo } from '../models/gameInfo';
import { TeamLogos } from './teamLogoData';

const teamLogo = TeamLogos;

export const UpcomingGames: GameInfo[] = [
  {
    date: 'June 5, 2022',
    homeTeam: 'CLINTON FC 30',
    awayTeam: 'POLONIA FALCON FC',
    leagueType: 'Shoreline Soccer Leauge',
    gameDetail: '8:00 AM 	Strong Field (T), Madison',
    homeImgLogo: teamLogo.clintonFc,
    awayImgLogo: teamLogo.poloniaFalcon,
  },
  {
    date: 'June 12, 2022',
    homeTeam: 'POLONIA FALCON FC',
    awayTeam: 'SHELTON FC',
    leagueType: 'Shoreline Soccer Leauge',
    gameDetail: '10:00 AM Falcon Field (G), New Britain',
    homeImgLogo: teamLogo.poloniaFalcon,
    awayImgLogo: teamLogo.sheltonFc,
  },
  {
    date: 'June 19, 2022',
    homeTeam: 'NORTH BRANFORD 30',
    awayTeam: 'POLONIA FALCON FC',
    leagueType: 'Shoreline Soccer Leauge',
    gameDetail: '10:00 AM Northford Park (G), Northford',
    homeImgLogo: teamLogo.northBranfordSc,
    awayImgLogo: teamLogo.poloniaFalcon,
  },
  {
    date: 'June 26, 2022',
    homeTeam: 'DANBURY UNITED',
    awayTeam: 'POLONIA FALCON FC',
    leagueType: 'Shoreline Soccer Leauge',
    gameDetail: '09:00 AM Portuguese Cultural Center (G), Danbury',
    homeImgLogo: teamLogo.danburyUnited,
    awayImgLogo: teamLogo.poloniaFalcon,
  },
];

export const PastGames: GameInfo[] = [
  {
    date: 'Apr 10, 2022',
    homeTeam: 'GREENWICH FC 30',
    awayTeam: 'POLONIA FALCON FC',
    leagueType: 'Shoreline Soccer Leauge',
    gameDetail: '10:00 AM Cos Cob Park (T), Greenwich',
    result: '1-1',
    homeImgLogo: teamLogo.greenwichFc,
    awayImgLogo: teamLogo.poloniaFalcon,
  },

  {
    date: 'Apr 24, 2022',
    homeTeam: 'NEWTOWN SALTY DOGS',
    awayTeam: 'POLONIA FALCON FC',
    leagueType: 'Shoreline Soccer Leauge',
    gameDetail: '8:00 AM Treadwell Park, Newtown',
    result: '5-0',
    homeImgLogo: teamLogo.newtownSaltyDogs,
    awayImgLogo: teamLogo.poloniaFalcon,
  },

  {
    date: 'May 1, 2022',
    homeTeam: 'POLONIA FALCON FC',
    awayTeam: 'VASCO DA GAMA 30',
    leagueType: 'Shoreline Soccer Leauge',
    gameDetail: '10:00 AM Stanley Quarter Park (G), New Britain',
    result: '2-4',
    homeImgLogo: teamLogo.poloniaFalcon,
    awayImgLogo: teamLogo.vascoDaGame,
  },

  {
    date: 'May 15, 2022',
    homeTeam: 'CLUB NAPOLI 30',
    awayTeam: 'POLONIA FALCON FC',
    leagueType: 'Shoreline Soccer Leauge',
    gameDetail: '09:00 AM Quinnipiac Park (G), Cheshire',
    result: '1-3',
    homeImgLogo: teamLogo.clubNapoli,
    awayImgLogo: teamLogo.poloniaFalcon,
  },

  {
    date: 'May 22, 2022',
    homeTeam: 'POLONIA FALCON FC',
    awayTeam: 'STAMFORD FC',
    leagueType: 'Shoreline Soccer Leauge',
    gameDetail: '10:00 AM Falcon Field (G), New Britain',
    result: '1-1',
    homeImgLogo: teamLogo.poloniaFalcon,
    awayImgLogo: teamLogo.stamfordFC,
  },
];
