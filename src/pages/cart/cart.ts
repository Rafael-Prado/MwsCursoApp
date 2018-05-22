import { HomePage } from './../home/home';
import { AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CartService } from './../../providers/cart-service';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  public items: any[] = [];

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams, 
     public cartService: CartService,
     public alertCtrl: AlertController,
  ) {
       this.cartService.items;
  }

  ionViewDidLoad() {
  }

  checkut(){
    let prompt = this.alertCtrl.create({
      title: 'Checkut',
      message: "Seu pedido foi realizado com sucesso",
      buttons: [
        {
          text: 'OK',
          handler: data => {
            this.navCtrl.setRoot(HomePage);
          }
        }
      ]
    });
    prompt.present();
  }
}
 
