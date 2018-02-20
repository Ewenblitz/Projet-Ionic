import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifcationPage } from './modifcation';

import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    ModifcationPage,
  ],
  imports: [
    IonicPageModule.forChild(ModifcationPage),
  ],
  providers: [
    Camera
  ]
})
export class ModifcationPageModule {}
