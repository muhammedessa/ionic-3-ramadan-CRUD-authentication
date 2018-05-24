import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController  } from 'ionic-angular';
import {GiftServiceProvider} from '../../providers/gift-service/gift-service'
import { Locations } from '../../model/locations'
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { ContactPage } from '../contact/contact';
 
/**
 * Generated class for the GiftplacemodifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-giftplacemodify',
  templateUrl: 'giftplacemodify.html',
})
export class GiftplacemodifyPage {

  
 giftList: AngularFireObject<any>;
   
  locations: Locations = {
    key : '',
    latitude: '',
    longitude: '',
    info: ''
  };

  itemArray=[];
  myObject = []

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public giftServiceProvider: GiftServiceProvider,
    db: AngularFireDatabase
  
  ) {
    this.giftList = db.object('giftmap');
      this.giftList.snapshotChanges().subscribe(action => {
        
        if (action.payload.val() == null || action.payload.val() == undefined) {
          console.log('no data' )
        } else {

        this.itemArray.push(action.payload.val() )
        this.myObject = Object.entries(this.itemArray[0])
   
        }
   
       });
 
  }


     
   

  ionViewDidLoad() {
    console.log('ionViewDidLoad GiftplacemodifyPage');
  }



  updateLocation(locations:Locations){
     this.giftServiceProvider.updateLocation(locations ).then( ()=>{
      this.navCtrl.setRoot(ContactPage)
      console.log('updated')
     })
  }
  removeLocation(locations:Locations){
    this.giftServiceProvider.removeLocation(locations ).then( ()=>{
      this.navCtrl.setRoot(ContactPage)
      console.log('deleted')
    })
    console.log(locations)

    
  }






  showPrompt( key , info , latitude , longitude ) {
    let prompt = this.alertCtrl.create({
      title: 'تعديل',
      message: "التعديل على المعلومات الحالية ",
      inputs: [
        {
          name: 'Info',
          value:  info
        },
        {
          name: 'Latitude',
          value:  latitude
        },
        {
          name: 'Longitude',
          value:  longitude
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
           // console.log('Saved clicked');
           this.locations.info =   data.Info
           this.locations.latitude =   data.Latitude
           this.locations.longitude =   data.Longitude
           this.locations.key =  key

           console.log(this.locations)
           this.updateLocation(this.locations)
          }
        }
      ]
    });
    prompt.present();
  }






}

 