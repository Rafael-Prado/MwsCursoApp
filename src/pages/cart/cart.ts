import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  public items: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items.push({ id: 3455, title: 'Mouse', image: 'http://placehold.it/128x128', price: 299.00, quantity: 1 } );
    this.items.push({ id: 34553, title: 'Mouse', image: 'http://placehold.it/128x128', price: 299.00, quantity: 1 } );
    this.items.push({ id: 345533, title: 'Mouse', image: 'http://placehold.it/128x128', price: 299.00, quantity: 1 } );
    this.items.push({ id: 345555, title: 'Mouse', image: 'http://placehold.it/128x128', price: 299.00, quantity: 1 } );
    this.items.push({ id: 345512, title: 'Mouse', image: 'http://placehold.it/128x128', price: 299.00, quantity: 1 } );
  }

  ionViewDidLoad() {
  }

}
