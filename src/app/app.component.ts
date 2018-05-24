import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {



  rootPage:any  

  constructor(public authServiceProvider:AuthServiceProvider , platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

 this.authServiceProvider.afAuth.authState.subscribe(
   user =>{
     if (user) {
       this.rootPage = TabsPage
     } else {
       this.rootPage = LoginPage
     }
   },
   ()=>{
     this.rootPage = LoginPage
   }
 )


  }
}
