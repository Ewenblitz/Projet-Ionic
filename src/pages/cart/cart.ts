/**
 * @author Ewen LOMER - Ingésup B3
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Pizza } from '../../models/pizza';

import { NativeStorage } from '@ionic-native/native-storage';

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

  cartsection: Array<Pizza> = new Array<Pizza>();

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeStorage: NativeStorage) {
    this.nativeStorage.getItem('myCart').then((cartsection: Array<Pizza>) => {
      this.cartsection = cartsection;
    }, ((error) => {
      console.log('Error storing pizza', error);
    })
  );
  console.log(this.navParams.data.var1);
  }

  /**
   * deleteCart - Function to delete the current cart
   *
   * @param  {number} i: number temporary variable
   * @return {void}              
   */
  deleteCart(i: number) {
    this.cartsection.splice(i, 1);
    this.nativeStorage.setItem('monPanier', this.cartsection).then(
      () => console.log('Item Stored'),
      error => console.error('Error storing item', error)
    );
    console.log(this.cartsection);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

}
