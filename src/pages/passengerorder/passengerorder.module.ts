import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PassengerorderPage } from './passengerorder';

@NgModule({
  declarations: [
    PassengerorderPage,
  ],
  imports: [
    IonicPageModule.forChild(PassengerorderPage),
  ],
})
export class PassengerorderPageModule {}
