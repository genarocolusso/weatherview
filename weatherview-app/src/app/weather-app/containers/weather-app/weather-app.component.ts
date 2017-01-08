import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'weather-app',
  template: `
  <div class="container">
      <cidades ></cidades>
  </div>

  `,
  styleUrls: ['./weather-app.component.scss']
})
export class WeatherAppComponent implements OnInit {

    temperaturas: any;
  constructor() {}

  ngOnInit() {

  }

}
