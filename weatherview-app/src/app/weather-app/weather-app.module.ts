import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

//components e container
import { cidadeComponent } from './components/cidades/cidades.component';
import { WeatherAppComponent } from './containers/weather-app/weather-app.component';
// services
import { WeatherService } from './weather-app.service';

@NgModule({
  declarations: [
    WeatherAppComponent,
    cidadeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    // add the service to our sub-module
    WeatherService
  ],
  exports: [
    WeatherAppComponent
  ]
})
export class WeatherAppModule {}