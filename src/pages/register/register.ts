import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {



data = {
  email:  '',
  password: ''
}



  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public authServiceProvider:AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


  register(){


    let credentials = {
      email: this.data.email,
      password: this.data.password
          }
      
      this.authServiceProvider.signUp(credentials).then(
        ()=> this.navCtrl.setRoot(TabsPage),
        error => console.log('error')
      )

  }

}
