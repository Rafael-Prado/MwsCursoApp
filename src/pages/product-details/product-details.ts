import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ProductDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {
  public product: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public  viewCtrl: ViewController
  ) 
  {
    this.product = this.navParams.get('product');
  }

  ionViewDidLoad() {
  }

  close(){
    this.viewCtrl.dismiss();
  }

}
