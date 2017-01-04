import { Component, OnInit } from '@angular/core';

import { Cidade } from '../../models/cidade.interface';


@Component({
  selector: 'cidades',
  template:`
   <h1> Choose a City</h1>
   <p *ngFor="let c of cidades; let i = index">
    {{c.name}} <br>
    {{c.lat}}   <br>
    {{c.long}} <br>
   </p>
  `,
})
export class cidadeComponent implements OnInit {
  cidades: Cidade[];
  constructor() {  }

  ngOnInit() {
    this.cidades = [{
      id: 1,
      lat: 35.652832 ,
      long: 139.839478,
      name: "Tokyo, Japan"
    },
    {
      id: 2,
      lat: 40.730610,
      long: -73.935242,
      name: "New York City, USA"
    },
    {
      id: 3,
      lat: 52.520008,
      long: 13.404954,
      name: "Berlin, Germany"
    }]

  }
}
