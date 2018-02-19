import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Pizzaservice } from '../../providers/pizzaservice/pizzaservice';
import { Pizza } from '../../models/pizza';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<Pizza> = new Array<Pizza>();

  constructor(public navCtrl: NavController, public navParams: NavParams, private pizzaservice: Pizzaservice) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.pizzaservice.get().then(items => {
      console.log(items);
      this.items = items;
    });

    this.pizzaservice.getById(2).then(items =>{
      console.log(items);
    });

    this.pizzaservice.delete(2).then(items => {
      console.log(items);
    });
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  ionViewDidLoad() {
    console.log('Ion View loaded');
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
