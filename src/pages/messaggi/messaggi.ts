import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatService } from "../../services/chat.service";
import { Conversazione } from "../../model/conversazione";
import { CHAT_PAGE } from "../pages";
/**
 * Generated class for the MessaggiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messaggi',
  templateUrl: 'messaggi.html',
})

export class MessaggiPage {
  conversazioni: Conversazione[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public chatService: ChatService) {
    this.conversazioni = chatService.getConversations();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessaggiPage');
  }

  conversazioneTapped(idConversazione){
    this.navCtrl.push(CHAT_PAGE, {"idConversazione": idConversazione});
  }

}
