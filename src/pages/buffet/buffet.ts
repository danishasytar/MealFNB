import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuffetlistPage } from '../buffetlist/buffetlist';
import { ApiProvider } from './../../providers/api/api';


@Component({
  selector: 'page-buffet',
  templateUrl: 'buffet.html'
})
export class BuffetPage {
  selectedItem: any;
  icons: string[];
  list;
  // list = [
  //   {'name':'All Day', 'id': 1},
  //   {'name':'Breakfast','id': 2},
  //   {'name':'Lunch / Dinner','id': 3},
  //   {'name':'Afternoon Tea','id':4},
  //   {'name':'Beverage','id': 5},
  // ]
  constructor(public api:ApiProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.getdata();
  }

  getdata(){
    this.api.getdata('/api/meal_time_serving',{})
          .then(data => {
            this.list = data;
            console.log(data);
          }, err => {
            console.log(err);
          });
  }

  goToList(meal_time_serving) {
    console.log(meal_time_serving);
    this.navCtrl.push(BuffetlistPage, {'param': meal_time_serving});
  }
}
