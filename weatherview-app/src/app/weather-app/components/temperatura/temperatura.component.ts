import { Component, OnInit } from '@angular/core';

import { temperaturaService } from './temperatura.service';

@Component({
  selector: 'temperatura',
  template: `
    <h1> Aqui é pra sair as temperatura massa </h1>
    <h3>
{{ temperatura.length>0 ? 'tem algo': 'vazio'  }}
{{temperatura | json}}
    </h3>
  `,
})
export class temperaturaComponent implements OnInit {
  temperatura: Object[]  = [{ 'asda': 1},{'asda':2}];

  constructor(tempService:temperaturaService) {
 
 }

  ngOnInit() {}
}
