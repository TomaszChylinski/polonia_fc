import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header/header.component';
import { NavigationComponent } from './components/shared/navigation/navigation/navigation.component';
import { UpdateBannerComponent } from './home/update-banner/update-banner.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ScheduleComponent } from './home/schedule/schedule.component';
import { LeagueTableComponent } from './home/league-table/league-table.component';
import { MainComponent } from './home/main/main.component';
import { BannerItemComponent } from './home/update-banner/banner-item/banner-item.component';

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
    BannerItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
