import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController } from 'ionic-angular';
import { Locations } from '../../model/locations'
import {GiftServiceProvider} from '../../providers/gift-service/gift-service'
import { ContactPage } from '../contact/contact';



/**
 * Generated class for the GiftplacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-giftplace',
  templateUrl: 'giftplace.html',
})
export class GiftplacePage {

  locations:Locations={
    latitude:'',
    longitude:'',
    info:''
  }

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public giftServiceProvider: GiftServiceProvider,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GiftplacePage');
  }


  addLocation(locations:Locations){
    this.giftServiceProvider.addLocation(locations).then(ref =>{
      this.showAlert()
      this.navCtrl.setRoot(ContactPage)
    })
  }





  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Greate!',
      subTitle: 'Thanks for helping people!',
      buttons: ['OK']
    });
    alert.present();
  }










}
