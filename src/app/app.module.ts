import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './components/startup/app.component';
import { DayComponent } from './components/day/day';
import { HomeComponent } from './components/home/home';
import { LoginComponent } from './components/login/login';
import { SearchComponent } from './components/search/search';
import { WeekComponent } from './components/week/week';

@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    HomeComponent,
    LoginComponent,
    SearchComponent,
    WeekComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
