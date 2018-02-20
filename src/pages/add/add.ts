import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Pizzaservice } from '../../providers/pizzaservice/pizzaservice';
import { Pizza } from '../../models/pizza';
import { HomePage } from '../home/home';

import { Camera } from '@ionic-native/camera';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  public base64Image: string;
  pizza: Pizza = new Pizza();

  constructor(public navCtrl: NavController, public navParams: NavParams, private pizzaservice: Pizzaservice, private camera: Camera) {

  }

  addPizza = [];

  add() {
    if (this.addPizza['price'] == null) {
      this.pizza.price =+ 0;
    }
    else {
      this.pizza.price =+ this.addPizza['price'];
    }
    this.pizza.name = this.addPizza['name'];
    this.pizza.desc = this.addPizza['desc'];

    console.log(this.pizza);
    this.pizzaservice.add(this.pizza).then((item) => {
      this.navCtrl.push(HomePage);
    });
  }

  addPicture() {
    this.camera.getPicture().then((imagedata) => {
      this.base64Image = imagedata;
      this.pizza.picture = 'data:image/png;base64,' + this.base64Image;
      console.log(this.pizza);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

}
