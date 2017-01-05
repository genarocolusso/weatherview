import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { temperaturaService } from '../temperatura/temperatura.service';
import { Cidade } from '../../models/cidade.interface';


@Component({
  selector: 'cidades',
  template:`
   <h1> Choose a City</h1>
   <p *ngFor="let c of cidades; let i = index" (click)="onTestGet(c)">
    {{c.name}} <br>
    {{c.lat}}   <br>
    {{c.long}} <br>
   </p>
  `,
  providers: [temperaturaService]
})
export class cidadeComponent implements OnInit {
  cidades: Cidade[];
 @Output()   getData: EventEmitter<any> = new EventEmitter();

  constructor(private tempService:temperaturaService) {  }

  onTestGet(city){
    return this.tempService.getTemperaturas(city)
      .subscribe(
        data => this.getData = data,
        error => alert(error),
        () => console.log("finished"+ JSON.stringify(this.getData))
      );
  }

  ngOnInit() {
    this.cidades = [{
      id: 1,
      lat: 35.652832 ,
      long: 139.839478,
      name: "Tokyo, Japan",
      code: "Tokyo,jp"
    },
    {
      id: 2,
      lat: 40.730610,
      long: -73.935242,
      name: "New York City, USA",
      code: "NewYorkCity,us"

    },
    {
      id: 3,
      lat: 52.520008,
      long: 13.404954,
      name: "Berlin, Germany",
      code: "Berlin,ge"
    }]

  }
}
