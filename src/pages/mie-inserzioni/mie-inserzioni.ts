import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MieInserzioniPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mie-inserzioni',
  templateUrl: 'mie-inserzioni.html',
})
export class MieInserzioniPage {
  inserzioni: Inserzione[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MieInserzioniPage');
  }

  inserzioneTapped(idInserzione){

  }

  modificaInserzione(inserzione){

  }

  deleteInserzione(idInserzione){

  }

  addToPreferiti(idInserzione){

  }

  deleteFromPreferiti(idInserzione){

  }

}
