import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  cartsection: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cartsection = this.navParams.data.var1;
  }

  deleteCart(thispizza) {
    let i = 0;
    for (let temp of this.cartsection) {
      i++
      if (thispizza.id == temp.id) {
        i--;
        this.cartsection.splice(i, 1);
        console.log(this.cartsection);
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

}
