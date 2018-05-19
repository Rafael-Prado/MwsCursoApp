import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public form : FormGroup

  constructor(
    private fb: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController
    ) {
      this.form = this.fb.group({
      username:['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(120),
        Validators.required
      ])],
      password:['', Validators.compose([
        Validators.minLength(12),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
  }

  ionViewDidLoad() {
  }

   submit(){
     let loading = this.loadingCtrl.create({
       content: 'Autenticando...'
     });
     loading.present();

     setTimeout(() =>{
       loading.dismiss();
      this.navCtrl.setRoot(HomePage)
     }, 1500);
     
  }

}
