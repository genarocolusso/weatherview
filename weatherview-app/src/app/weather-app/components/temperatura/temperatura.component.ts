import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { temperaturaService } from '../temperatura/temperatura.service';
import { Cidade } from '../../models/cidade.interface';
//import {stringtoDate} from '../../models/stringtoDate';



@Component({
  selector: 'temperatura',
  template: `
  <div class="previsaopanel daysdatas" *ngIf="temperaturas.city">
  <h1>  {{ temperaturas.city.name}} </h1>
  <div class="row">
  <div  *ngFor=" let nextday of  temperaturas.list;  let i=index">
    <div class="col-sm-3 nopadding" *ngIf="i>0 && i<5" >
      <div class="panel panel-default nomargin" >
        <div class="panel-heading">
          <h3 class="panel-title"> {{ nextday.dt * 1000  | date: 'dd/MM/yy' }}</h3>
        </div>
        <div class="panel-body">
          <p>{{ nextday.weather[0].main}}</p>
          <p> <i class="fa fa-thermometer-half"> {{  checkIfCelsius(nextday.temp.day) }} {{temp_op}}</i></p>
          <p><i class="fa fa-thermometer-full"> {{  checkIfCelsius(nextday.temp.max) }} {{temp_op}}</i></p>
          <p> <i class="fa fa-thermometer-empty"> {{  checkIfCelsius(nextday.temp.min) }} {{temp_op}}</i></p>
          <p> <i class="fa fa-tint"> {{nextday.humidity}}%</i></p>
        </div>
      </div>
    </div>
    </div>

  </div>
  <div class="celcius"  (click)="celsius = !celsius;">Change Temperature Metric</div>

</div>

  `,
  providers: [temperaturaService],

})
export class temperaturaComponent implements OnInit  {

      @Input() temperaturas: any;
      today: number = Date.now();
      celsius: boolean = true;
      temp_Avg: number;
      temp_op: string;
    //  nextdays: any = this.temperaturas.list;
      checkIfCelsius(temperaturapassada){
        if(this.celsius){
          this.temp_op= " °C";
         return   this.temp_Avg =   Math.round(temperaturapassada);
        }
        else{
            this.temp_op= " °F";
         return this.temp_Avg =  Math.round(temperaturapassada*9/5+32);
        }
      }
      //


  constructor() {

 }


  ngOnInit() {


  }
}
