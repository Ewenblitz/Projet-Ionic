import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '../../models/pizza';

/*
  Generated class for the PizzaserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Pizzaservice {

  private readonly url = "http://kim.jcatania.io:3000/pizza/";

  constructor(private http: HttpClient) {
    console.log('Hello PizzaserviceProvider Provider');

  }

  get() {
    let rt: Array<Pizza> = new Array<Pizza>();
    return new Promise<Array<Pizza>>(resolve => {
      this.http.get(this.url).subscribe((data: Array<any>) => {
        for (let i = 0; i < data.length; i++) {
          rt.push(new Pizza(data[i]['id'], data[i]['name'], data[i]['desc'], data[i]['picture'], data[i]['price']))
        }
        resolve(rt);
        console.log(data);
      });
    });
  }

  getById(id: number) {
    let findById: Pizza;
    return new Promise<Pizza>(resolve => {
      this.http.get(this.url + id).subscribe((data: any) => {
        findById = new Pizza(data['id'], data['name'], data['desc'], data['picture'], data['price']);
        resolve(findById);
      });
    });
  }

  add(pizza: Pizza) {
    return new Promise<Pizza>(resolve => {
      this.http.post(this.url, pizza).subscribe((data: any) => {
        resolve();
      });
    });
  }

  delete(id: number) {
    return new Promise<Pizza>(resolve => {
      this.http.delete(this.url + id).subscribe((data: any) => {
        resolve();
      });
    });
  }

  update(pizza: Pizza) {
    return new Promise<Pizza>(resolve => {
      this.http.patch(this.url + pizza.id, pizza).subscribe((data: any) => {
        resolve();
      });
    });
  }

}
