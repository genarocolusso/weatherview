import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule }    from '@angular/http';

//components e container
import { cidadeComponent } from './components/cidades/cidades.component';
import { WeatherAppComponent } from './containers/weather-app/weather-app.component';
import { temperaturaComponent } from './components/temperatura/temperatura.component';
// services
import { WeatherService } from './weather-app.service';
import { temperaturaService } from './components/temperatura/temperatura.service';

@NgModule({
  declarations: [
    WeatherAppComponent,
    cidadeComponent,
    temperaturaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
    // add the service to our sub-module
    WeatherService,
    temperaturaService
  ],
  exports: [
    WeatherAppComponent
  ]
})
export class WeatherAppModule {}
