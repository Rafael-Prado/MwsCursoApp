import { Component } from '@angular/core';
import { NavController, ItemSliding, ToastController, ModalController } from 'ionic-angular';

import { CartService } from './../../providers/cart-service';
import { ProductDetailsPage } from './../product-details/product-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {
  public products: any = [];
  public items: any = [];

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    public cartService: CartService
  ) { 
    this.cartService.cartChange.subscribe((data) =>{
      this.cartService.getItems();
      this.items = this.cartService.items;
    });
  }

  ionViewDidLoad() {
    this.products.push({ id: 3455, title: 'Mouse', description: 'Mouse caro', image: 'http://placehold.it/128x128', price: 299.00 } );
    this.products.push({ id: 34553, title: 'Mouse', description: 'Teclado', image: 'http://placehold.it/128x128', price: 299.00 } );
    this.products.push({ id: 345533, title: 'Mouse', description: 'Monitor', image: 'http://placehold.it/128x128', price: 299.00 } );
    this.products.push({ id: 345555, title: 'Mouse', description: 'Mouse pad', image: 'http://placehold.it/128x128', price: 299.00 } );
    this.products.push({ id: 345512, title: 'Mouse', description: 'Mouse botão', image: 'http://placehold.it/128x128', price: 299.00 } );
  }

  showDetais(product){
    let modal = this.modalCtrl.create(ProductDetailsPage, { product: product });
    modal.present();
  }

  addToCart(slidingItem: ItemSliding, product: any){
    this.cartService.addItem({
       id: product.id,
       title: product.title,
       price: product.price,
      quantity: 1 
    });
    slidingItem.close();
    let toast = this.toastCtrl.create({
      message: 'Produto adicionado ao carrinho',
      duration: 1500
    });
    toast.present();
  }

}
