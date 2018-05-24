import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import { IftarmapPage } from '../iftarmap/iftarmap';
import {BasketmapPage} from '../basketmap/basketmap';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
 // tab2Root = AboutPage;
 tab2Root = IftarmapPage;
 tab3Root = BasketmapPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
