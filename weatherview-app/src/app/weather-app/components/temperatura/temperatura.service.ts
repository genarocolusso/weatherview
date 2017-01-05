import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class temperaturaService {


  constructor(private http: Http) {

 }

 getTemperaturas(city){
     return  this.http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+city.code+'&units=metric&mode=json&units=metric&cnt=7&appid=467f50a085d0372acfa207deee09b5ea')
      .map(response => response.json());
 }
}
