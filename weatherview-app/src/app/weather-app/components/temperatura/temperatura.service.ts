import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class temperaturaService {
  constructor(private http:Http) {

 }

 getTemperaturas(){
   return http.get('https://api.darksky.net/forecast/e64f3a66323d1398d66f0dd95d414570/37.8267,-122.4233')
      .map(response => response.json());
 }
}
