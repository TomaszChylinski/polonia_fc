import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header/header.component';
import { NavigationComponent } from './components/shared/navigation/navigation/navigation.component';
import { UpdateBannerComponent } from './components/home/update-banner/update-banner.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { ScheduleComponent } from './components/home/schedule/schedule.component';
import { LeagueTableComponent } from './components/home/league-table/league-table.component';
import { MainComponent } from './components/home/main/main.component';
import { BannerItemComponent } from './components/home/update-banner/banner-item/banner-item.component';
import { MainScheduleComponent } from './components/schedule/schedule.component';
import { StandingsComponent } from './components/standings/standings.component';
import { StandingsItemComponent } from './components/standings/standings-item/standings-item.component';
import { ScheduleItemComponent } from './components/schedule/schedule-item/schedule-item.component';
import {TeamComponent} from './components/team/team.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    UpdateBannerComponent,
    DashboardComponent,
    ScheduleComponent,
    LeagueTableComponent,
    MainComponent,
    BannerItemComponent,
    MainScheduleComponent,
    StandingsComponent,
    StandingsItemComponent,
    ScheduleItemComponent,
    TeamComponent,
    NotFoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
