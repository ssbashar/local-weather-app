import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeatherService } from './weather/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent
  ],

  // importing explicitly so that all its children can all use it
  imports: [
    BrowserModule, 
    HttpClientModule
  ],

  // this is provider or API services that you are using
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
