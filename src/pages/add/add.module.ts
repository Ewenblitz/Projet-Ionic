import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPage } from './add';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    AddPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPage),
  ],
  providers : [
    Camera
  ]
})
export class AddPageModule {}
