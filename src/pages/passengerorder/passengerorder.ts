import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';


/**
 * Generated class for the PassengerorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-passengerorder',
  templateUrl: 'passengerorder.html',
})
export class PassengerorderPage {
	list;

  constructor(public api:ApiProvider, public navCtrl: NavController, public navParams: NavParams) {
  	this.getdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PassengerorderPage');
  }

  getdata(){
  	this.api.getdata('/api/passenger_order/', {})
   		.then(data => {
         for(let i = 0;i<data.length;i++){
           data[i].passenger_order = (data[i].passenger_order).split("|");
         } 
         this.list = data;
         console.log(data);
          }, err => {
            console.log(err);
          });
  }
}
