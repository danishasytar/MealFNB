import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MealcategoryPage } from '../mealcategory/mealcategory';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToLounge () {
  	this.navCtrl.push(MealcategoryPage);  
  }

}
