import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'weather-app',
  template: `
      <cidades></cidades>
      <temperatura></temperatura>
  `,
  styleUrls: ['./weather-app.component.scss']
})
export class WeatherAppComponent implements OnInit {

  constructor() {}

  ngOnInit() {

  }

}
