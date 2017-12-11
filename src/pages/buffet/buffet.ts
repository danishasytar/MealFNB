import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-buffet',
  templateUrl: 'buffet.html'
})
export class BuffetPage {

  meal;
  allday = [];
  breakfast = [];
  lunch_dinner =[];
  afternoon_tea = [];
  beverage = [];

  constructor(private http: HttpClient, public navCtrl: NavController, public navParams: NavParams) {
    this.getData();
  }

  refill() {
    console.log("refill");
  }


  getData(){
      var meal_type = [];

       this.http.get('http://unwilled-children.000webhostapp.com/api/meal',{} )
            .subscribe(data => {

              this.http.get('http://unwilled-children.000webhostapp.com/api/type_meal',{} )
                    .subscribe(data2 => {

                          for(var i=0;i<Object.keys(data).length;i++){
                            for(var j=0;j<Object.keys(data2).length;j++){
                              if(data[i].type == data2[j].id){
                                data[i].type = data2[j].name;
                              }
                            }
                          }    

                          //assign meal to meal serving time
                          for(var i=0;i<Object.keys(data).length;i++){
                            if(data[i].time_serving == "1"){
                              this.allday.push(data[i]);
                            }
                            else if(data[i].time_serving == "2"){
                              this.lunch_dinner.push(data[i]);

                            }
                          }

                          console.log(this.allday)
                          console.log(this.lunch_dinner)

                      }, err2 => {
                        console.log(err2);
                        });



            }, err => {
              console.log(err);
              });

  }
}
