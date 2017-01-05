import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { temperaturaService } from '../temperatura/temperatura.service';
import { Cidade } from '../../models/cidade.interface';




@Component({
  selector: 'temperatura',
  template: `
    <h1> Aqui é pra sair as temperatura massa </h1>
     <div *ngIf="temperaturas">
     <p > Output: {{temperaturas | json}} </p>
     </div>
  `,
  providers: [temperaturaService]
})
export class temperaturaComponent implements OnInit  {

      @Input() temperaturas: any;

  constructor() {

 }


  ngOnInit() {


  }
}
