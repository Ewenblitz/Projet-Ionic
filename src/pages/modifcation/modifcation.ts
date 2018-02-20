import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Pizzaservice } from '../../providers/pizzaservice/pizzaservice';
import { Pizza } from '../../models/pizza';

import { HomePage } from '../home/home';
import { Camera, CameraOptions } from '@ionic-native/camera'

/**
 * Generated class for the ModifcationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modifcation',
  templateUrl: 'modifcation.html',
})
export class ModifcationPage {
  public base64Image: string;

  pizza: Pizza = new Pizza();

  constructor(public navCtrl: NavController, public navParams: NavParams, private pizzaservice: Pizzaservice, private camera: Camera) {
    this.pizza = this.navParams.data.var1;
  }

  private options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    saveToPhotoAlbum: true,
    correctOrientation: true,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  updating() {
    this.pizzaservice.update(this.pizza).then((item) => {
      this.navCtrl.push(HomePage);
    });
  }

  pictureUpdating() {
    this.camera.getPicture(this.options).then((imagedata) => {
      this.base64Image = imagedata;
      this.pizza.picture = 'data:image/jpeg;base64,' + this.base64Image;
      console.log(this.pizza);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifcationPage');
  }

}
