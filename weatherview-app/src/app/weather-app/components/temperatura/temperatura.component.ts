import { Component, OnInit } from '@angular/core';


import { temperaturaService } from './temperatura.service';

@Component({
  selector: 'temperatura',
  template: `
    <h1> Aqui é pra sair as temperatura massa </h1>
     <button (click)="onTestGet()"> Clica ae </button>
     <p> Output: {{getData}} </p>
  `,
  providers: [temperaturaService]
})
export class temperaturaComponent implements OnInit {
     getData: string;
  constructor(private tempService:temperaturaService) {

 }
 onTestGet(){
    this.tempService.getTemperaturas()
      .subscribe(
        data => this.getData = JSON.stringify(data),
        error => alert(error),
        () => console.log("finished")
      );
 }

  ngOnInit() {}
}
