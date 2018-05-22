
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DataSevice } from './../../providers/data-service';
import { UserService } from '../../providers/user-service/user-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[DataSevice]
})
export class LoginPage {
  public form : FormGroup

  constructor(
    private fb: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public dataSevice: DataSevice,
    public userService: UserService
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

    if (this.userService.authenticate()) {
      this.navCtrl.setRoot(HomePage);
    }
  }

  ionViewDidLoad() {
  }

   submit(){
     let loading = this.loadingCtrl.create({
       content: 'Autenticando...'
     });
     loading.present();
     this.dataSevice.authenticate(this.form.value)
     .subscribe(data => {
       loading.dismiss();
       this.userService.save({name: 'Rafael prado', image: 'http://placehold.it/128x128'}, 'Meu Token');
      this.navCtrl.setRoot(HomePage);
      });
    }
}
