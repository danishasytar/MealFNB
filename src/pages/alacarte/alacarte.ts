import { Component } from '@angular/core';
import { NavController, NavParams, ModalController} from 'ionic-angular';
import { OrdermodalPage } from '../ordermodal/ordermodal';


/**
 * Generated class for the AlacartePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-alacarte',
  templateUrl: 'alacarte.html',
})
export class AlacartePage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlacartePage');
  }

  orderMeal(){
  	console.log("order");
   let ordermodal = this.modalCtrl.create(OrdermodalPage,{});
   ordermodal.present();
  }
}
