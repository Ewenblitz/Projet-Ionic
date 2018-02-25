/**
 * @author Ewen LOMER - Ingésup B3
 * TypeScript script for the adding of a Pizza in the webService
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Pizzaservice } from '../../providers/pizzaservice/pizzaservice';
import { Pizza } from '../../models/pizza';
import { HomePage } from '../home/home';

import { Camera, CameraOptions } from '@ionic-native/camera';

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

  private options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    saveToPhotoAlbum: true,
    correctOrientation: true,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  addPizza = [];
  
  /**
   * add - Add function
   *
   * @return {object}  This will return the page with the newly add Pizza
   */

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

  /**
   * addPicture - Function to add a picture on mobile device
   *
   * @return {void}
   */
  addPicture() {
    this.camera.getPicture(this.options).then((imagedata) => {
      this.base64Image = imagedata;
      this.pizza.picture = 'data:image/jpeg;base64,' + this.base64Image;
      console.log(this.pizza);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

}
