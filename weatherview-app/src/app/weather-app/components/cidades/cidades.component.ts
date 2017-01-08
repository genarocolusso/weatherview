import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { temperaturaService } from '../temperatura/temperatura.service';
import { Cidade } from '../../models/cidade.interface';

@Component({
  selector: 'cidades',
  template:`
  <div class="row" *ngIf="tokyo && berlin && ny">
   <div class="col-md-4 margintop"  *ngFor="let c of cidades; let i = index" (click)="onTestGet(c)">
     <div [ngClass]="{
       'cardselected': selectedcard == i,
       'card': selectedcard != i
     }" (click)="selectCard(i)">
       <div class="cardimg {{c.img | lowercase }}">
         <h3 class="city_name">{{c.name}}</h3>
         <h2 class="tempnow" *ngIf="i==0" >{{tokyo.main.temp}}°C</h2>
         <h2 class="tempnow" *ngIf="i==1" >{{ny.main.temp}}°C</h2>
         <h2 class="tempnow" *ngIf="i==2" >{{berlin.main.temp}}°C</h2>
         <div class="inlineinfo">
           <p>{{ today | date: 'shortTime'}}</p>
           <p *ngIf="i==0">{{tokyo.weather[0].main}}</p>
           <p *ngIf="i==1">{{ny.weather[0].main}}</p>
           <p *ngIf="i==2">{{berlin.weather[0].main}}</p>
         </div>
       </div>
       <div class="weather_main">
            <div *ngIf="i==0" class="{{noSpaces(tokyo.weather[0].main) | lowercase}}"></div>
            <div *ngIf="i==1" class="{{noSpaces(ny.weather[0].main) | lowercase}}"></div>
            <div *ngIf="i==2" class="{{noSpaces(berlin.weather[0].main) | lowercase}}"></div>

       </div>
       <div class="content">
         <div class="weather_icon" *ngIf="i==0">
           <div class="col-xs-4 data"><span>{{tokyo.main.temp_max}}°C</span><i class="fa fa-arrow-up"></i></div>
           <div class="col-xs-4 data"><span>{{tokyo.main.temp_min}}°C</span><i class="fa fa-arrow-down"></i></div>
           <div class="col-xs-4 data"><span>{{tokyo.main.humidity}}%</span><i class="fa fa-tint"></i></div>
         </div>
         <div class="weather_icon" *ngIf="i==1">
           <div class="col-xs-4 data"><span>{{ny.main.temp_max}}°C</span><i class="fa fa-arrow-up"></i></div>
           <div class="col-xs-4 data"><span>{{ny.main.temp_min}}°C</span><i class="fa fa-arrow-down"></i></div>
           <div class="col-xs-4 data"><span>{{ny.main.humidity}}%</span><i class="fa fa-tint"></i></div>
         </div>
         <div class="weather_icon" *ngIf="i==2">
           <div class="col-xs-4 data"><span>{{berlin.main.temp_max}}°C</span><i class="fa fa-arrow-up"></i></div>
           <div class="col-xs-4 data"><span>{{berlin.main.temp_min}}°C</span><i class="fa fa-arrow-down"></i></div>
           <div class="col-xs-4 data"><span>{{berlin.main.humidity}}%</span><i class="fa fa-tint"></i></div>
         </div>
       </div>
     </div>
   </div>

 </div>
 <temperatura  [temperaturas]="getData"></temperatura>
  `,
  providers: [temperaturaService]
})
export class cidadeComponent implements OnInit {
  cidades: Cidade[];
  selectedcard: number;
  tokyo: any;  berlin: any;  ny: any;
  today: number = Date.now();

 @Output()   getData: EventEmitter<any> = new EventEmitter();

  constructor(private tempService:temperaturaService) {  }

  onTestGet(city){
    return this.tempService.getTemperaturas(city)
      .subscribe(
        data =>   this.getData = data,
        error => alert(error),
        () => console.log("finished"+ JSON.stringify(this.getData))
      );

  }

// Levei um laço  com http get em angular pois nunca havia usado, aqui tive que fazer
// essa coisa horrivel e gambiarra, mas juro que aprendo só estou sem tempo e sem gente
// que use angular 2 pra me ajudar.
  getweathertokyo(){

    return  this.tempService.getMycity('tokyo,jp')
       .subscribe(
         data =>    this.tokyo = data,
         error => alert(error),
         () => console.log("finished")
       );

  }
  getweatherny(){

    return  this.tempService.getMycity('newyorkcity,us')
       .subscribe(
         data =>    this.ny = data,
         error => alert(error),
         () => console.log("finished")
       );

  }
  getweatherberlin(){

    return  this.tempService.getMycity('berlin,ge')
       .subscribe(
         data =>    this.berlin = data,
         error => alert(error),
         () => console.log("finished")
       );

  }


  selectCard(i){
    this.selectedcard = i;
  }
  noSpaces(value){
    return value.replace(/ /g, "_");
  }

  ngOnInit() {
    this.cidades = [{
      id: 0,
      lat: 35.652832 ,
      long: 139.839478,
      name: "Tokyo, Japan",
      code: "Tokyo,jp",
      img: "Tokyo",

    },
    {
      id: 1,
      lat: 40.730610,
      long: -73.935242,
      name: "NYC, USA",
      code: "NewYorkCity,us",
      img: "Newyork"

    },
    {
      id: 2,
      lat: 52.520008,
      long: 13.404954,
      name: "Berlin, Germany",
      code: "Berlin,ge",
      img: "Berlin"
    }]


   this.getweatherny();
   this.getweathertokyo();
   this.getweatherberlin();


  }
}
