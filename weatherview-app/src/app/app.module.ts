import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Headers } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherAppModule } from './weather-app/weather-app.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    WeatherAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
