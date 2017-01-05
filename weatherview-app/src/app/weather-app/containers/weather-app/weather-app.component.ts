import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'weather-app',
  template: `
      <cidades ></cidades>
      <temperatura  [temperaturas]="getData"></temperatura>
  `,
  styleUrls: ['./weather-app.component.scss']
})
export class WeatherAppComponent implements OnInit {

    temperaturas: any;
  constructor() {}

  ngOnInit() {

  }

}
