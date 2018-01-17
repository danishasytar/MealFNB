import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';


/**
 * Generated class for the BuffetlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-buffetlist',
  templateUrl: 'buffetlist.html',
})
export class BuffetlistPage
 {

  pagetitle = ""
  meal_time_serving_id;
  list;
  constructor(public api:ApiProvider, public navCtrl: NavController, public navParams: NavParams) {
  	let meal_time_serving = navParams.get('param');
  	console.log(meal_time_serving);
  	this.pagetitle = meal_time_serving.name;
  	this.meal_time_serving_id = meal_time_serving.id;
  	this.getdata();
  }


  getdata(){
  	this.api.getdata('/api/meal/time_serving_id/'+this.meal_time_serving_id, {})
  		.then(data => {
  			this.list = data;
            console.log(data);
          }, err => {
            console.log(err);
          });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BuffetlistPage');
  }


  reFill(){
  	console.log("refill should sent notification")
  }

}
