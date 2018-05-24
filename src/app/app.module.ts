import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { IftarmapPage } from '../pages/iftarmap/iftarmap';
import {BasketmapPage} from '../pages/basketmap/basketmap';

import { IftarplacemodifyPage } from '../pages/iftarplacemodify/iftarplacemodify';
import { GiftplacemodifyPage } from '../pages/giftplacemodify/giftplacemodify';
import { GiftplacePage } from '../pages/giftplace/giftplace';
import { IftarplacePage } from '../pages/iftarplace/iftarplace';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { GiftServiceProvider } from '../providers/gift-service/gift-service';
import { IftarServiceProvider } from '../providers/iftar-service/iftar-service';

import { AngularFireAuth } from 'angularfire2/auth';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

export const firebaseConfig = {
  apiKey: "AIzaSyDf_h12buLVlh5YjAF754yRSwfr3mfn7DE",
  authDomain: "ramadan-22a19.firebaseapp.com",
  databaseURL: "https://ramadan-22a19.firebaseio.com",
  projectId: "ramadan-22a19",
  storageBucket: "ramadan-22a19.appspot.com",
  messagingSenderId: "1062619537951"
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IftarplacemodifyPage,
    GiftplacemodifyPage,
    GiftplacePage,
    IftarplacePage,
    IftarmapPage,
    BasketmapPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IftarplacemodifyPage,
    GiftplacemodifyPage,
    GiftplacePage,
    IftarplacePage,
    IftarmapPage,
    BasketmapPage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GiftServiceProvider,
    IftarServiceProvider,
    AngularFireAuth,
    AuthServiceProvider
  ]
})
export class AppModule {}
