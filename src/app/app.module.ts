import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BuffetPage } from '../pages/buffet/buffet';
import { MealcategoryPage } from '../pages/mealcategory/mealcategory';
import { AlacartePage } from '../pages/alacarte/alacarte';
import { PassengerorderPage } from '../pages/passengerorder/passengerorder';
import { BuffetlistPage } from '../pages/buffetlist/buffetlist';
import { OrdermodalPage } from '../pages/ordermodal/ordermodal';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { Device} from '@ionic-native/device';
import { HTTP} from '@ionic-native/http';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BuffetPage,
    MealcategoryPage,
    AlacartePage,
    PassengerorderPage,
    BuffetlistPage,
    OrdermodalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BuffetPage,
    MealcategoryPage,
    AlacartePage,
    PassengerorderPage,
    BuffetlistPage,
    OrdermodalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Device,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}
