/**
 * @author Ewen LOMER - Ingésup B3
 */

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Pizzaservice } from '../../providers/pizzaservice/pizzaservice';
import { Pizza } from '../../models/pizza';

import { ToastController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private pizza: Pizzaservice, private toastCrtl: ToastController, private nativeStorage: NativeStorage) {
    this.getHome();
    this.pizza.getById(3).then((item: any) => {
    });
  }

  /**
   * getHome - Function to get all the pizza in the WebService
   *
   * @return {items}     Return in a Array all the Pizzas
   */
  getHome() {
    this.pizza.get().then((items: Array<any>) => {
      this.mypizza = items;
    });
  }

  /**
   * update - Function ofr updating a Pizza in the WebService
   *
   * @param  {object} thispizza The Pizza that is going to be updated
   * @return {object}           The updated Pizza
   */
  update(thispizza) {
    this.navCtrl.push(ModifcationPage, {
      var1: thispizza
    });
  }

  /**
   * delete - Function to delete a Pizza from the WebService
   *
   * @param  {object} thispizza The pizza that is going to be deleted
   * @return {void}
   */
  delete(thispizza) {
    this.pizza.delete(thispizza.id).then((item) => {
      this.getHome();
    });
    this.messagePopup("You've deleted " + thispizza.name + " from the menu");
  }

  /**
   * messagePopup - Function for the Toast message
   *
   * @param  {object} message Text that will be displayed
   * @return {toast}
   */
  messagePopup(message) {
    let toast = this.toastCrtl.create({
      message: message,
      duration: 4000,
      position: 'bottom'
    });

    toast.present();
  }

  /**
   * cart - Function to add a Pizza to the Cart with the toast
   *
   * @param  {object} thispizza Current Pizza that you want to add
   * @return {toast}
   */
  cart(thispizza) {
    this.cartsection.push(thispizza);
    this.nativeStorage.setItem('myCart', this.cartsection).then(() =>
      console.log('Items stored in your cart'),
      error => console.error('Error storing item', error)
    );
    this.messagePopup("You just add " + thispizza.name + " to your cart");
  }

  /**
   * add - Message and pushing to the home page
   *
   * @return {void}
   */
  add() {
    this.navCtrl.push(AddPage);
    this.messagePopup("You just added to the menu");
  }

  /**
   * cartCheck - Cart checking
   *
   * @return {void}     
   */
  cartCheck() {
    this.navCtrl.push(CartPage, {
      var1: this.cartsection
    });
  }

  ionViewDidLoad() {
    console.log('Ion View loaded');
  }

}
