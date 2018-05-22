
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CartPage } from './../pages/cart/cart';
import { LoginPage } from './../pages/login/login';
import { ProductDetailsPage } from '../pages/product-details/product-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserService } from '../providers/user-service/user-service';
import { CartService } from './../providers/cart-service';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    ProductDetailsPage, 
    CartPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    ProductDetailsPage,
    CartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,
    CartService
  ]
})
export class AppModule {}
