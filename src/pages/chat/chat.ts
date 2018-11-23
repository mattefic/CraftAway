import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Messaggio } from "../../model/messaggio";
import { ChatService } from "../../services/chat.service";
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  chat: Messaggio[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public chatService: ChatService) {
    this.chat = chatService.getChat(navParams.get('idConversazione'), 0, 1);
    console.log(this.chat);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  sendMessage(testoMessaggio){

  }

  loadMoreMessages(){

  }

}
