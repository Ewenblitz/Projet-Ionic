import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Pizzaservice } from '../../providers/pizzaservice/pizzaservice';
import { Pizza } from '../../models/pizza';

import { ToastController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

import { CartPage } from '../cart/cart';
import { AddPage } from '../add/add';
import { ModifcationPage } from '../modifcation/modifcation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cartsection = new Array<Pizza>();
  mypizza: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pizza: Pizzaservice, private toastCrtl: ToastController, private vibration: Vibration) {
    this.getHome();
    this.pizza.getById(3).then((item: any) => {
    });
  }

  getHome() {
    this.pizza.get().then((items: Array<any>) => {
      this.mypizza = items;
    });
  }

  update(thispizza) {
    this.navCtrl.push(ModifcationPage, {
      var1: thispizza
    });
  }

  delete(thispizza) {
    this.pizza.delete(thispizza.id).then((item) => {
      this.getHome();
    });
    this.messagePopup("You've deleted " + thispizza.name + " from the menu");
  }

  messagePopup(message) {
    let toast = this.toastCrtl.create({
      message: message,
      duration: 4000,
      position: 'bottom'
    });

    toast.present();
  }

  cart(thispizza) {
    this.cartsection.push(thispizza);
    this.messagePopup("You just add " + thispizza.name + " to your cart");
  }

  add() {
    this.navCtrl.push(AddPage);
    this.messagePopup("You just added to the menu");
  }

  cartCheck() {
    this.navCtrl.push(CartPage, {
      var1: this.cartsection
    });
  }

  ionViewDidLoad() {
    console.log('Ion View loaded');
  }

}
