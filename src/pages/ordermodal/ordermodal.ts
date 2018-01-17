import { Component } from '@angular/core';
import { NavController, NavParams , ViewController, AlertController} from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';


@Component({
  selector: 'page-ordermodal',
  templateUrl: 'ordermodal.html',
})
export class OrdermodalPage {

shownoodlequantity = false;
showsandwichesquantity = false;
showsoupquanity = false;
showdessertquantity = false;
noodle;
sandwich;
soup;
dessert;
name;

noodlequantity_;
sandwichquantity_;
soupquantity_;
dessertquantity_;

  constructor(public api:ApiProvider, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdermodalPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }



  noodlequantity(){
  	if(this.shownoodlequantity){
  		this.shownoodlequantity = false
  		return;
  	}
  	this.shownoodlequantity = true;

  }

  sandwichesquantity(){
  	if(this.showsandwichesquantity){
  		this.showsandwichesquantity = false
  		return;
  	}
  	this.showsandwichesquantity = true;
  	

  }

  soupquantity(){
  	if(this.showsoupquanity){
  		this.showsoupquanity = false
  		return;
  	}
  	this.showsoupquanity = true;
  	

  }

  dessertquantity(){
  	if(this.showdessertquantity){
  		this.showdessertquantity = false
  		return;
  	}
  	this.showdessertquantity = true;
  	

  }

  orderMeal(){
  	let order = ""
  	if(this.noodle){
  		order = order + "noodle/"+ this.noodlequantity_;
  	}
  	if(this.sandwich){
  		order = order + "|sandwich/"+ this.sandwichquantity_;	
  	}
  	if(this.soup){
  		order = order + "|soup/"+ this.soupquantity_;
  	}
  	if(this.dessert){
  		order = order + "|soup/"+ this.dessertquantity_;
  	}
  		let data = 
  			{"name": this.name,
  			"passenger_order": order,
  			"time": " "}
  		
console.log(data)

this.api.postdata('/api/passenger_order/add/', data)
	  let alert = this.alertCtrl.create({
	    title: 'Order sent',
	    buttons: ['Done']
	  });
	  alert.present();
    this.viewCtrl.dismiss();

  }

}
