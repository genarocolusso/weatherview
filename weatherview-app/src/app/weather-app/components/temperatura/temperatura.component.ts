import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { temperaturaService } from '../temperatura/temperatura.service';
import { Cidade } from '../../models/cidade.interface';




@Component({
  selector: 'temperatura',
  template: `
    <h1> Aqui é pra sair as temperatura massa </h1>
     <div *ngIf="temperaturas.city">
     <p > Output: {{temperaturas | json}} </p>
     <p> {{ temperaturas.city.name}} </p>
     <p> Horário da previsão: {{ temperaturas.list[0].dt | date:'shortTime' }} </p>
     <p> Horário atual: {{ today | date:'shortTime'}} </p>
     <p> {{ temperaturas.list[0].weather[0].main}} </p>
     <p>Day avg: {{  checkIfCelsius(this.temperaturas.list[0].temp.day) }} {{temp_op}}</p>
     <p> Min avg: {{  checkIfCelsius(temperaturas.list[0].temp.min)}}  {{temp_op}} </p>
     <p> Max avg: {{  checkIfCelsius(temperaturas.list[0].temp.max)}}  {{temp_op}}</p>
     <p> Humidity: {{  temperaturas.list[0].humidity}}  </p>

    <div class="celcius"  (click)="celsius = !celsius;">Change Temperature Metric</div>
     </div>

  `,
  providers: [temperaturaService]
})
export class temperaturaComponent implements OnInit  {

      @Input() temperaturas: any;
      today: number = Date.now();
      celsius: boolean = true;
      temp_Avg: number;
      temp_op: string;
      checkIfCelsius(temperaturapassada){
        if(this.celsius){
          this.temp_op= " °C";
         return   this.temp_Avg =  temperaturapassada;
        }
        else{
            this.temp_op= " °F";
         return this.temp_Avg =  Math.round(temperaturapassada*9/5+32);
        }
      }

  constructor() {

 }


  ngOnInit() {


  }
}
