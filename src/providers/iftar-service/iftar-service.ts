import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Locations } from '../../model/locations'
import { AngularFireDatabase } from 'angularfire2/database';
/*
  Generated class for the IftarServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IftarServiceProvider {

   
  private gpsListRef = this.db.list<Locations>('iftarmap')

  constructor(public db:AngularFireDatabase) {
    console.log('Hello GiftServiceProvider Provider'); }

  getLocationList(){
    return this.gpsListRef;
  }
  addLocation(locations:Locations){
    return this.gpsListRef.push(locations)
  }
  updateLocation(locations:Locations){
    return this.gpsListRef.update(locations.key,locations)
  }
  removeLocation(locations ){
    return this.gpsListRef.remove(locations )
  }


}
